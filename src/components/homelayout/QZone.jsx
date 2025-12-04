import React from 'react';
import swimming from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playground from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 *:p-4'>
            <h1 className='font-bold text-2xl'>QZone</h1>
            <img src={swimming} alt="" />
            <img src={classImg} alt="" />
            <img src={playground} alt="" />
        </div>
    );
};

export default QZone;