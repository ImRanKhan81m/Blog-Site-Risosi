import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TagsInput } from "react-tag-input-component";
import { BiImageAdd } from "react-icons/bi";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostBlog = () => {
    const [selectedProductTag, setSelectedProductTag] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [richText, setValueOfRichText] = useState("");
    const [valueOfParantCategory, setValueOfParantCategory] = useState("");
    const [imageUploadErrorMessage, setImageUploadErrorMessage] = useState(null);


    // console.log(imageUrl)

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm();

    const blogSubmit = async (data) => {
        const blog = {
            title: data.title,
            authorName: data.author,
            date: data.date,
            description: richText,
            category: data.category,
            tags: selectedProductTag,
            imageURLs: imageUrl,
        };

        console.log(blog)

        fetch("http://localhost:5000/api/v1/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("blog added", result);
            });
    };


    const imgUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`;
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
                if (result.data?.url) {
                    let newImageUrls = [...imageUrl];
                    newImageUrls.push(result.data?.url);
                    setImageUrl(newImageUrls);
                    setImageUploadErrorMessage(null);
                }

                return setImageUploadErrorMessage(
                    "Image Upload failed, please check your internet connectoin"
                );
            });
    };





    return (
        <div className='px-10 py-10'>
            <h1 className='font-semibold text-2xl border-b-[1px] w-52 pb-1 mb-5'>Create a new Blog</h1>

            <div className='bg-white shadow p-5 rounded w-[60%] mx-auto'>
                <form
                    onSubmit={handleSubmit(blogSubmit)}
                    className="mt-5">

                    <div className=" mb-4">
                        <label htmlFor="title" className=" font-semibold ">Blog Title</label>
                        <input type="text" id="title" name="title" className="mt-2 w-full rounded input input-bordered focus:border-primary duration-300 ease-in-out focus:outline-none" placeholder="Title Name"
                            {...register("title", {
                                required: 'Blog title is required!',
                            })}
                            onKeyUp={(e) => {
                                trigger('title')
                            }}
                        />
                        <small className='text-[#FF4B2B] text-xs font-medium my-2'>{errors?.title?.message}</small>
                    </div>

                    <div className='grid grid-cols-2 gap-5'>
                        <div className=" mb-4">
                            <label htmlFor="author" className=" font-semibold ">Author Name</label>
                            <input type="text" id="author" name="author" className="mt-2 w-full rounded input input-bordered focus:border-primary duration-300 ease-in-out focus:outline-none" placeholder="Author Name"
                                {...register("author", {
                                    required: 'Author name is required!',
                                })}
                                onKeyUp={(e) => {
                                    trigger('author')
                                }}
                            />
                            <small className='text-[#FF4B2B] text-xs font-medium my-2'>{errors?.author?.message}</small>
                        </div>

                        <div className=" mb-4">
                            <label htmlFor="date" className=" font-semibold ">Date</label>
                            <input type="date" id="date" name="date" className="mt-2 w-full rounded input input-bordered focus:border-primary duration-300 ease-in-out focus:outline-none"
                                {...register("date", {
                                    required: 'Date is required',
                                })}
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
                                    value={selectedProductTag}
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
                                value={richText}
                                onChange={setValueOfRichText}
                                style={{ height: 200, marginBottom: 12 }}
                            />
                        </div>
                    </div>

                    <div className=" mb-4 mt-16">
                        <label htmlFor="img" className=" font-semibold ">Image</label>
                        <div className="w-full md:w-[70%] mt-3 ">
                            <div className="relative border border-dashed w-96 h-24  text-center">
                                {/* <BsCloudUploadFill
                                    size={35}
                                    className="text-primary mx-auto block  mt-8"
                                /> */}
                                <p className=" font-bold pt-4 text-slate-900">
                                    Drag your image here
                                </p>
                                <span className="text-xs  text-slate-900">
                                    (Only *.jpeg and *.png images will be accepted)
                                </span>
                                <input
                                    type="file"
                                    onChange={handleImageUpload}
                                    className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {imageUrl.map((img) => {
                                    return (
                                        <div
                                            className="  w-[100px] h-auto p-1 bg-white shadow-md rounded-md mt-3 "
                                            key={img?.id}
                                        >
                                            <img
                                                src={img}
                                                alt="category image"
                                                className="w-full h-full object-contain "
                                            />
                                        </div>
                                    );
                                })}
                                <div className="relative w-[100px] h-[100px] p-1 bg-white shadow-md rounded-md mt-3 flex justify-center items-center">
                                    <span>
                                        <BiImageAdd
                                            onChange={handleImageUpload}
                                            size={45}
                                            className="text-primary cursor-pointer hover:text-slate-700"
                                        />
                                        <input
                                            type="file"
                                            onChange={handleImageUpload}
                                            className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-end items-center gap-5 mb-4">
                        {/* <button type='submit' className=" bg-[#3185FC] px-4 py-3 rounded cursor-pointer text-white ml-auto">Publish your Blog</button> */}
                        <button type='submit' className="btn btn-primary ml-auto">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostBlog;