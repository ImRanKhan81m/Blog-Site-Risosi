import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/image 21.png'




const LatestBlogItem = () => {
    const navigate = useNavigate()

    const handleDetailsPage = () => {
        navigate('/blog-details/details')
    }
    
    return (
        <div 
        onClick={() => handleDetailsPage()}
        className='shadow rounded-xl cursor-pointer'>
            <img className='w-full' src={img} alt="" />
            <div className='p-5'>
                <div className='text-xs flex justify-between mb-3'>
                    <p>Best PACKAGES- Part 1</p>
                    <p>24 MAY 2022</p>
                </div>
                <h6 className='font-bold text-xl cursor-pointer hover:text-primary duration-200'>Minimalist Guide to Flutter Hooks</h6>
                <p className='text-xs py-3'>Hooks are a new kind of object that manages a Widget life-cycles. They exist for one reason: increase the code-sharing between widgets by removing duplicates.....</p>
            </div>
        </div>
    );
};

export default LatestBlogItem;