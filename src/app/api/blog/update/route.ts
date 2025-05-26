import { NextRequest, NextResponse } from 'next/server';
import { updateBlogDataFile } from '@/utils/hooks/updateBlogData';

export async function POST(req: NextRequest) {
  try {
    console.log('Checking for blog updates...');
    
    const wasUpdated = await updateBlogDataFile();
    
    if (wasUpdated) {
      console.log('Blog data was updated with new posts');
      return NextResponse.json({ 
        success: true, 
        updated: true, 
        message: 'Blog data updated successfully' 
      });
    } else {
      console.log('Blog data is already up to date');
      return NextResponse.json({ 
        success: true, 
        updated: false, 
        message: 'Blog data is already up to date' 
      });
    }
    
  } catch (error) {
    console.error('Error updating blog data:', error);
    return NextResponse.json(
      { 
        success: false, 
        updated: false, 
        error: 'Failed to update blog data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
