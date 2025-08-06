import React from 'react'
import PostsTab from './components/PostsTab';
import {FilterTab} from './components/FilterTab';

const page = () => {
  return (
    <div className='min-h-screen text-black dark:bg-background bg-background dark:text-white'>
      {/* Main container with proper constraints */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12'>
        
        {/* Grid layout with improved spacing */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 w-full'>
          
          {/* Filter sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-6'>
              <FilterTab />
            </div>
          </div>
          
          {/* Main content area */}
          <div className='lg:col-span-3'>
            <PostsTab />
          </div>
          
        </div>
      </div>      
    </div>
  )
}

export default page

