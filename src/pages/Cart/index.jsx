import React from "react";

import Header1 from "components/Header1";
import { Text, Line, List, Img, Button } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[35px] items-center justify-start mx-[auto] w-[100%]">
        <Header1 className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[144px] md:px-[20px] md:w-[100%] w-[12%]">
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
              className="font-medium text-gray_800 text-left w-[auto]"
              variant="body1"
            >
              Shopping Cart
            </Text>
          </div>
          <Text
            className="font-bold md:ml-[0] ml-[826px] mt-[52px] text-gray_800 text-left w-[auto]"
            as="h5"
            variant="h5"
          >
            Shopping Cart
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1604px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 md:flex-col flex-row gap-[21px] items-center justify-between md:w-[100%] w-[42%]">
              <div className="flex flex-row gap-[24px] items-center justify-start md:w-[100%] w-[auto]">
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
              <Line className="bg-gray_800 h-[2px] md:mt-[0] my-[27px] w-[59%]" />
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-[56px] items-center justify-center md:ml-[0] ml-[57px] md:w-[100%] w-[40%]">
              <div className="flex flex-row gap-[24px] items-center justify-start md:w-[100%] w-[31%]">
                <Text
                  className="border-[2px] border-bluegray_100 border-solid flex font-medium h-[56px] items-center justify-center sm:px-[20px] rounded-[50%] text-bluegray_100 text-center w-[56px]"
                  as="h6"
                  variant="h6"
                >
                  2
                </Text>
                <Text
                  className="font-medium text-bluegray_100 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Checkout
                </Text>
              </div>
              <Line className="bg-bluegray_100 h-[2px] md:mt-[0] my-[27px] w-[61%]" />
            </div>
            <div className="flex md:flex-1 flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[14%]">
              <Text
                className="border-[2px] border-bluegray_100 border-solid flex font-medium h-[56px] items-center justify-center rounded-[50%] text-bluegray_100 text-center w-[56px]"
                as="h6"
                variant="h6"
              >
                3
              </Text>
              <Text
                className="font-medium text-bluegray_100 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-[40px] gap-[80px] items-end justify-start max-w-[1632px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[31px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[32px] items-start justify-start pt-[4px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[80%]">
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Product
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[590px] md:mt-[0] mt-[5px] text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Quantity
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[231px] md:mt-[0] mt-[3px] text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[232px] md:mt-[0] mt-[4px] text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Total
                    </Text>
                  </div>
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                </div>
                <List
                  className="flex-col gap-[31px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[32px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                      <div className="border-[1px] border-bluegray_100 border-solid md:h-[180px] h-[200px] p-[24px] sm:px-[20px] relative w-[200px]">
                        <Img
                          src="images/img_placeholder_2.png"
                          className="absolute h-[180px] inset-[0] justify-center m-[auto] object-cover w-[180px]"
                          alt="placeholder"
                        />
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[66px] text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gray T-shirt
                      </Text>
                      <div className="h-[48px] md:ml-[0] ml-[250px] relative md:w-[100%] w-[11%]">
                        <Button
                          className="absolute flex h-[48px] inset-y-[0] items-center justify-center my-[auto] right-[0] w-[48px]"
                          size="lgIcn"
                          variant="icbFillGray800"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="h-[16px]"
                            alt="grid"
                          />
                        </Button>
                        <div className="bg-gray_50 flex h-[100%] md:h-[auto] items-center justify-center my-[auto] p-[16px] w-[48px]">
                          <div className="bg-gray_500 h-[2px] w-[57%]"></div>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-medium h-[100%] inset-[0] leading-[normal] m-[auto] text-[18px] text-center text-gray_800 w-[171px]"
                          size="lg"
                          variant="OutlineBluegray100"
                        >
                          1
                        </Button>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[139px] text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[186px] text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="h-[33px] md:ml-[0] ml-[257px] w-[33px]"
                        alt="close"
                      />
                    </div>
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[32px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                      <div className="border-[1px] border-bluegray_100 border-solid md:h-[180px] h-[200px] p-[24px] sm:px-[20px] relative w-[200px]">
                        <Img
                          src="images/img_warmpantspxl7.png"
                          className="absolute h-[180px] inset-[0] justify-center m-[auto] object-cover w-[180px]"
                          alt="placeholder One"
                        />
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[66px] text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Red Flannel
                      </Text>
                      <div className="h-[48px] md:ml-[0] ml-[255px] relative md:w-[100%] w-[11%]">
                        <Button
                          className="absolute flex h-[48px] inset-y-[0] items-center justify-center my-[auto] right-[0] w-[48px]"
                          size="lgIcn"
                          variant="icbFillGray800"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="h-[16px]"
                            alt="grid One"
                          />
                        </Button>
                        <div className="bg-gray_50 flex h-[100%] md:h-[auto] items-center justify-center my-[auto] p-[16px] w-[48px]">
                          <div className="bg-gray_500 h-[2px] w-[57%]"></div>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-medium h-[100%] inset-[0] leading-[normal] m-[auto] text-[18px] text-center text-gray_800 w-[171px]"
                          size="lg"
                          variant="OutlineBluegray100"
                        >
                          1
                        </Button>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[139px] text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[186px] text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="h-[33px] md:ml-[0] ml-[257px] w-[33px]"
                        alt="close One"
                      />
                    </div>
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  </div>
                </List>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between pb-[8px] w-[100%]">
                <div className="border-[1px] border-bluegray_100 border-solid flex md:flex-1 flex-row items-center justify-between pl-[16px] md:w-[100%] w-[29%]">
                  <Text
                    className="font-normal not-italic text-gray_500_87 text-left tracking-[0.36px] w-[auto]"
                    variant="body1"
                  >
                    Enter coupon code
                  </Text>
                  <Button
                    className="cursor-pointer font-normal h-[60px] leading-[normal] min-w-[137px] not-italic text-[18px] text-center text-white_A700 w-[auto]"
                    size="3xl"
                    variant="FillGray800"
                  >
                    Apply Code
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col gap-[29px] items-end justify-start md:mt-[0] mt-[4px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-bold text-gray_800 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $202.00
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[32px] items-center justify-end ml-[auto] md:w-[100%] w-[26%]">
              <Button
                className="cursor-pointer font-medium h-[48px] leading-[normal] min-w-[207px] text-[18px] text-center text-gray_800 w-[auto]"
                size="sm"
                variant="OutlineGray800"
              >
                Continue Shopping
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium h-[48px] leading-[normal] text-[18px] text-center text-white_A700 w-[171px]"
                onClick={() => navigate("/checkout")}
                size="lg"
                variant="FillGray800"
              >
                Checkout
              </Button>
            </div>
          </div>
          <Footer className="bg-gray_800 flex items-center justify-center mt-[100px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
