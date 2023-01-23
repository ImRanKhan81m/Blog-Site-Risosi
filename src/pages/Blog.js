import React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleDataContext } from '../App';
import LatestBlogItem from '../component/LatestBlog/LatestBlogItem';
import Loading from '../component/Shared/Loading';
import { toggleFilters } from '../features/filter/filterSlice';

const Blog = () => {
    const { filters } = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const { dark } = useContext(articleDataContext);
    const { blogs, loader } = useContext(articleDataContext);

    const activeClass = `bg-warning ${dark && 'text-[#fffff] bg-primary border-warning'} text-white`

    let content



    if (blogs?.length) {
        content = blogs.map(item => (
            <LatestBlogItem
                key={item._id}
                blog={item}
            />
        ))
    }

    if (blogs?.length && filters?.length) {
        content = blogs
            .filter(item => {
                if (filters.includes('all')) {
                    return item
                }
                return filters.includes(item?.category)
            })
            .map(item => (
                <LatestBlogItem
                    key={item._id}
                    blog={item}
                />
            ))
    }

    return (
        <div className='mid-container'>
            <div className='mt-10 mb-14'>
                <h1 className='text-4xl text-center font-bold'>All Blogs</h1>
                <p className='text-sm text-center mt-2'>I write Blogs about programming, design and cutting edge technologies!</p>
            </div>


            <div className='flex justify-center items-center'>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mb-10 ">
                    <div
                        onClick={() => dispatch(toggleFilters('all'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('all') ? activeClass : null}`}>All</div>
                    <div
                        onClick={() => dispatch(toggleFilters('Programming'))}
                        className={`border flex justify-center items-center px-5 py-2 hover:border-red rounded-3xl cursor-pointer ${filters.includes('Programming') ? activeClass : null}`}>Programming</div>
                    <div
                        onClick={() => dispatch(toggleFilters('GitHub'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('GitHub') ? activeClass : null}`}>GitHub</div>
                    <div
                        onClick={() => dispatch(toggleFilters('Development'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('Development') ? activeClass : null}`}>Web-Development</div>
                    <div
                        onClick={() => dispatch(toggleFilters('Technology'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('Technology') ? activeClass : null}`}>Technology</div>
                    <div
                        onClick={() => dispatch(toggleFilters('Design'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('Design') ? activeClass : null}`}>Web Design</div>
                    <div
                        onClick={() => dispatch(toggleFilters('UI/UX'))}
                        className={`border flex justify-center items-center px-5 py-2   hover:border-red rounded-3xl cursor-pointer ${filters.includes('UI/UX') ? activeClass : null}`}>UI/UX</div>
                </div>
            </div>


            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-7 mb-24'>
                {content}
            </div>
        </div>
    );
};

export default Blog;