import React from "react";

import Header from "components/Header";
import { Img, Text, Line, Button, List } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[32px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start max-w-[1632px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[50%]">
              <Img
                src="images/img_shoesisolated.png"
                className="h-[523px] md:h-[auto] object-cover w-[100%]"
                alt="placeholder"
              />
              <div className="flex sm:flex-col flex-row gap-[32px] items-center justify-center md:w-[100%] w-[61%]">
                <Img
                  src="images/img_placeholder_245X245.png"
                  className="h-[137px] md:h-[auto] object-cover sm:w-[100%] w-[29%]"
                  alt="placeholder One"
                />
                <Img
                  src="images/img_placeholder_15.png"
                  className="h-[137px] md:h-[auto] object-cover sm:w-[100%] w-[29%]"
                  alt="placeholder Two"
                />
                <Img
                  src="images/img_placeholder_5.png"
                  className="h-[137px] md:h-[auto] object-cover sm:w-[100%] w-[29%]"
                  alt="placeholder Three"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[56px] items-start justify-start md:w-[100%] w-[50%]">
              <div className="flex flex-col gap-[32px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    Featured
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
                    Purple Warm Jacket
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_800 text-left"
                    as="h4"
                    variant="h4"
                  >
                    <>
                      Purple Warm <br />
                      Zip Jacket
                    </>
                  </Text>
                  <Text
                    className="font-normal mt-[41px] not-italic text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $299
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] mt-[40px] w-[100%]" />
                  <Text
                    className="font-normal leading-[32.00px] mt-[31px] not-italic text-gray_500 text-left w-[100%]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[24px] items-center justify-start md:w-[100%] w-[35%]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  Quantity
                </Text>
                <div className="h-[48px] relative w-[63%]">
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
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center pr-[16px] w-[245px]"
                onClick={() => navigate("/cart")}
                rightIcon={
                  <Img
                    src="images/img_cart.svg"
                    className="ml-[16px] mr-[35px] my-[16px]"
                    alt="cart"
                  />
                }
                size="4xl"
                variant="FillGray800"
              >
                <div className="font-bold leading-[normal] text-[18px] text-left text-white_A700">
                  Add to Cart
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start max-w-[1632px] mt-[183px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between py-[3px] w-[100%]">
              <div className="flex sm:flex-1 flex-row gap-[32px] items-center justify-between sm:mt-[0] mt-[4px] sm:w-[100%] w-[25%]">
                <Text
                  className="font-bold text-gray_800 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Similiar Product
                </Text>
                <Text
                  className="font-medium text-gray_500 text-left w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
              <Img
                src="images/img_button_bluegray_100.svg"
                className="h-[48px] w-[auto]"
                alt="button"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_placeholder_1.png"
                    className="h-[250px] md:h-[auto] object-cover w-[250px]"
                    alt="placeholder Four"
                  />
                  <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Black Briefcase
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_placeholder_16.png"
                    className="h-[250px] md:h-[auto] object-cover w-[250px]"
                    alt="placeholder Five"
                  />
                  <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Pink Shirt
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      $299
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_travel8v7cnke.png"
                    className="h-[250px] md:h-[auto] object-cover w-[250px]"
                    alt="placeholder Six"
                  />
                  <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Gray T-shirt
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_placeholder_2.png"
                    className="h-[250px] md:h-[auto] object-cover w-[250px]"
                    alt="placeholder Seven"
                  />
                  <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Red Flannel
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      $299
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Footer className="bg-gray_800 flex items-center justify-center mt-[100px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
