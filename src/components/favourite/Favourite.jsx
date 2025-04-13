import React, {  } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { toast } from 'react-toastify';
const Favourite = ({ favourite, total, handleRemove }) => {

    // const [total,setTotal] = useState(0);
    const notify = () => {
        toast("item remove from favorite list");

    };

    return (

        <div className="w-full md:w-72 bg-white rounded-lg shadow p-4 h-fit">
            <div className="flex items-center gap-2 mb-4">
                {/* <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a4.5 4.5 0 011.04 0 4.5 4.5 0 012.905 2.905 4.5 4.5 0 010 1.04c-.183 1.29-.69 2.416-1.407 3.293a11.041 11.041 0 01-2.242 2.14l-.276.206-.276-.206a11.041 11.041 0 01-2.242-2.14c-.717-.877-1.224-2.003-1.407-3.293a4.5 4.5 0 010-1.04 4.5 4.5 0 012.905-2.905z"
            />
          </svg> */}

                <h3 className="text-lg font-semibold text-gray-800">Favorite Items</h3>
            </div>

            {favourite.length === 0 ? (
                <div className="text-center text-sm text-gray-500 py-10 border-y border-gray-200">
                    <p className="font-medium text-gray-600 mb-1">No favorites yet</p>
                    <p>Click the heart icon on any item<br />to add it to your favorites</p>
                </div>
            ) : (
                <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto mb-4">
                    {favourite.map((item, idx) => (
                        <div key={idx} className="py-2 flex items-center justify-between">
                            <div className="">
                                <p className="text-sm text-gray-700">{item.title} </p>
                                <p className="font-semibold">Bids :{item.bidsCount}</p>
                            </div>
                            <div className="flex gap-1.5">
                                <p className="text-sm font-medium text-gray-800">${item.currentBidPrice}</p>
                                <button onClick={() =>
                                     {
                                        handleRemove(item);
                                     notify();
                                     }}><RxCrossCircled size={15} /></button>
                            </div>


                        </div>
                    ))}
                </ul>
            )}

            <div className="border-t pt-4 mt-2 flex justify-between text-sm text-gray-700 font-medium">
                <span>Total bids Amount</span>
                <span>{total}</span>
            </div>
        </div>


    );
};

export default Favourite;