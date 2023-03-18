import React from "react";

import Header1 from "components/Header1";
import { Text, Line, Input, SelectBox, Img, Button } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[35px] items-center justify-start w-[100%]">
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
            <Text
              className="font-bold md:ml-[0] ml-[870px] mt-[49px] text-gray_800 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Checkout
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1604px] mt-[109px] mx-[auto] md:px-[20px] w-[100%]">
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
              <Line className="bg-bluegray_100 h-[2px] md:ml-[0] ml-[56px] md:mt-[0] my-[27px] w-[24%]" />
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
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1632px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-1 items-center justify-end pt-[6px] md:w-[100%] w-[41%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Buyer Info
                    </Text>
                  </div>
                  <Line className="bg-bluegray_100 h-[1px] mt-[32px] w-[100%]" />
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[35px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Full Name
                    </Text>
                    <Input
                      wrapClassName="flex h-[60px] w-[100%]"
                      className="p-[0] w-[100%]"
                      name="form"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[36px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Address
                    </Text>
                    <Input
                      wrapClassName="flex h-[60px] w-[100%]"
                      className="p-[0] w-[100%]"
                      name="form One"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[36px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Contact
                    </Text>
                    <Input
                      wrapClassName="flex h-[60px] w-[100%]"
                      className="p-[0] w-[100%]"
                      name="form Two"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start mt-[38px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      City
                    </Text>
                    <Input
                      wrapClassName="flex h-[60px] w-[100%]"
                      className="p-[0] w-[100%]"
                      name="form Three"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[36px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[59%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        State
                      </Text>
                      <SelectBox
                        className="font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left w-[100%]"
                        placeholderClassName="text-gray_500"
                        name="form Four"
                        placeholder="Select State"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_500.svg"
                            className="h-[24px] mr-[32px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                        size="md"
                        variant="OutlineBluegray100"
                      ></SelectBox>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[38%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        Zip Code
                      </Text>
                      <Input
                        wrapClassName="flex h-[60px] w-[100%]"
                        className="p-[0] w-[100%]"
                        name="form Five"
                        placeholder=""
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-end pt-[6px] md:w-[100%] w-[50%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Payment Method
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[31px] w-[100%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[245px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_computer.svg"
                          className="mt-[32px] mb-[31px] ml-[35px] mr-[16px]"
                          alt="computer"
                        />
                      }
                      size="5xl"
                      variant="OutlineBluegray100"
                    >
                      <div className="font-normal leading-[normal] not-italic text-[18px] text-gray_800 text-left">
                        Credit Card
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[245px] w-[auto]"
                      leftIcon={
                        <div className="h-[40px] mt-[32px] mb-[31px] ml-[33px] mr-[16px] w-[40px] bg-gray_800 p-[3px] flex justify-center items-center">
                          <Img
                            src="images/img_ticket.svg"
                            className=""
                            alt="ticket"
                          />
                        </div>
                      }
                      size="5xl"
                      variant="OutlineBluegray100_1"
                    >
                      <div className="font-normal leading-[normal] not-italic text-[18px] text-left text-white_A700">
                        Bank Transfer
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[245px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_reply.svg"
                          className="mt-[32px] mb-[31px] ml-[35px] mr-[16px]"
                          alt="reply"
                        />
                      }
                      size="5xl"
                      variant="OutlineBluegray100"
                    >
                      <div className="font-normal leading-[normal] not-italic text-[18px] text-gray_800 text-left">
                        Paypal
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[36px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Name on Card
                    </Text>
                    <Input
                      wrapClassName="flex h-[60px] w-[100%]"
                      className="p-[0] w-[100%]"
                      name="form Six"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[36px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[66%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Input
                        wrapClassName="flex h-[60px] w-[100%]"
                        className="p-[0] w-[100%]"
                        name="form Seven"
                        placeholder=""
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[31%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        CVV
                      </Text>
                      <Input
                        wrapClassName="flex h-[60px] w-[100%]"
                        className="p-[0] w-[100%]"
                        name="RectangleTwentyFive"
                        placeholder=""
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[36px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        Month
                      </Text>
                      <SelectBox
                        className="font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left w-[100%]"
                        placeholderClassName="text-gray_500"
                        name="Group2283"
                        placeholder="Select Month"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_500.svg"
                            className="h-[24px] mr-[32px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                        size="md"
                        variant="OutlineBluegray100"
                      ></SelectBox>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        Year
                      </Text>
                      <SelectBox
                        className="font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left w-[100%]"
                        placeholderClassName="text-gray_500"
                        name="Group2284"
                        placeholder="Select Year"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_500.svg"
                            className="h-[24px] mr-[32px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                        size="md"
                        variant="OutlineBluegray100"
                      ></SelectBox>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-[60px] leading-[normal] md:ml-[0] ml-[555px] mt-[75px] text-[18px] text-center text-white_A700 w-[245px]"
                    onClick={() => navigate("/completed")}
                    size="2xl"
                    variant="FillGray800"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
            <Footer1 className="bg-gray_800 flex items-center justify-center mt-[100px] md:px-[20px] w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
