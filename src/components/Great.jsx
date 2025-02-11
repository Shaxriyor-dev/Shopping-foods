// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Mobil from "../assets/Mobile.png";
import { HiArrowSmallRight } from "react-icons/hi2";


function Great() {
  return (
    <>
      <div className="h-[225px] w-[100%] bg-linear-to-t from-sky-500 to-indigo-500 flex items-center justify-center">
        <div className="flex items-center justify-center gap-[70px]">
          <div>
            <p className="text-[43px] font-[poppins] text-[#fff] font-bold text-center">
              10K+
            </p>
            <p className="text-[18px] text-[#C5BFED] w-[260px] text-center ">
              Satisfied Costumers All Great Over The World{" "}
            </p>
          </div>
          <div className="h-[130px] w-[1px] bg-[#C5C5C5]"></div>
          <div>
            <p className="text-[43px] font-[poppins] text-[#fff] font-bold text-center">
              4M
            </p>
            <p className="text-[18px] text-[#C5BFED] w-[260px] text-center ">
              Healthy Dishes Sold Including Milk Shakes Smooth{" "}
            </p>
          </div>
          <div className="h-[130px] w-[1px] bg-[#C5C5C5]"></div>
          <div>
            <p className="text-[43px] font-[poppins] text-[#fff] font-bold text-center">
              99.99%
            </p>
            <p className="text-[18px] text-[#C5BFED] w-[260px] text-center ">
              Reliable Customer Support We Provide Great Experiences
            </p>
          </div>
        </div>
      </div>
      <section className="h-[100vh] flex justify-center items-center ">
        <div className="flex gap-[10rem] items-center justify-center ">
          <div>
            <a href="/">
              <img src={Mobil} alt="" />
            </a>
          </div>
          <div>
            <p className="text-[52px] font-[poppins] font-extrabold w-[519px]">
              Premium <span className="text-[#6C5FBC]">Quality</span> For Your
              Health
            </p>
            <p className="text-[20px] text-[#676767] w-[547px] m-3.5">
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </p>
            <p className="text-[20px] text-[#676767] w-[547px] m-3.5 my-[40px]">
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </p>
            <div className="pt-7">
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <Button  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.ubercab.eats&hl=en", "_blank")} sx={{height : '63px' , width : '186px' , background : '#6C5FBC' , borderRadius : '15px' , display : 'flex' , alignItems : 'center' , gap :'10px'}} variant="contained" size="large">
                      Download <HiArrowSmallRight className="text-[23px]" />
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Great;
