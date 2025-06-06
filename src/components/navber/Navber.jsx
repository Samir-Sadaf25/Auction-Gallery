import React from 'react';
import { FaRegBell } from "react-icons/fa6";

const Navber = () => {
    return (
        // <div>
        <div className="navbar bg-base-100 shadow-sm flex justify-around">
            <div className="">
                <a className="btn btn-ghost text-xl"><span className="text-[#003EA4]">Auction</span><span className="text-[#FFD337] ">Gallery</span></a>
            </div>
            <div className="">
                {/* <nav className=""> */}
                <ul className="flex gap-3 lg:gap-14">
                    <li><a href="">Home</a></li>
                    <li><a href="">Auctions</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">How to works</a></li>
                </ul>
                {/* </nav> */}
            </div>
            <div className="">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaRegBell size={20} />
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Navber;