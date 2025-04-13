import React from 'react';
const Hero = () => {
    return (
        <div
            className="hero h-[730px]"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/7xkPR5Px/Banner-min.jpg)",
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content  justify-self-start pl-10">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
                    <p className="mb-5">
                    Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="btn bg-white text-black rounded-4xl">Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;