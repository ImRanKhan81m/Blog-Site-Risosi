import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { TagsInput } from "react-tag-input-component";
import { BiImageAdd } from "react-icons/bi";
import { BsCloudUploadFill } from "react-icons/bs";
import ReactQuill from 'react-quill';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { articleDataContext } from '../App';

const EditBlog = () => {
    const [blog, setBlog] = useState({})
    const [selectedProductTag, setSelectedProductTag] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [richText, setValueOfRichText] = useState("");
    const [valueOfParantCategory, setValueOfParantCategory] = useState("");
    const [imageUploadErrorMessage, setImageUploadErrorMessage] = useState(null);
    const { id } = useParams();
    const { title, description, image, category, tags, authorName, publishDate } = blog
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const { refresh, setRefresh } = useContext(articleDataContext);

    // get blog by id
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/api/v1/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data?.data)
            })
            .finally(() => setLoading(false))
    }, [id])


    const { register, handleSubmit, trigger, formState: { errors } } = useForm({
        defaultValues: {
            title
        }
    });

    console.log(tags)

    const blogSubmit = async (data) => {
        const blog = {
            title: data.title || title,
            authorName: data.author || authorName,
            publishDate: data.date || publishDate,
            description: richText || description,
            category: data.category || category,
            tags: selectedProductTag || tags,
            image: imageUrl || image,
        };

        console.log(blog)

        fetch(`http://localhost:5000/api/v1/blog/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result?.status === 'success') {
                    toast.success('Blog updated successfully')
                    setRefresh(!refresh)
                    navigate('/dashboard/all-blogs')
                }
            }
            )
    };


    // const imgUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;

    const imgUrl = `https://api.imgbb.com/1/upload?key=14461d1404019ac5e51b83bd6b860f94`;
    const handleImageUpload = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append("image", image);

        fetch(imgUrl, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                setImageUrl(result.data?.url);
            });
    };


    return (
        <>
            {
                loading ? <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                    (
                        <div className='px-10 py-10'>
                            <h1 className='font-semibold text-2xl border-b-[1px] w-52 pb-1 mb-5'>Create a new Blog</h1>

                            <div className='bg-white shadow p-5 rounded w-[60%] mx-auto'>
                                <form
                                    onSubmit={handleSubmit(blogSubmit)}
                                    className="mt-5">

                                    <div className=" mb-4">
                                        <label htmlFor="title" className=" font-semibold ">Blog Title</label>
                                        <input type="text" id="title" name="title" className="mt-2 w-full rounded input input-bordered focus:border-primary duration-300 ease-in-out focus:outline-none" placeholder={title}
                                            {...register("title")}
                                            onKeyUp={(e) => {
                                                trigger('title')
                                            }}
                                        />
                                    </div>

                                    <div className='grid grid-cols-2 gap-5'>
                                        <div className=" mb-4">
                                            <label htmlFor="author" className=" font-semibold ">Author Name</label>
                                            <input type="text" id="author" name="author" className="mt-2 w-full rounded input input-bordered focus:border-primary duration-300 ease-in-out focus:outline-none" placeholder={authorName}
                                                {...register("author")}
                                                onKeyUp={(e) => {
                                                    trigger('author')
                                                }}
                                            />
                                            <small className='text-[#FF4B2B] text-xs font-medium my-2'>{errors?.author?.message}</small>
                                        </div>

                                        <div className=" mb-4">
                                            <label htmlFor="date" className=" font-semibold ">Date</label>
                                            <input type="date" id="date" name="date" className="mt-2 w-full rounded input input-bordered focus:border-primary duration-300 ease-in-out focus:outline-none"
                                                {...register("date")}
                                                onKeyUp={(e) => {
                                                    trigger('date')
                                                }}
                                            />
                                            <small className='text-[#FF4B2B] text-xs font-medium my-2'>{errors?.date?.message}</small>

                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 gap-5'>
                                        <div className=" mb-4">
                                            <label htmlFor="tags" className=" font-semibold ">Tags of the blogs</label>
                                            <div className='mt-2'>
                                                <TagsInput
                                                    value={tags}
                                                    onChange={setSelectedProductTag}
                                                    placeHolder="enter tag name"
                                                />
                                                <em className="text-xs">Press enter to add new tag</em>
                                            </div>
                                        </div>

                                        <div className=" mb-4">
                                            <label htmlFor="category" className=" font-semibold ">Category</label>
                                            <select
                                                className="select select-bordered w-full mt-2 focus:outline-none "
                                                {...register("category", {
                                                    required: ' Category are required!',
                                                })}
                                                onKeyUp={(e) => {
                                                    trigger('category')
                                                }}
                                            >
                                                <option disabled selected> Category </option>
                                                <option>Programming</option>
                                                <option>Resume</option>
                                                <option >GitHub</option>
                                                <option >Machine Learning</option>
                                                <option >Web Development</option>
                                                <option >ReactJS</option>
                                                <option>NodeJS</option>
                                                <option >MongoDB</option>
                                                <option >CSS</option>
                                                <option >Tailwind CSS</option>
                                                <option>Flutter</option>
                                                <option >Technology</option>
                                                <option >Web Design</option>
                                                <option>UI/UX</option>
                                            </select>
                                            <small className='text-[#FF4B2B] text-xs font-medium my-2'>{errors?.category?.message}</small>
                                        </div>
                                    </div>




                                    <div className=" gap-5 mb-4">
                                        <label htmlFor="description" className=" font-semibold ">Description/Details</label>
                                        <div className="w-full mt-2">
                                            <ReactQuill
                                                theme="snow"
                                                value={description}
                                                onChange={setValueOfRichText}
                                                style={{ height: 200, marginBottom: 12 }}
                                            />
                                        </div>
                                    </div>



                                    <div className="w-full  mt-16">
                                        <div className="relative border border-dashed h-28 w-96  text-center">
                                            <BsCloudUploadFill
                                                size={25}
                                                className="text-primary mx-auto block  mt-4"
                                            />
                                            <p className=" text-slate-900">
                                                Drag your image here
                                            </p>
                                            <span className="text-xs text-slate-900">
                                                (Only *.jpeg and *.png images will be accepted)
                                            </span>
                                            <input
                                                type="file"
                                                onChange={handleImageUpload}
                                                className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
                                            />
                                        </div>
                                        {imageUrl && (
                                            <div className="  w-[100px] h-auto p-1 bg-white shadow-md rounded-md mt-3 ">
                                                <img
                                                    src={image}
                                                    width="100"
                                                    height="2"
                                                    alt="category image"
                                                    className="w-full h-full object-contain "
                                                />
                                            </div>
                                        )}
                                    </div>


                                    <div className="flex justify-end items-center gap-5 mb-4">
                                        {/* <button type='submit' className=" bg-[#3185FC] px-4 py-3 rounded cursor-pointer text-white ml-auto">Publish your Blog</button> */}
                                        <button type='submit' className="btn btn-primary ml-auto">Add Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
            }
        </>
    );
};

export default EditBlog;