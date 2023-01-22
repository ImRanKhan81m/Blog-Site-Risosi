import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { articleDataContext } from '../App';
import LatestBlogItem from '../component/LatestBlog/LatestBlogItem';

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    const { blogs } = useContext(articleDataContext);

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/api/v1/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data?.data)
            })
            .finally(() => setLoading(false))
    }, [id])

    // related blog
    const relatedBlogs = blogs?.filter((blog) => blog?._id !== id);

    return (
        <div className='mid-container'>
            <div className='pt-10 md:pb-20 pb-5'>
                <img className='w-full h-96 object-cover mb-3' src={blog?.image} alt="" />
                <h2 className='mt-5 font-bold text-2xl mb-2'>{blog?.title}</h2>
                {
                    blog?.tags?.map((tag) => (
                        <span className=' text-xs text-white bg-secondary px-3 py-1 rounded-full mr-2'>{tag}</span>
                    ))
                }

                <div className=' flex justify-between mb-3 mt-3'>
                    <p className='font-bold'>{blog?.authorName}</p>
                    <p>{blog?.publishDate}</p>
                </div>

                <div
                    className='text-xs pb-3 pt-1'
                    dangerouslySetInnerHTML={{ __html: blog?.description }}
                >
                </div>

            </div>

            <h1 className='font-semibold text-2xl border-b-[1px] w-52 pb-1 mb-5'>Related Blogs</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 pb-20'>
                {
                    relatedBlogs?.slice(0, 3).map((blog) => (
                        <LatestBlogItem
                            key={blog?._id}
                            blog={blog}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BlogDetails;