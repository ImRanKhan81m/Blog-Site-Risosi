import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articleDataContext } from '../../App';
import LatestBlogItem from '../LatestBlog/LatestBlogItem';
import PopularBlogItem from './PopularBlogItem';
import PopularBlogRight from './PopularBlogRight';
import SocialLinked from './SocialLinked';

const PopularBlog = () => {
    const { blogs } = useContext(articleDataContext);

    const articleCopy = [...blogs];

    return (
        <section className='mid-container'>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='text-2xl font-bold mb-3 border-b-[1px] w-48 pb-2'>Top Blogs</h1>
                <Link to='/blog'> <h1 className='font-bold cursor-pointer mr-5'>See All</h1></Link>
            </div>
            <div className="lg:flex md:flex">
                <div className='md:w-[70%] lg:pr-10 md:pr-5 lg:border-r-[1px] md:border-r-[1px]'>
                    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                        {articleCopy?.reverse()?.slice(0, 2).map((article, index) => (
                            < LatestBlogItem
                                key={index}
                                blog={article}
                            />
                        ))}
                    </div>

                    <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-2 gap-x-7 gap-y-4">
                        {blogs?.slice(0, 6).map((article) => (
                            <PopularBlogItem
                                key={article._id}
                                blog={article}
                            ></PopularBlogItem>
                        ))}
                    </div>
                </div>
                <div className="md:w-[30%] grid  lg:ml-5 md:ml-5 mt-10 lg:mt-0 md:mt-0">
                    <div>
                        <h2 className='bg-black text-white py-2 pl-3 rounded'>OUR PICKS</h2>
                    </div>
                    <div className=" grid">
                        {blogs.slice(0, 4).map((article) => (
                            <PopularBlogRight
                                key={article._id}
                                blog={article}
                            ></PopularBlogRight>
                        ))}
                    </div>
                    <div className='hidden sm:block'>
                        <SocialLinked />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PopularBlog;