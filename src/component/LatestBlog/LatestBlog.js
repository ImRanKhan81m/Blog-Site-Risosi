import React from 'react';
import LatestBlogItem from './LatestBlogItem';

const LatestBlog = () => {
    return (
        <div className='mid-container'>
            <div className='md:mt-40 mt-10 pb-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold mb-3 border-b-[1px] w-48 pb-2'>Latest Blogs</h1>
                    <h1 className='font-bold cursor-pointer mr-5'>See All</h1>
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-8'>
                    <LatestBlogItem />
                    <LatestBlogItem />
                    <LatestBlogItem />
                    <LatestBlogItem />
                    <LatestBlogItem />
                    <LatestBlogItem />
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;