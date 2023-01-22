import React, { useContext } from 'react';
import { articleDataContext } from '../App';
import AllBlogItem from '../component/DashboardItem/AllBlogItem';

const AllBlogs = () => {

    const { blogs } = useContext(articleDataContext);

    console.log(blogs)
    return (
        <>
            <div className='px-10 py-10 '>
                <h1 className='font-semibold text-2xl border-b-[1px] w-28 pb-1 mb-5'>All Blogs</h1>
                <div className='grid grid-cols-4 gap-x-5 gap-y-7'>
                    {blogs?.map((article) => (
                        <AllBlogItem
                            key={article._id}
                            blog={article}
                        ></AllBlogItem>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllBlogs;