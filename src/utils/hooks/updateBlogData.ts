import { BlogPost } from '../types/portfolio';
import fs from 'fs';
import path from 'path';

// Interface for tracking blog changes
interface BlogChanges {
  newPosts: BlogPost[];
  removedPosts: BlogPost[];
  updatedPosts: BlogPost[];
  unchangedPosts: BlogPost[];
}

// Function to compare blog data and return detailed changes
function compareBlogs(currentPosts: BlogPost[], latestPosts: BlogPost[]): BlogChanges {
  const currentPostMap = new Map(currentPosts.map(post => [post.id, post]));
  const latestPostMap = new Map(latestPosts.map(post => [post.id, post]));
  
  const newPosts: BlogPost[] = [];
  const updatedPosts: BlogPost[] = [];
  const unchangedPosts: BlogPost[] = [];
  
  // Check for new and updated posts
  for (const latestPost of latestPosts) {
    const currentPost = currentPostMap.get(latestPost.id);
    if (!currentPost) {
      newPosts.push(latestPost);
    } else if (
      currentPost.title !== latestPost.title ||
      Math.abs(currentPost.content.length - latestPost.content.length) > 100
    ) {
      updatedPosts.push(latestPost);
    } else {
      unchangedPosts.push(latestPost);
    }
  }
  
  // Check for removed posts
  const removedPosts: BlogPost[] = [];
  for (const currentPost of currentPosts) {
    if (!latestPostMap.has(currentPost.id)) {
      removedPosts.push(currentPost);
    }
  }
  
  return { newPosts, removedPosts, updatedPosts, unchangedPosts };
}

// Function to extract technology mentions from blog content
function extractTechMentions(text: string): string[] {
  const lowerText = text.toLowerCase();
  const techKeywords = [
    'python', 'javascript', 'typescript', 'react', 'nodejs', 'docker', 'kubernetes',
    'tensorflow', 'pytorch', 'machine learning', 'deep learning', 'ai', 'artificial intelligence',
    'neural networks', 'nlp', 'computer vision', 'robotics', 'iot', 'embedded',
    'arduino', 'raspberry pi', 'microcontrollers', 'aws', 'azure', 'cloud',
    'api', 'database', 'postgresql', 'mongodb', 'microservices', 'devops',
    'algorithm', 'optimization', 'performance', 'automation', 'data science',
    'nextjs', 'vite', 'tailwind', 'groq', 'openai', 'llama', 'chatbot'
  ];
  
  return [...new Set(techKeywords.filter(keyword => lowerText.includes(keyword)))];
}

// Function to fetch latest blog posts from Medium
export async function fetchLatestBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mouhib.otm',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const data = await response.json();
    if (data.status !== 'ok') {
      throw new Error('Invalid RSS feed response');
    }

    // Process blog posts
    const blogPosts: BlogPost[] = data.items.map((item: any, index: number) => {
      // Clean HTML from content
      const cleanContent = item.content
        ? item.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
        : '';
      
      // Extract tech mentions
      const techMentions = extractTechMentions(item.title + ' ' + cleanContent);
      
      // Create summary (first 200 chars of clean content)
      const summary = cleanContent.substring(0, 200) + (cleanContent.length > 200 ? '...' : '');
      
      // Extract thumbnail
      let thumbnail = item.thumbnail;
      if (!thumbnail && item.content) {
        const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) {
          thumbnail = imgMatch[1];
        }
      }

      return {
        id: item.guid || `blog-${index}`,
        title: item.title || 'Untitled Post',
        publishDate: item.pubDate || new Date().toISOString(),
        link: item.link || '#',
        description: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : '',
        content: cleanContent,
        categories: item.categories || [],
        techMentions,
        summary,
        thumbnail
      };
    });

    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Function to update blog data file with proper synchronization
export async function updateBlogDataFile(): Promise<boolean> {
  try {
    const latestPosts = await fetchLatestBlogPosts();
    
    if (latestPosts.length === 0) {
      console.log('No blog posts fetched, keeping existing data');
      return false;
    }

    // Read current blog data to check if update is needed
    const blogDataPath = path.join(process.cwd(), 'src', 'utils', 'data', 'blog.ts');
    let currentPosts: BlogPost[] = [];
    
    if (fs.existsSync(blogDataPath)) {
      try {
        // Read and parse the current blog data file
        const currentContent = fs.readFileSync(blogDataPath, 'utf8');
        
        // Extract the blogData array from the file content using regex
        const blogDataMatch = currentContent.match(/export const blogData: BlogPost\[\] = (\[[\s\S]*?\]);/);
        if (blogDataMatch) {
          try {
            currentPosts = JSON.parse(blogDataMatch[1]);
          } catch (parseError) {
            console.log('Could not parse existing blog data, will update');
          }
        }
      } catch (error) {
        console.log('Could not read existing blog data, will update:', error);
      }
    }

    // Compare current and latest posts to detect changes
    const changes = compareBlogs(currentPosts, latestPosts);
    
    // Check if any changes were detected
    const hasChanges = changes.newPosts.length > 0 || 
                      changes.removedPosts.length > 0 || 
                      changes.updatedPosts.length > 0;
    
    if (!hasChanges) {
      console.log('Blog data is up to date - no changes detected');
      return false;
    }

    // Log the changes detected
    if (changes.newPosts.length > 0) {
      console.log(`New blog posts detected: ${changes.newPosts.length}`);
      changes.newPosts.forEach(post => console.log(`  + ${post.title}`));
    }
    
    if (changes.removedPosts.length > 0) {
      console.log(`Removed blog posts detected: ${changes.removedPosts.length}`);
      changes.removedPosts.forEach(post => console.log(`  - ${post.title}`));
    }
    
    if (changes.updatedPosts.length > 0) {
      console.log(`Updated blog posts detected: ${changes.updatedPosts.length}`);
      changes.updatedPosts.forEach(post => console.log(`  ~ ${post.title}`));
    }

    // Generate aggregated metadata
    const allTechMentions = latestPosts.flatMap(post => post.techMentions);
    const topTechnologies = [...new Set(allTechMentions)]
      .map(tech => ({ tech, count: allTechMentions.filter(t => t === tech).length }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15)
      .map(item => item.tech);

    const recentTopics = [...new Set(latestPosts.flatMap(post => post.categories))].slice(0, 10);

    // Generate the new file content
    const fileContent = `import { BlogPost } from '../types/portfolio';

// Blog data - automatically updated when new posts are available
export const blogData: BlogPost[] = ${JSON.stringify(latestPosts, null, 2)};

// Blog metadata for tracking updates
export const blogMetadata = {
  lastUpdated: '${new Date().toISOString()}',
  totalPosts: ${latestPosts.length},
  topTechnologies: ${JSON.stringify(topTechnologies)},
  recentTopics: ${JSON.stringify(recentTopics)}
};

// Condensed blog insights for chatbot context
export const blogInsights = {
  recentTitles: ${JSON.stringify(latestPosts.slice(0, 5).map(p => p.title))},
  primaryTechnologies: ${JSON.stringify(topTechnologies.slice(0, 8))},
  writingTopics: ${JSON.stringify(recentTopics.slice(0, 6))},
  totalArticles: ${latestPosts.length},
  latestPublishDate: '${latestPosts[0]?.publishDate || new Date().toISOString()}'
};
`;

    // Write the updated file
    fs.writeFileSync(blogDataPath, fileContent, 'utf8');
    console.log(`Blog data updated with ${latestPosts.length} posts`);
    console.log(`Changes summary: +${changes.newPosts.length} new, -${changes.removedPosts.length} removed, ~${changes.updatedPosts.length} updated`);
    
    return true;
  } catch (error) {
    console.error('Error updating blog data file:', error);
    return false;
  }
}
