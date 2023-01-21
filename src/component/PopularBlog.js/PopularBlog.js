import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LatestBlogItem from '../LatestBlog/LatestBlogItem';
import PopularBlogItem from './PopularBlogItem';
import PopularBlogRight from './PopularBlogRight';
import SocialLinked from './SocialLinked';

const PopularBlog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://exclusive-xylia-ayonjd.koyeb.app/blogs")
            .then((res) => res.json())
            .then((data) => {
                setArticles(data);
            });
    }, []);

    const articleCopy = [...articles];

    return (
        <section className='mid-container'>
            <h1 className='text-2xl font-semibold border-b-[1px] pb-3 mb-5'>Recent Article</h1>
            {/* <p className='text-sm mt-2'>Recent articles are selected based on update published</p> */}
            <div className="lg:flex md:flex">
                <div className='lg:w-[70%] lg:pr-10 md:pr-5 lg:border-r-[1px] md:border-r-[1px]'>
                    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-7 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                        {articleCopy?.reverse()?.slice(0, 2).map((article, index) => (
                            < LatestBlogItem
                                key={index}
                                article={article}
                            />
                        ))}
                    </div>

                    <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-2 gap-x-7 gap-y-4">
                        {articles?.slice(0, 6).map((article) => (
                            <PopularBlogItem
                                key={article._id}
                                article={article}
                            ></PopularBlogItem>
                        ))}
                    </div>
                </div>
                <div className="lg:w-[30%] grid  lg:ml-5 md:ml-5 mt-10 lg:mt-0 md:mt-0">
                    <div>
                        <h2 className='bg-black text-white py-2 pl-3 rounded'>OUR PICKS</h2>
                    </div>
                    <div className=" grid">
                        {articles.slice(0, 4).map((article) => (
                            <PopularBlogRight
                                key={article._id}
                                article={article}
                            ></PopularBlogRight>
                        ))}
                    </div>
                    <div>
                        <SocialLinked />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PopularBlog;