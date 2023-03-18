import React from "react";

import { Img, Text, Button, Line } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-center w-[100%]">
          <ul className="bg-white_A700 flex flex-row md:hidden items-center justify-end p-[24px] sm:px-[20px] w-[100%] common-row-list">
            <li className="mt-[12px] mb-[9px] sm:w-[100%] sm:my-[10px] w-[6%]">
              <div className="flex flex-row gap-[8px] items-start justify-center">
                <Img
                  src="images/img_volume.svg"
                  className="h-[24px] w-[35%]"
                  alt="volume"
                />
                <a
                  className="cursor-pointer font-bold font-poppins sm:text-[20px] md:text-[22px] text-[24px] text-gray_800 text-left w-[auto]"
                  href="javascript:"
                >
                  Elliye
                </a>
              </div>
            </li>
            <li className="ml-[541px] sm:w-[100%] sm:my-[10px] w-[5%] my-[12px]">
              <Img src="images/img_car_1.svg" className="h-[24px]" alt="car" />
            </li>
            <li className="ml-[32px] mr-[120px] sm:w-[100%] sm:my-[10px]">
              <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] text-[18px] text-center text-white_A700"
                size="sm"
                variant="FillGray800"
              >
                Login
              </Button>
            </li>
          </ul>
          <Line className="bg-gray_50 h-[1px] w-[85%]" />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
