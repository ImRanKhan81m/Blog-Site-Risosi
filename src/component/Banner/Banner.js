import React from 'react';
import img from '../../assets/image 31.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mid-container'>
            <div className='mt-10 flex items-center gap-5'>
                <div className='w-[50%]'>
                    <p>PROFESSIONAL</p>
                    <h1 className='font-bold text-5xl'>Welcome to our Blog Site!</h1>
                    <p className='mt-3 text-justify'>Here, we share our thoughts and insights on the latest trends and developments in the world of coding. From new programming languages and frameworks to tips and tricks for improving your code, we cover it all. Our team of experts are dedicated to providing you with informative and engaging content that will help you stay ahead of the curve. Whether you're a seasoned developer or just starting out, we have something for everyone. So come on in, have a look around, and join the conversation. Thanks for visiting!</p>
                </div>

                <div className='w-[50%] relative'>
                    <div className='bg-img flex justify-center items-center '>
                        <img className='w-96' src={img} alt="" />
                    </div>

                    <div className='absolute z-50 -mt-32'>
                        <div className='px-5 py-3 shadow-xl rounded-md bg-white'>
                            <h6 className='font-bold'>My Main Skills</h6>
                            <div>
                                <h1 className='font-bold text-sm mt-3'>ReactJS</h1>
                                <progress className="progress progress-primary bg-accent w-44 h-[5px]" value="90" max="100"></progress>
                            </div>
                            <div>
                                <h1 className='font-bold text-sm mt-2'>NodeJS</h1>
                                <progress className="progress progress-primary bg-accent w-44 h-[5px]" value="70" max="100"></progress>
                            </div>
                            <div>
                                <h1 className='font-bold text-sm mt-3'>MongoDB</h1>
                                <progress className="progress progress-primary bg-accent w-44 h-[5px]" value="80" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;