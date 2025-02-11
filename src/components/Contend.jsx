// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import grups from "../assets/grups.png";
import phonee from "../assets/phonee.png";
import Animashion from '..//components/Animashion';

function Contend() {
  return (
    <div>
      <div className="flex justify-center m-3">
      
      </div>
      <div className="h-[100%] my-20 flex items-center justify-between">
        <div className="h-[830px] w-[531px] bg-[#6C5FBC]">
          <div className="flex justify-center p-[30px] ">
            <a href="/">
              <img src={grups} alt="" />
            </a>
          </div>
          <div className="flex justify-end absolute ms-90 my-[50px]">
            <img src={phonee} alt="" />
          </div>
        </div>
        <div className="w-[495px] ">
          <p className="text-[40px] text-[#252525] font-[600]">
            Customer <span className="text-[#6C5FBC]">Support</span>
            <Animashion/>
          </p>
          <div>
            <Box sx={{ width: 443, marginTop: "40px" }}>
              <TextField fullWidth label="Full name" id="fullWidth" />
            </Box>
            <Box sx={{ width: 443, marginTop: "25px" }}>
              <TextField fullWidth label="Enter your email " id="fullWidth" />
            </Box>
            <div className="py-[40px]">
              <textarea
                className=" h-[340px] w-[445px] p-[20px] border border-gray-400 rounded-md resize-none"
                name="Enter"
                id="Enter"
                placeholder="Enter The Problem Or Query "
              ></textarea>
            </div>
            <div>
              <button className="h-[70px] w-[445px] rounded-md bg-[#6C5FBC] text-[20px] text-[#F9F9F9] font-medium font-[poppins]">
                Send now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contend;
