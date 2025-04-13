import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-28">
            <div className="">
                <a className="btn btn-ghost text-xl"><span className="text-[#003EA4]">Auction</span><span className="text-[#FFD337] ">Gallery</span></a>

            </div>
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Auctions</a>
                <a className="link link-hover">Categories</a>
                <a className="link link-hover">How it works</a>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;