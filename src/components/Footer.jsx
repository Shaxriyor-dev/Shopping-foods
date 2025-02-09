import React from 'react'
import Logo from "../assets/Logo.png";
import Instgram from '../assets/instagram.png';
import ins from '../assets/in.png';
import face from '../assets/face.png';
import twter from '../assets/twter.png';

function Footer() {
  return (
    <div className='h-[345px] bg-[#EAEAEA] flex items-center justify-center'>
          <div>
            <div className='flex items-center gap-[30rem] justify-evenly p-[20px] '>
              <div className='flex gap-[10px]'>
                  <img src={Logo} alt="" />
                  <p className='text-[29px] text-[#6C5FBC] font-bold'>eatly</p>
              </div>
              <div className='flex gap-20'>
              <a className='text-[18px] text-[#999999]' href="#">Blog</a>
              <a className='text-[18px] text-[#999999]' href="#">Pricing</a>
              <a className='text-[18px] text-[#999999]' href="#">About Us</a>
              <a className='text-[18px] text-[#999999]' href="#">Contact</a>
              </div>
              </div>
              <div className='p-14'>
                  <div className='border-1 border-solid text-[#818181]'></div>
              </div>
              <div className='flex items-center justify-evenly gap-[32rem]'>
                  <p className='text-[18px] text-[#999999]'>© 2023 EATLY All Rights Reserved.</p>
                  <div className='flex gap-[60px] items-center'>
                      <a href="https://www.instagram.com">
                         <img src={Instgram} alt="" />
                      </a>
                      <a href="https://www.linkedin.com">
                         <img src={ins} alt="" />
                      </a>
                      <a href="https://www.facebook.com">
                         <img src={face} alt="" />
                      </a>
                      <a href="https://x.com/?lang=en">
                         <img src={twter} alt="" />
                      </a>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer