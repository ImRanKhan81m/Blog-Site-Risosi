import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularBlogItem = ({ blog }) => {
    const navigate = useNavigate()

    const handleDetailsPage = () => {
        navigate(`/blog-details/${blog?._id}`)
    }

    return (
        <div 
            onClick={handleDetailsPage}
        className='flex items-center gap-3 cursor-pointer mt-5' >
            <div className='w-[35%]'>
                <img className='w-full h-20 object-cover' src={blog?.image} alt={blog?.image} />
            </div>
            <div className='w-[65%]'>
                <h2 className='text-sm font-semibold hover:text-[#da334a]'>{blog?.title?.slice(0, 50)}</h2>
                <p className='text-xs mt-2 font-light'>{blog?.publishDate}</p>
            </div>
        </div>
    );
};

export default PopularBlogItem;