import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaCediSign } from 'react-icons/fa6';

const FIndUsOn = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Find Us ON</h1>
            <div className="join join-vertical w-full *:bg-white *:border-gray-300 *:p-6 mt-5 flex *:justify-start">
                <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item"><BsTwitterX></BsTwitterX> Twitter</button>
                <button className="btn join-item"><BsInstagram></BsInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FIndUsOn;