import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {    // Fetch from RSS2JSON service to convert Medium RSS to JSON
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
    }    // Process the posts
    const processedPosts = data.items.slice(0, 6).map((item: any) => {
      // Extract image from content if no thumbnail is provided
      let imageUrl = item.thumbnail;
      
      if (!imageUrl && item.content) {
        // Try to extract first image from content
        const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }
      
      // Clean description
      const cleanDescription = item.description
        ? item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
        : '';

      // Log for debugging
      console.log('Post:', item.title);
      console.log('Original thumbnail:', item.thumbnail);
      console.log('Extracted image:', imageUrl);

      return {
        title: item.title,
        pubDate: item.pubDate,
        link: item.link,
        guid: item.guid,
        author: item.author,
        thumbnail: imageUrl || null,
        description: cleanDescription,
        content: item.content,
        categories: item.categories || []
      };
    });

    return NextResponse.json({
      success: true,
      posts: processedPosts
    });

  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch blog posts',
        posts: []
      },
      { status: 500 }
    );
  }
}
