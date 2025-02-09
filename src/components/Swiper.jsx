import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import logos from "../assets/logos.png";
import Path from "../assets/Path.png";

function Swiper() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div>
        <p className="text-[#323142] text-[45px] text-center font-[poppins] font-[600]">
          <span className="text-[#6C5FBC]"> Customer</span>Say{" "}
        </p>
        <div className='flex justify-center gap-20 p-[70px]'>
          <div className="h-[346px] w-[528px] bg-[#fff] rounded-[21px]  shadow-xl">
            <div className="flex  justify-evenly items-center gap-35 p-[30px]">
              <div className="flex items-center gap-5">
                <img className="rounded-[50%]" src={logos} alt="" />
                <div>
                  <p className="text-[21px] text-[#030314]  font-[700]">
                    Alexander R.
                  </p>
                  <p className="text-[17px] text-[#5E5D5D]">01 Year With Us </p>
                </div>
              </div>
              <div>
                <img src={Path} alt="" />
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-[18px] text-[#636363] w-[442px]">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
            </div>
            <div className="p-[35px]">
              <Stack spacing={1}>
                <Rating name="size-large" defaultValue={3} size="large" />
              </Stack>
            </div>
          </div>
          <div className="h-[346px] w-[528px] bg-[#fff] rounded-[21px]  shadow-xl">
            <div className="flex  justify-evenly items-center gap-35 p-[30px]">
              <div className="flex items-center gap-5">
                <img className="rounded-[50%]" src={logos} alt="" />
                <div>
                  <p className="text-[21px] text-[#030314]  font-[700]">
                    Alexander R.
                  </p>
                  <p className="text-[17px] text-[#5E5D5D]">01 Year With Us </p>
                </div>
              </div>
              <div>
                <img src={Path} alt="" />
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-[18px] text-[#636363] w-[442px]">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
            </div>
            <div className="p-[35px]">
              <Stack spacing={1}>
                <Rating name="size-large" defaultValue={4} size="large" />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
