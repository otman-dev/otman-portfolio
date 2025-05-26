'use client';

import { useEffect } from 'react';

export function BlogDataInitializer() {
  useEffect(() => {
    // Initialize blog data on client side
    const initializeBlogData = async () => {
      try {
        // Call our API endpoint to update blog data
        const response = await fetch('/api/blog/update', {
          method: 'POST',
        });
        
        if (response.ok) {
          const result = await response.json();
          if (result.updated) {
            console.log('Blog data updated successfully');
          }
        }
      } catch (error) {
        console.log('Blog data initialization failed:', error);
      }
    };

    // Run on mount and then periodically (every hour)
    initializeBlogData();
    
    // Set up periodic check (every hour)
    const interval = setInterval(initializeBlogData, 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything
}
