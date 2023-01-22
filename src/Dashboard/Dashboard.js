import { faCalendarPlus, faCartArrowDown, faListCheck, faMagnifyingGlass, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Dashboard = () => {

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pl-1">
                <Outlet />
            </div>
            <div className="drawer-side  h-[100vh]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto lg:w-64 w-56  bg-base-100 border-r text-warning py-10 ">
                    {/* <!-- Sidebar content here --> */}

                    <li><NavLink
                        className='flex justify-between items-center' to={'/dashboard'}>
                        <h6 className='font-bold'> All Blogs</h6>
                        {/* <FontAwesomeIcon icon={faListCheck} /> */}
                        <AiOutlineRight/>
                    </NavLink></li>

                    <li><NavLink
                        className='flex justify-between items-center' to={'/dashboard/premium-member'}>
                        <h6 className='font-bold'> Create a New Blog</h6>
                        <AiOutlineRight/>
                    </NavLink></li>

                    <li><NavLink
                        className='flex justify-between items-center' to={'/dashboard/premium-member'}>
                        <h6 className='font-bold'> All Blogs</h6>
                        <AiOutlineRight/>
                    </NavLink></li>

                    
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;