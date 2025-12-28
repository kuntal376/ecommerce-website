import React from "react";
import { NavLink as Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { LuGitCompareArrows } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { PiStorefront } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import Search from "./search";
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="top-strip border-b border-gray-300">
                <div className="container-strip">
                        <div className="col-1 w-[50%] text-left">
                            <p className="font-[500]">!!! Free Shipping Over ₹1000 & Free Returns !!!</p>
                        </div>
                        <div className="col-2 flex items-center gap-4 justify-start">
                            <ul className="flex items-center gap-4">
                                <li>
                                    <Link to="/order-tracking" className="font-[600] text-gray-500 hover:text-blue-900">Order Tracking</Link>
                                </li>|
                                <li>
                                    <Link to="/helpcenter" className="font-[600] text-gray-500 hover:text-blue-900">Help Center</Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="header-main container-fluid">
                <div className="container-main flex items-center">
                <div className="col-1 w-[20%]">
                    <div className="logo">
                        <Link to="/">
                            <h2 className="text-3xl font-bold text-blue-900">E-Shop</h2>
                        </Link>
                    </div>
                </div>
                <div className="col-2 w-[45%]">
                    <div className="search-wrapper w-full">
                        <Search />
                    </div>
                </div>
                <div className="col-3 flex items-center justify-end gap-6">
                   <div className="profile-container relative">
                        <Link to="/Login">
                        <button className="login-btn">
                        
                            <CgProfile className="w-6 h-6 mr-2 inline-block" />
                            <span className="text-m font-[600]">Log in ▾</span>
                        </button>
                        </Link>
                        <div className="dropdown-menu text-sm">
                            <Link to="/profile"><CgProfile className="w-4 h-4 mr-2 inline-block" />My Profile</Link>
                            <Link to="/orders"><BsBoxSeam className="w-4 h-4 mr-2 inline-block" />Orders</Link>
                            <Link to="/wishlist"><FaRegHeart className="w-4 h-4 mr-2 inline-block" />Wishlist</Link>
                            <hr/> <Link to="/signup" className="SignUp">New Account?<strong className="text-red-900">Sign Up</strong></Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 justify-end max-auto">
                        <Link to="/compare" className="hover:text-blue-900">
                                <div className="flex flex-row items-center height-full gap-1">
                                <LuGitCompareArrows className="w-6 h-6" />
                                <span className="text-m font-[600]">Compare</span>
                                </div>
                        </Link>
                        <Link to="/cart" className="hover:text-blue-900">
                                <div className="flex flex-row items-center height-full gap-1">
                                <BsCart3 className="w-6 h-6" />
                                <span className="text-m font-[600]">Cart</span>
                                </div>
                        </Link>
                        <Link to="/seller" className="hover:text-blue-900">
                                <div className="flex flex-row items-center height-full gap-1">
                                <PiStorefront className="w-6 h-6" />
                                <span className="text-m font-[600]">Become a Seller</span>
                                </div>
                        </Link>
                    </div>
                    <div className="menu-container hover:text-blue-900">
                            <div className="menu-icon">
                                <SlOptionsVertical className="w-4 h-4" />
                            </div>
                            <div className="more-menu text-sm">
                                <Link to="/notification-pref"><FaRegBell className="w-4 h-4 mr-2 inline-block" />Notification Preference</Link>
                                <Link to="/advertise"><IoMdTrendingUp className="w-4 h-4 mr-2 inline-block" />Advertise</Link>
                                <Link to="/download-app"><MdOutlineFileDownload className="w-4 h-4 mr-2 inline-block" />Download App</Link>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header;