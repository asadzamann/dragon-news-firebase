import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
        <fieldset className="fieldset">
             {/* name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
             {/* phtoURL */}
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Give Your Photo URL" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='font-semibold'>Don't have an account? <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Register;