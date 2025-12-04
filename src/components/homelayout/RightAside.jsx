import React from 'react';
import SocialLogin from './SocialLogin';
import FIndUsOn from './FIndUsOn';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FIndUsOn></FIndUsOn>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;