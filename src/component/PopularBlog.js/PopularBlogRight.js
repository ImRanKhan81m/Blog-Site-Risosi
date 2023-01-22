import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularBlogRight = ({ blog }) => {
    const navigate = useNavigate()

    const handleDetailsPage = () => {
        navigate(`/blog-details/${blog?._id}`)
    }
    return (
        <div
            onClick={handleDetailsPage}
            className='flex items-center gap-2 border-b-[1px] py-3 cursor-pointer'
        >
            <div className='w-[35%]'>
                <img className='w-full h-20 object-cover' src={blog?.image} alt={blog?.image} />
            </div>
            <div className='w-[65%] p-2'>
                <h2 className='text-sm font-semibold hover:text-[#da334a]'>{blog?.title?.slice(0, 50)}</h2>
                <p className='text-xs mt-2 font-light'>{blog?.publishDate}</p>
            </div>
        </div>
    );
};

export default PopularBlogRight;