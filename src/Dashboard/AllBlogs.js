import React, { useContext } from 'react';
import { articleDataContext } from '../App';
import AllBlogItem from '../component/DashboardItem/AllBlogItem';
import Loading from '../component/Shared/Loading';

const AllBlogs = () => {

    const { blogs, loader } = useContext(articleDataContext);

    return (
        <>
            {
                loader ? <Loading /> : (
                    <div className='px-5 sm:py-10 py-5'>
                        <h1 className='font-semibold text-2xl border-b-[1px] w-28 pb-1 mb-5'>All Blogs</h1>
                        <div className='grid md:grid-cols-3 gap-x-5 gap-y-7'>
                            {blogs?.map((article) => (
                                <AllBlogItem
                                    key={article._id}
                                    blog={article}
                                ></AllBlogItem>
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default AllBlogs;