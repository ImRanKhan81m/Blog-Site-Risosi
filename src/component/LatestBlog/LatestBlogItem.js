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
            className='shadow rounded cursor-pointer bg-white'>
            <div className='h-48 overflow-hidden'>
                <img className='w-full h-full object-cover' src={blog?.image} alt="" />
            </div>
            <div className='p-5'>
                <div className='text-xs flex justify-between mb-3'>
                    <p className='font-bold'>{blog?.authorName}</p>
                    <p>{blog?.publishDate}</p>
                </div>
                {
                    blog?.tags?.map((tag) => (
                        <span className=' text-xs bg-gray-200 px-2 py-1 rounded-full mr-2'>{tag}</span>
                    ))
                }
                <h6 className='font-bold text-xl cursor-pointer hover:text-error duration-200 mt-4'>{blog?.title?.slice(0, 50)}</h6>

                <div
                   className='text-xs pb-3 pt-1'
                    dangerouslySetInnerHTML={{ __html: blog?.description?.slice(0, 250) }}
                >
                </div>
            </div>
        </div>
    );
};

export default LatestBlogItem;