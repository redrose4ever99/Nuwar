import React from "react";

import Header1 from "components/Header1";
import { Text, Line, Button } from "components";
import Footer1 from "components/Footer1";

const CompletedPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[35px] items-center justify-start mx-[auto] w-[100%]">
        <Header1 className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[144px] md:px-[20px] md:w-[100%] w-[19%]">
            <Text
              className="font-medium text-gray_500 text-left w-[auto]"
              variant="body1"
            >
              Home
            </Text>
            <Text
              className="font-medium text-bluegray_100 text-left w-[auto]"
              variant="body1"
            >
              {">"}
            </Text>
            <Text
              className="font-medium text-gray_500 text-left w-[auto]"
              variant="body1"
            >
              Shopping Cart
            </Text>
            <Text
              className="font-medium text-bluegray_100 text-left w-[auto]"
              variant="body1"
            >
              {">"}
            </Text>
            <Text
              className="font-medium text-gray_800 text-left w-[auto]"
              variant="body1"
            >
              Checkout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1604px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-row gap-[24px] items-center justify-start md:w-[100%] w-[16%]">
              <Text
                className="border-[2px] border-gray_800 border-solid flex font-medium h-[56px] items-center justify-center sm:px-[20px] rounded-[50%] text-center text-gray_800 w-[56px]"
                as="h6"
                variant="h6"
              >
                1
              </Text>
              <Text
                className="font-medium text-gray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Shopping Cart
              </Text>
            </div>
            <Line className="bg-gray_800 h-[2px] md:ml-[0] ml-[21px] md:mt-[0] my-[27px] w-[24%]" />
            <div className="flex md:flex-1 flex-row gap-[24px] items-center justify-center md:ml-[0] ml-[57px] md:w-[100%] w-[13%]">
              <Text
                className="border-[2px] border-gray_800 border-solid flex font-medium h-[56px] items-center justify-center sm:px-[20px] rounded-[50%] text-center text-gray_800 w-[56px]"
                as="h6"
                variant="h6"
              >
                2
              </Text>
              <Text
                className="font-medium text-gray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Checkout
              </Text>
            </div>
            <Line className="bg-gray_800 h-[2px] md:ml-[0] ml-[56px] md:mt-[0] my-[27px] w-[24%]" />
            <div className="flex md:flex-1 flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[14%]">
              <Text
                className="border-[2px] border-gray_800 border-solid flex font-medium h-[56px] items-center justify-center rounded-[50%] text-center text-gray_800 w-[56px]"
                as="h6"
                variant="h6"
              >
                3
              </Text>
              <Text
                className="font-medium text-gray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[614px] mt-[222px] md:px-[20px] md:w-[100%] w-[37%]">
            <Text
              className="text-gray_800 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Checkout Complete!
            </Text>
            <Text
              className="font-normal leading-[32.00px] mt-[16px] not-italic text-center text-gray_800 sm:w-[100%] w-[98%]"
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Button
              className="cursor-pointer font-medium h-[60px] leading-[normal] mt-[64px] text-[18px] text-center text-white_A700 w-[245px]"
              size="2xl"
              variant="FillGray800"
            >
              Go Shopping Again
            </Button>
          </div>
          <Footer1 className="bg-gray_800 flex items-center justify-center mt-[200px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CompletedPage;
