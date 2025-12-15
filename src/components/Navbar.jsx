import React, { use } from 'react';
import { Link } from 'react-router';
import userPNG from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const {user} = use(AuthContext);
    return (
        
        <div className='w-10/12 mx-auto flex justify-between items-center m-5'>
            <div>{user && user.email}</div>
            <div className=""></div>
            <div className='flex items-center gap-5 text-gray-600'>
                
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/career'}>Career</Link>
            </div>
            <div className='flex gap-6'>
                <img src={userPNG} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;