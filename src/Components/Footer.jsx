import React from 'react';

import address from '../assets/addrss.png'
import phone from '../assets/phone.png'
import mail from '../assets/email.png'

const Footer = () => {
    return (
        <div className=' py-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:place-items-center'>
            <div className='flex items-start gap-3'>
                <img src={address} alt="" className='w-14 bg-amber-100 rounded-full p-2' />
                <div className='text-left'>
                    <h1 className='text-2xl font-semibold text-amber-100'>Address</h1>
                    <p className='text-amber-100'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex items-start gap-3'>
                <img src={phone} alt="" className='w-14 bg-amber-100 rounded-full p-2' />
                <div className='text-left'>
                    <h1 className='text-2xl font-semibold text-amber-100'>Lets Talk</h1>
                    <p className='text-amber-100'>+8801632387861</p>
                </div>
            </div>
            <div className='flex items-start gap-3'>
                <img src={mail} alt="" className='w-14 bg-amber-100 rounded-full p-2' />
                <div className='text-left'>
                    <h1 className='text-2xl font-semibold text-amber-100'>Send Mail</h1>
                    <p className='text-amber-100'>meem.noosrat@gmail.com</p>
                    <p className='text-amber-100'>noosratmeem@gmail.com</p>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;