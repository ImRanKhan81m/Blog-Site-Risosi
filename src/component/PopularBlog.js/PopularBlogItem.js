import React from 'react';

const PopularBlogItem = ({ article }) => {
    return (
        <div className='flex items-center gap-3 cursor-pointer mt-5' >
            <div className='w-[35%]'>
                <img className='w-full h-20' src={article?.blogs?.img} alt={article?.blogs?.title} />
            </div>
            <div className='w-[65%]'>
                <h2 className='text-sm font-semibold hover:text-[#da334a]'>{article?.blogs?.Title.slice(0, 50)}</h2>
                <p className='text-xs mt-2 font-light'>{article?.blogs?.date}</p>
            </div>
        </div>
    );
};

export default PopularBlogItem;