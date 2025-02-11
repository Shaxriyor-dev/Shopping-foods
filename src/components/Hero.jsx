import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HeroImg from "../assets/Hero.png";
import vector from '../assets/Vector.png';



function Hero() {
  const navigate = useNavigate();
  return (

    <>
        <header className="h-[100vh] flex  items-center justify-center">
          <div className="flex justify-center items-center gap-[60px]">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="w-[80px] h-[2px] bg-[#201F1F33]"></div>
                <p className="text-[#676767] text-[15px] font-[poppins]">
                  OVER 1000 USERS
                </p>
              </div>
              <p className="text-[75px] font-bold w-[600px] font-[poppins] text-[#201F1F]">
                Enjoy Foods All Over The{" "}
                <span className="text-[#5C4EAE]">World</span>
              </p>
              <p className="text-[#676767] text-[18px] w-[500px]">
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus.
              </p>
              <div>
                <Box sx={{ "& button": {}, marginTop: "70px" }}>
                  <div>
                    <Button onClick={() => navigate("/menu")}
                      className="font-[poppins]"
                      sx={{
                        width: "179px",
                        height: "59px",
                        background: "#6C5FBC",
                        borderRadius: "15px",
                      }}
                      variant="contained"
                      size="large"
                    >
                      Get Started
                    </Button>
                    <Button
                      className="font-[poppins]"
                      sx={{
                        width: "110px",
                        height: "59px",
                        marginLeft: "20px",
                        background: "#fff",
                        color: "#6C5FBC",
                        border: "solid 2px #6C5FBC",
                        borderRadius: "15px",
                      }}
                      variant="contained"
                      size="large"
                    >
                      Go Pro
                    </Button>
                  </div>
                </Box>
              </div>
              <div className="flex items-center gap-2.5 my-8">
                <img src={vector} alt="asdfasdf" />
                <p className="text-[25px] font-[500]">Trustpilot</p>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </Stack>
                <p className="text-[18px] text-[#334155]  font-[poppins]">4900+</p>
              </div>
            </div>
            <div>
              <a href="/">
                <img src={HeroImg} alt="hero img" />
              </a>
            </div>
          </div>
        </header>
    </>
  )
}

export default Hero