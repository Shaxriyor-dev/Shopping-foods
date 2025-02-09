import React from 'react'
import kop from "../assets/kop.png";

function Email() {
  return (
    <div className='h-[470px] flex justify-center items-center'>
         <div className='h-[280px] w-[165vh] bg-linear-to-t from-sky-500 to-indigo-500 rounded-[30px] flex items-center justify-between p-[70px]'>
              <div>
                 <p className='text-[70px] text-[#F9F9F9] font-black font-[poppins]'>GET 50%</p>
                 <div className='w-[440px] h-[68px] bg-[#F9F9F9] rounded-[15px]'>
                      <input className='h-[68px] w-[300px] outline-none text-[17px] p-[20px]' type="text" placeholder=' Enter Your Email Address' />
                      <button className='h-[53px] w-[133px] bg-[#6C5FBC] text-[#fff] text-[18px] rounded-[12px]'>Subscribe</button>
                 </div>
              </div>
              <div className='flex justify-end item-center '>
                 <img className='h-[240px]' src={kop} alt="" />
              </div>
         </div>
    </div>
  )
}

export default Email