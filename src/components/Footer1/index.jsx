import React from "react";

import { Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-center mb-[32px] mt-[64px] mx-[auto] w-[85%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start pr-[6px] pt-[6px] md:w-[100%] w-[43%]">
              <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] w-[17%]">
                <Img
                  src="images/img_group19.svg"
                  className="h-[24px] w-[35%]"
                  alt="GroupNineteen"
                />
                <Text
                  className="font-bold font-poppins text-left text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Elliye{" "}
                </Text>
              </div>
              <Text
                className="font-normal font-poppins leading-[32.00px] mt-[43px] not-italic text-gray_500 text-left sm:w-[100%] w-[53%]"
                variant="body1"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor .
              </Text>
              <div className="flex flex-col gap-[16px] items-center justify-start mt-[37px] md:w-[100%] w-[61%]">
                <div className="flex flex-row gap-[8px] items-center justify-start pr-[4px] py-[4px] w-[100%]">
                  <Img
                    src="images/img_call.svg"
                    className="h-[24px] w-[24px]"
                    alt="call"
                  />
                  <Text
                    className="font-normal font-poppins not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    +1234567890
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-start justify-start pr-[4px] py-[4px] w-[100%]">
                  <Img
                    src="images/img_mail.svg"
                    className="h-[24px] w-[24px]"
                    alt="mail"
                  />
                  <Text
                    className="font-normal font-poppins mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    elliye@support.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[45px] items-start justify-start pr-[4px] py-[4px] md:w-[100%] w-[17%]">
              <Text
                className="font-bold font-poppins text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Product Links
              </Text>
              <ul className="flex flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-normal font-poppins not-italic text-gray_500 text-left"
                    variant="body1"
                  >
                    Categories
                  </Text>
                </li>
                <li className="mt-[20px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    New Arrival
                  </a>
                </li>
                <li className="mt-[25px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    Features
                  </a>
                </li>
                <li className="mt-[24px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    Collections
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-end pr-[4px] py-[4px] md:w-[100%] w-[17%]">
              <Text
                className="font-bold font-poppins mt-[3px] text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Company
              </Text>
              <ul className="flex flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-normal font-poppins not-italic text-gray_500 text-left"
                    variant="body1"
                  >
                    About
                  </Text>
                </li>
                <li className="mt-[21px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    Blog
                  </a>
                </li>
                <li className="mt-[14px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    Careers
                  </a>
                </li>
                <li className="mt-[18px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    Services
                  </a>
                </li>
                <li className="mt-[21px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mt-[14px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[18px] text-gray_500 text-left"
                    href="javascript:"
                  >
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[4px] md:w-[100%] w-[24%]">
              <Text
                className="font-bold font-poppins text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Join our Newsletter
              </Text>
              <Text
                className="font-normal font-poppins mt-[37px] not-italic text-gray_500 text-left sm:w-[100%] w-[87%]"
                variant="body1"
              >
                Drop your email below to get update, promotions, coupons, and
                more!
              </Text>
              <div className="bg-gray_800 border-[1px] border-solid border-white_A700 flex flex-row items-center justify-between mt-[35px] sm:pl-[20px] pl-[24px] w-[100%]">
                <Text
                  className="font-normal font-poppins not-italic text-bluegray_100_87 text-left tracking-[0.36px] w-[auto]"
                  variant="body1"
                >
                  Enter your email
                </Text>
                <div className="bg-white_A700 md:h-[31px] h-[60px] p-[14px] relative w-[60px]">
                  <Img
                    src="images/img_menu.svg"
                    className="absolute h-[31px] inset-[0] justify-center m-[auto] w-[32px]"
                    alt="menu"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-poppins not-italic text-bluegray_100 text-left w-[auto]"
            variant="body2"
          >
            Copyright © 2021 Elliye. All Right Reseved
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
