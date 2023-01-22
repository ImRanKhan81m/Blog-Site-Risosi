import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/image 21.png'




const LatestBlogItem = ({ blog }) => {
    const navigate = useNavigate()

    const handleDetailsPage = () => {
        navigate('/blog-details/details')
    }

    return (
        <div
            onClick={() => handleDetailsPage()}
            className='shadow rounded-xl cursor-pointer'>
            <div className='h-48 overflow-hidden'>
                <img className='w-full h-full object-cover' src={blog?.image} alt="" />
            </div>
            <div className='p-5'>
                <div className='text-xs flex justify-between mb-3'>
                    <p>{blog?.authorName}</p>
                    <p>{blog?.publishDate}</p>
                </div>
                <h6 className='font-bold text-xl cursor-pointer hover:text-error duration-200'>{blog?.title?.slice(0, 50)}</h6>
                <p className='text-xs py-3'>{blog?.description}</p>
            </div>
        </div>
    );
};

export default LatestBlogItem;