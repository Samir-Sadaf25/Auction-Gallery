import React, { useEffect, useState } from 'react';
// import Auction from '../auction/auction';
//import { GrFavorite } from "react-icons/gr"
import { MdOutlineFavorite } from "react-icons/md";
// import React from 'react';
import { toast } from 'react-toastify';

const Auctions = ({ handleFavourite, favourite }) => {

    const isFavorited = (id) => favourite.some(fav => fav.id === id);


    const [auctions, setAuctions] = useState([])
    useEffect(() => {
        fetch('auction.json')
            .then(res => res.json())
            .then(data => setAuctions(data))
    }, [])

    const notify = () => {
        toast("item added to your favorite list");

    };
    // console.log(auctions);
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Active Auctions</h2>
            <p className="text-gray-500 mb-4">Discover and bid on extraordinary items</p>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                    <thead>
                        <tr className="text-gray-600 text-sm">
                            <th className="p-2">Items</th>
                            <th className="p-2">Current Bid</th>
                            <th className="p-2">Time Left</th>
                            <th className="p-2 text-center">Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {auctions.map((item) => (
                            <tr key={item.id} className="bg-gray-50 hover:bg-gray-100 rounded-md">
                                <td className="flex items-center gap-3 p-2">
                                    <img src={item.image} alt="" className="w-12 h-12 rounded object-cover" />
                                    <p className="text-sm text-gray-700">{item.title}</p>
                                </td>
                                <td className="p-2 text-gray-700">${item.currentBidPrice}</td>
                                <td className="p-2 text-gray-700">{item.timeLeft}</td>
                                <td className="p-2 text-center">
                                    <button className={`transition ${isFavorited(item.id)
                                            ? "text-red-500 cursor-not-allowed"
                                            : "text-gray-500 hover:text-blue-600"
                                        }`}
                                        disabled={isFavorited(item.id)}
                                        onClick={() => {
                                            handleFavourite(item);
                                            notify();
                                        }}>
                                        <MdOutlineFavorite size={20} />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Auctions;