import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';

const AllBlogItem = ({ blog }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);



    return (
        <div
            className='shadow rounded cursor-pointer bg-white'>
            <div className='h-48 overflow-hidden'>
                <img className='w-full h-full object-cover' src={blog?.image} alt="" />
            </div>
            <div className='p-5'>
                <div className='text-xs flex justify-between mb-3'>
                    <p>{blog?.authorName}</p>
                    <p>{blog?.publishDate}</p>
                </div>
                {
                    blog?.tags?.map((tag) => (
                        <span className=' text-xs bg-gray-200 px-2 py-1 rounded-full mr-2'>{tag}</span>
                    ))
                }
                <h6 className='font-bold text-xl cursor-pointer hover:text-error duration-200 mt-4'>{blog?.title?.slice(0, 50)}</h6>
                <p className='text-xs pb-3 pt-1'>{blog?.description}</p>

                <div className='mt-3 flex '>
                    <button className='bg-warning mr-2 text-white px-3 py-1 rounded text-sm'>Edit Blog</button>

                    <label
                        onClick={() => setOpenDeleteModal(!openDeleteModal)}
                        htmlFor="my-modal-4"
                        className='bg-error text-white px-3 py-1 rounded text-sm cursor-pointer'>
                        Delete
                    </label>
                    {
                        openDeleteModal && (

                            <DeleteModal 
                            blog={blog} 
                            setOpenDeleteModal={setOpenDeleteModal} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogItem;