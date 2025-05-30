import React, { useRef } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m5jru5a', 'template_i2b1pk3', form.current, {
        publicKey: 'AfRxciNiPZmGBGHGQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <div id='contact' className=' py-5 border-t border-amber-50'>
            
            <h1 className="bg-gradient-to-r from-[#e3e647] via-[#54c4e9] to-[#9ce954] inline-block text-transparent bg-clip-text text-6xl font-bold py-5">Get In Touch</h1>

            <div className='flex flex-col lg:flex-row justify-around items-center mt-5'>
                <div className='text-green-200 text-lg  space-y-3 text-left'>
                    <h1 className='uppercase text-3xl text-lime-300 font-bold'>Contact   Via</h1>
                    <h2 className='flex items-center gap-3'><MdEmail /> meem.noosrat@gmail.com</h2>
                    <h2 className='flex items-center gap-3'><IoLogoWhatsapp /> +8801632387861</h2>
                    <h2 className='flex items-center gap-3'><MdLocalPhone /> +8801643867105</h2>
                </div>
                <div className='card lg:w-1/2'>
                    <form ref={form} onSubmit={sendEmail} className='card-body justify-center'>
                        <input type="text" name="from_name" id="" placeholder="Type here"
                            className="input input-bordered  bg-transparent input-info w-full max-w-xs" />
                        <input type="email" name="from_email" id="" placeholder="Type here"
                            className="input input-bordered bg-transparent input-info w-full max-w-xs" />
                        <textarea name="message" id="" cols="10" rows="5" className="textarea textarea-info bg-transparent w-full" placeholder="Your Message"></textarea>
                        <input type="submit" value="Send Mail" className='btn-grad w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;





