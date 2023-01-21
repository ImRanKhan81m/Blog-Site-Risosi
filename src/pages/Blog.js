import React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleDataContext } from '../App';
import LatestBlogItem from '../component/LatestBlog/LatestBlogItem';
import { toggleFilters } from '../features/filter/filterSlice';

const Blog = () => {
    const { filters } = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const { dark } = useContext(articleDataContext);

    const activeClass = `bg-warning ${dark && 'text-[#fffff] bg-primary border-warning' } text-white`

    return (
        <div className='mid-container'>
            <div className='mt-10 mb-14'>
                <h1 className='text-4xl text-center font-bold'>All Blogs</h1>
                <p className='text-sm text-center mt-2'>I write Blogs about programming, design and cutting edge technologies!</p>
            </div>


            <div className='flex justify-center items-center'>
                <div className="sm:flex sm:gap-3 grid grid-cols-2 gap-5 mb-10 ">
                    <div
                        onClick={() => dispatch(toggleFilters('all'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('all') ? activeClass : null}`}>All</div>
                    <div
                        onClick={() => dispatch(toggleFilters('programming'))}
                        className={`border flex justify-center items-center px-5 py-2 hover:border-red rounded-3xl cursor-pointer ${filters.includes('programming') ? activeClass : null}`}>Programming</div>
                    <div
                        onClick={() => dispatch(toggleFilters('development'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('development') ? activeClass : null}`}>Development</div>
                    <div
                        onClick={() => dispatch(toggleFilters('design'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('design') ? activeClass : null}`}>Design</div>
                    <div
                        onClick={() => dispatch(toggleFilters('application'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('application') ? activeClass : null}`}>Application</div>
                </div>
            </div>


            <div className='grid grid-cols-3 gap-x-5 gap-y-7'>
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
                <LatestBlogItem />
            </div>
        </div>
    );
};

export default Blog;