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

                    <div className='absolute mr-20 mb-0'>
                        <div className='p-5 bg-accent rounded-md'>
                            <h6 className=''>Hi, I’m an eager <br/> developer who <br/> flutter around!</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;