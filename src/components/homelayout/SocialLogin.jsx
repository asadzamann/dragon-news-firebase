import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Login With</h1>
            <div className='grid grid-cols-1 gap-4 mt-5'>
               <button className='w-full btn btn-outline btn-secondary'><FaGoogle size={24}></FaGoogle> Login With Google</button>
               <button className='w-full btn btn-outline'><FaGithub size={24} ></FaGithub> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;