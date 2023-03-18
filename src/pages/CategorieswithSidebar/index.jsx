import React from "react";

import Header from "components/Header";
import { Text, Img, CheckBox, Button, Line, List, RatingBar } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const CategorieswithSidebarPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[36px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[144px] md:px-[20px] md:w-[100%] w-[11%]">
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
              Categories
            </Text>
          </div>
          <Text
            className="font-bold md:ml-[0] ml-[858px] mt-[52px] text-gray_800 text-left w-[auto]"
            as="h5"
            variant="h5"
          >
            Categories
          </Text>
          <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start max-w-[1632px] mt-[75px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[16%]">
              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[32px] items-start justify-start pt-[2px] w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="font-medium mt-[4px] text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Filter by Price
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[68%]">
                    <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                      <CheckBox
                        className="font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left"
                        inputClassName="h-[24px] mr-[5px] w-[24px]"
                        name="AllPrice"
                        id="AllPrice"
                        label="All Price"
                        size="sm"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[87%]">
                        <Button
                          className="flex h-[24px] items-center justify-center w-[24px]"
                          size="smIcn"
                          variant="icbFillGray800"
                        >
                          <Img
                            src="images/img_checkedbox.svg"
                            className=""
                            alt="Checkedbox"
                          />
                        </Button>
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          $100 - $250
                        </Text>
                      </div>
                      <CheckBox
                        className="font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left"
                        inputClassName="h-[24px] mr-[5px] w-[24px]"
                        name="250500"
                        id="250500"
                        label="$250 - $500"
                        size="sm"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left"
                        inputClassName="h-[24px] mr-[5px] w-[24px]"
                        name="7501000"
                        id="7501000"
                        label="$750 - $1.000"
                        size="sm"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left"
                        inputClassName="h-[24px] mr-[5px] w-[24px]"
                        name="10001500"
                        id="10001500"
                        label="$1000 - $1.500"
                        size="sm"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-col gap-[32px] items-center justify-start mt-[31px] w-[100%]">
                <div className="flex flex-col gap-[32px] items-start justify-start pt-[2px] w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="font-medium mt-[4px] text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Filter by Rating
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown One"
                    />
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[79%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                      <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[34%]">
                        <div className="border-[3px] border-bluegray_100 border-solid h-[24px] w-[24px]"></div>
                        <Img
                          src="images/img_star1.svg"
                          className="h-[24px] w-[24px]"
                          alt="StarOne"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[50%]">
                        <div className="border-[3px] border-bluegray_100 border-solid h-[24px] w-[24px]"></div>
                        <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                          <Img
                            src="images/img_star1_24X24.svg"
                            className="h-[24px] w-[24px]"
                            alt="StarOne One"
                          />
                          <Img
                            src="images/img_star2.svg"
                            className="h-[24px] w-[24px]"
                            alt="StarTwo"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[67%]">
                        <div className="border-[3px] border-bluegray_100 border-solid h-[24px] w-[24px]"></div>
                        <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                          <Img
                            src="images/img_star1_1.svg"
                            className="h-[24px] w-[24px]"
                            alt="StarOne Two"
                          />
                          <Img
                            src="images/img_star2_24X24.svg"
                            className="h-[24px] w-[24px]"
                            alt="StarTwo One"
                          />
                          <Img
                            src="images/img_star3.svg"
                            className="h-[24px] w-[24px]"
                            alt="StarThree"
                          />
                        </div>
                      </div>
                      <List
                        className="flex-col gap-[16px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-1 flex-row gap-[16px] items-center justify-start md:w-[100%] w-[84%]">
                          <Button
                            className="flex h-[24px] items-center justify-center w-[24px]"
                            size="smIcn"
                            variant="icbFillGray800"
                          >
                            <Img
                              src="images/img_checkedbox.svg"
                              className=""
                              alt="Checkedbox One"
                            />
                          </Button>
                          <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                            <Img
                              src="images/img_star1_2.svg"
                              className="h-[24px] w-[24px]"
                              alt="StarOne Three"
                            />
                            <Img
                              src="images/img_star2_1.svg"
                              className="h-[24px] w-[24px]"
                              alt="StarTwo Two"
                            />
                            <Img
                              src="images/img_star3_24X24.svg"
                              className="h-[24px] w-[24px]"
                              alt="StarThree One"
                            />
                            <Img
                              src="images/img_star5.svg"
                              className="h-[24px] w-[24px]"
                              alt="StarFive"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[16px] items-center justify-between w-[100%]">
                          <div className="border-[3px] border-bluegray_100 border-solid h-[24px] w-[24px]"></div>
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <RatingBar
                              className=""
                              value={5}
                              starCount={5}
                              activeColor="#fae952"
                              size={24}
                            ></RatingBar>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-row items-end justify-between mt-[33px] w-[100%]">
                <Text
                  className="font-medium mt-[5px] text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  Filter by Brand
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[24px] mb-[2px] w-[24px]"
                  alt="arrowdown Two"
                />
              </div>
              <div className="flex flex-row items-end justify-between mt-[33px] w-[100%]">
                <Text
                  className="font-medium mt-[5px] text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  Filter by Size
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[24px] mb-[2px] w-[24px]"
                  alt="arrowdown Three"
                />
              </div>
            </div>
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[84%]">
              <div
                className="common-pointer md:gap-[20px] gap-[32px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]"
                onClick={() => navigate("/productlist")}
              >
                <div
                  className="common-pointer bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]"
                  onClick={() => navigate("/productlist")}
                >
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_gray_800.svg"
                      className="h-[113px] w-[113px]"
                      alt="Vector"
                    />
                    <div className="flex flex-col gap-[17px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Jacket
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_gray_800_100X110.svg"
                      className="h-[100px] w-[31%]"
                      alt="Vector One"
                    />
                    <div className="flex flex-col gap-[19px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Shirt
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_gray_800_113X72.svg"
                      className="h-[113px] w-[21%]"
                      alt="Vector Two"
                    />
                    <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Pants
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_gray_800_113X93.svg"
                      className="h-[113px] w-[27%]"
                      alt="Vector Three"
                    />
                    <div className="flex flex-col gap-[18px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Skirt
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_gray_800_113X80.svg"
                      className="h-[113px] w-[23%]"
                      alt="Vector Four"
                    />
                    <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dress
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row gap-[16px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_vector_gray_800_113X113.svg"
                      className="h-[113px] w-[113px]"
                      alt="Vector Five"
                    />
                    <div className="flex flex-col gap-[18px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Underwear
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_gray_800_80X113.svg"
                      className="h-[80px] w-[32%]"
                      alt="Vector Six"
                    />
                    <div className="flex flex-col gap-[17px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Shoes
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row gap-[16px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_vector_gray_800_93X113.svg"
                      className="h-[93px] w-[30%]"
                      alt="Vector Seven"
                    />
                    <div className="flex flex-col gap-[18px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Accesories
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_800 flex items-center justify-center mt-[85px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CategorieswithSidebarPage;
