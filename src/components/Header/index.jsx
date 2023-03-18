import React from "react";

import { Img, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
          <div className="header-row mt-[12px] mb-[9px]">
            <div className="flex flex-row gap-[8px] items-start justify-center">
              <Img
                src="images/img_volume.svg"
                className="h-[24px] w-[35%]"
                alt="volume"
              />
              <Text
                className="font-bold font-poppins text-gray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Elliye{" "}
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="bg-white_A700 border-[2px] border-gray_50 border-solid flex md:flex-1 flex-row sm:hidden items-center justify-between md:ml-[0] ml-[411px] sm:pl-[20px] pl-[32px] md:w-[100%] w-[32%]">
            <Text
              className="font-normal font-poppins not-italic text-gray_500_87 text-left w-[auto]"
              variant="body1"
            >
              Search here
            </Text>
            <div className="bg-gray_800 md:h-[18px] h-[48px] p-[14px] relative w-[48px]">
              <Img
                src="defaultNoData.png"
                className="absolute h-[18px] inset-[0] justify-center m-[auto] w-[18px]"
                alt="search"
              />
            </div>
          </div>
          <Img
            src="images/img_car_1.svg"
            className="h-[24px] sm:hidden md:ml-[0] ml-[304px] w-[5%]"
            alt="car"
          />
          <Button
            className="cursor-pointer font-bold font-poppins sm:hidden leading-[normal] min-w-[107px] md:ml-[0] ml-[32px] text-[14px] text-center text-white_A700 w-[auto]"
            size="lg"
            variant="FillGray800"
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
