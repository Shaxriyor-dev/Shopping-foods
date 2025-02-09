// import React from "react";
import ops from "../assets/ops.png";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Material from "./Material";

const options = [
  "This month",
  "Vegateabes",
  "Mall",
];

function Control() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div>
        <p className="text-[51px] font-[poppins] font-bold w-[580px] text-[#202020]">
          Control <span className="text-[#6C5FBC]">Purchases</span> Via
          Dashboard
        </p>
        <div className="my-10">
          <div className="h-[89px] w-[346px] bg-[#fff] shadow-xl rounded-[12px] flex items-center justify-evenly gap-3.5 my-6">
            <div>
              <img src={ops} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#323142] font-medium">
                Chicken Hell
              </p>
              <p className="text-[16px] text-[#323142]">On The Way</p>
            </div>
            <p className="text-[14px] text-[#ACADB9]">3:09 PM</p>
          </div>
          <div className="h-[89px] w-[346px] bg-[#fff] shadow-xl rounded-[12px] flex items-center justify-evenly gap-3.5 my-6">
            <div>
              <img src={ops} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#323142] font-medium">
                Chicken Hell
              </p>
              <p className="text-[16px] text-[#323142]">On The Way</p>
            </div>
            <p className="text-[14px] text-[#ACADB9]">3:09 PM</p>
          </div>
          <div className="h-[89px] w-[346px] bg-[#fff] shadow-xl rounded-[12px] flex items-center justify-evenly gap-3.5 my-6">
            <div>
              <img src={ops} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#323142] font-medium">
                Chicken Hell
              </p>
              <p className="text-[16px] text-[#323142]">On The Way</p>
            </div>
            <p className="text-[14px] text-[#ACADB9]">3:09 PM</p>
          </div>
        </div>
      </div>
      <div className="h-[477px] w-[530px] bg-[#fff] rounded-[23px]  p-[40px]  ">
        <div className=" gap-10 flex items-center justify-evenly">
          <p className="text-[28px] text-[#1A202C] font-[poppins] font-bold">Purchases</p>
          <React.Fragment sx={{background : '#6C5FBC'}}>
            <ButtonGroup sx={{width : '168px' , background : '#6C5FBC'}}
              variant="contained"
              ref={anchorRef}
              aria-label="Button group with a nested menu"
            >
              <Button sx={{background : '#6C5FBC'}} onClick={handleClick}>{options[selectedIndex]}</Button>
              <Button  sx={{background : '#6C5FBC'}}
                size="small"
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{ zIndex: 1 }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            disabled={index === 2}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </React.Fragment>
        </div>
        <div className="p-[20px]">
           <Material/>
        </div>
      </div>
    </div>
  );
}

export default Control;
