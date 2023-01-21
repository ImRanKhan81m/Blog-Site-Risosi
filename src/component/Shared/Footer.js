import React from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
import {FiFigma} from 'react-icons/fi';
import {GrInstagram} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';
import {ImWhatsapp} from 'react-icons/im';




const Footer = () => {
    return (
        <div className='bg-[#232932] py-7'>
            <div className='mid-container flex justify-center items-center'>
                <div className='grid grid-cols-8 gap-5'>
                    <div className='h-8 w-8 bg-white rounded flex justify-center items-center cursor-pointer hover:bg-error hover:text-white duration-200'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='h-8 w-8 bg-white rounded flex justify-center items-center cursor-pointer hover:bg-error hover:text-white duration-200'>
                        <FiGithub/>
                    </div>
                    <div className='h-8 w-8 bg-white rounded flex justify-center items-center cursor-pointer hover:bg-error hover:text-white duration-200'>
                        <FaFacebookF/>
                    </div>
                    <div className='h-8 w-8 bg-white rounded flex justify-center items-center cursor-pointer hover:bg-error hover:text-white duration-200'>
                        <FiFigma/>
                    </div>
                    <div className='h-8 w-8 bg-white rounded flex justify-center items-center cursor-pointer hover:bg-error hover:text-white duration-200'>
                        <GrInstagram/>
                    </div>
                    <div className='h-8 w-8 bg-white rounded flex justify-center items-center cursor-pointer hover:bg-error hover:text-white duration-200'>
                        <BsTwitter/>
                    </div>
                    <div className='h-8 w-8 bg-white rounded flex justify-center items-center cursor-pointer hover:bg-error hover:text-white duration-200'>
                        <ImWhatsapp/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;