import React from "react";

import {
  Img,
  Text,
  Button,
  PagerIndicator,
  List,
  RatingBar,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepageVOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[17px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[87%]">
              <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[7%]">
                <Img
                  src="images/img_volume.svg"
                  className="h-[24px] w-[35%]"
                  alt="volume"
                />
                <Text
                  className="font-bold text-gray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Elliye{" "}
                </Text>
              </div>
              <ul className="flex sm:flex-col flex-row gap-[80px] sm:hidden items-start justify-start md:ml-[0] ml-[392px] self-stretch md:w-[100%] w-[auto] common-row-list">
                <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="common-pointer cursor-pointer font-medium text-[18px] text-gray_800 text-left"
                    onClick={() => navigate("/categorieswithsidebar")}
                  >
                    Categories
                  </a>
                </li>
                <li className="mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    New Arrival
                  </a>
                </li>
                <li className="mt-[1px] mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    Collections
                  </a>
                </li>
              </ul>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[259px] md:w-[100%] w-[16%]">
                <Img
                  src="images/img_car.svg"
                  className="h-[24px] self-stretch w-[80px]"
                  alt="car"
                />
                <Button
                  className="common-pointer cursor-pointer font-bold h-[60px] leading-[normal] text-[18px] text-center text-white_A700 w-[107px]"
                  onClick={() => navigate("/homepagevtwo")}
                  size="2xl"
                  variant="FillGray800"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-gray_50 h-[700px] pl-[144px] md:px-[20px] relative w-[100%]">
            <div className="absolute h-[700px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[93%]">
              <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[69%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                    <Img
                      src="images/img_placeholder.png"
                      className="sm:flex-1 h-[364px] md:h-[auto] object-cover sm:w-[100%] w-[32%]"
                      alt="placeholder"
                    />
                    <Img
                      src="images/img_placeholder_364X837.png"
                      className="sm:flex-1 h-[364px] md:h-[auto] object-cover sm:w-[100%] w-[69%]"
                      alt="placeholder One"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 h-[336px] items-end justify-end p-[36px] sm:px-[20px] md:w-[100%] w-[32%]"
                      style={{
                        backgroundImage: "url('images/img_group2278.png')",
                      }}
                    >
                      <PagerIndicator
                        className="flex gap-[8px] h-[12px] items-start justify-start mr-[31px] mt-[252px] self-stretch w-[112px]"
                        count={6}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-gray_800 w-[12px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700 w-[12px]"
                        selectedWrapperCss="inline-block"
                        unselectedWrapperCss="inline-block"
                      />
                    </div>
                    <Img
                      src="images/img_placeholder_336X384.png"
                      className="md:flex-1 h-[336px] sm:h-[auto] object-cover md:w-[100%] w-[32%]"
                      alt="placeholder Two"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[336px] md:h-[48px] pt-[144px] px-[144px] sm:px-[20px] md:px-[40px] relative md:w-[100%] w-[38%]"
                      style={{
                        backgroundImage: "url('images/img_group2279.png')",
                      }}
                    >
                      <Img
                        src="images/img_button.svg"
                        className="absolute bottom-[0] h-[48px] inset-x-[0] mx-[auto] w-[36%]"
                        alt="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[32%]">
                <Text
                  className="font-playfairdisplay not-italic text-gray_800 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Summer Sale
                </Text>
                <Text
                  className="font-poppins mt-[21px] text-gray_800 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  50% Off
                </Text>
                <Text
                  className="font-normal font-poppins leading-[32.00px] mt-[50px] not-italic text-gray_800 text-left sm:w-[100%] w-[93%]"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </Text>
                <Button
                  className="cursor-pointer flex h-[60px] items-center justify-center mt-[56px] pr-[24px] w-[245px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[10px] mr-[33px] my-[6px]"
                      alt="arrow_right"
                    />
                  }
                  size="md"
                  variant="FillGray800"
                >
                  <div className="font-medium font-poppins leading-[normal] md:text-[22px] sm:pr-[20px] sm:text-[20px] text-[24px] text-left text-white_A700">
                    Shop Now
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start max-w-[1633px] mt-[100px] mx-[auto] pt-[11px] md:px-[20px] w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Categories
              </Text>
              <div className="flex items-center justify-start mt-[5px] w-[auto]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
              <div className="bg-gray_50 flex md:flex-1 items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[16%]">
                <div className="flex flex-col gap-[26px] items-center justify-start md:w-[100%] w-[47%]">
                  <Img
                    src="images/img_vector.svg"
                    className="h-[68px] w-[68px]"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    Jacket
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex md:flex-1 items-center justify-end p-[50px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[16%]">
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[3px] md:w-[100%] w-[46%]">
                  <Img
                    src="images/img_file.svg"
                    className="h-[60px] w-[100%]"
                    alt="file"
                  />
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    Shirt
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex md:flex-1 items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[16%]">
                <div className="flex flex-col gap-[26px] items-center justify-start md:w-[100%] w-[36%]">
                  <Img
                    src="images/img_vector_68X43.svg"
                    className="h-[68px] w-[85%]"
                    alt="Vector One"
                  />
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    Pants
                  </Text>
                </div>
              </div>
              <div className="bg-gray_800 flex md:flex-1 items-center justify-end p-[50px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[16%]">
                <div className="flex flex-col gap-[36px] items-center justify-start mt-[9px] md:w-[100%] w-[47%]">
                  <Img
                    src="images/img_cut.svg"
                    className="h-[48px] w-[100%]"
                    alt="cut"
                  />
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Shoes
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex md:flex-1 items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[16%]">
                <div className="flex flex-col gap-[26px] items-center justify-start md:w-[100%] w-[35%]">
                  <Img
                    src="images/img_vector_68X48.svg"
                    className="h-[68px] w-[96%]"
                    alt="Vector Two"
                  />
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    Dress
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex md:flex-1 items-center justify-end p-[50px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[16%]">
                <div className="flex flex-col gap-[32px] items-center justify-start mt-[5px] md:w-[100%] w-[68%]">
                  <Img
                    src="images/img_globe.svg"
                    className="h-[56px] w-[70%]"
                    alt="globe"
                  />
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    Accesories
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start max-w-[1632px] mt-[100px] mx-[auto] pt-[7px] md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[42px] items-center justify-start w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-bold text-gray_800 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  New Arrivals
                </Text>
                <div className="flex items-center justify-start w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    variant="body1"
                  >
                    View all
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
                <div className="bg-gray_50 flex flex-1 md:flex-col flex-row gap-[48px] h-[688px] md:h-[auto] items-center justify-center max-w-[800px] p-[32px] sm:px-[20px] w-[100%]">
                  <Img
                    src="images/img_placeholder_631X384.png"
                    className="md:flex-1 h-[631px] sm:h-[auto] object-cover md:w-[100%] w-[384px]"
                    alt="placeholder Three"
                  />
                  <div className="flex flex-col gap-[24px] items-center justify-start self-stretch w-[auto]">
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Purple Warm Jacket
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold h-[60px] leading-[normal] text-[18px] text-center text-white_A700 w-[200px]"
                      size="2xl"
                      variant="FillGray800"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[50%]">
                  <div className="md:gap-[20px] gap-[32px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-gray_50 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_177X177.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Four"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-gray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Blue Grey Warm Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_500 text-left w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_50 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_1.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Five"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-gray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Denim Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_500 text-left w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_50 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_2.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Six"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-gray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Black Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_500 text-left w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_50 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_3.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Seven"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-gray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Green Polar Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_500 text-left w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1632px] mt-[100px] mx-[auto] pt-[8px] md:px-[20px] w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Featured
              </Text>
              <div className="flex items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[41px] w-[100%]">
              <div className="border-[2px] border-gray_800 border-solid flex sm:flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                <Img
                  src="images/img_placeholder_250X250.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Eight"
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
                <Button
                  className="cursor-pointer font-bold h-[60px] leading-[normal] text-[18px] text-center text-white_A700 w-[200px]"
                  size="2xl"
                  variant="FillGray800"
                >
                  Add to Cart
                </Button>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                <Img
                  src="images/img_placeholder_4.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Nine"
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
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_placeholder_5.png"
                    className="h-[250px] md:h-[auto] object-cover w-[250px]"
                    alt="placeholder Ten"
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
                    src="images/img_placeholder_6.png"
                    className="h-[250px] md:h-[auto] object-cover w-[250px]"
                    alt="placeholder Eleven"
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
            <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[32px] w-[100%]">
              <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_3.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="stylishblacks"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Black Highheels
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_631X384.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="casualfabrics"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Casual Grey Shoes
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_shoesisolated.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="shoesisolated"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Brown Shoes
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_businessshirt.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="businessshirt"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Business Shirt
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_warmpantspxl7.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="warmpantsPXLSeven"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Grey Warm Pants
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_sportj9bzxuy.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="sportJ9BZXUY"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Green Sport Jacket
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_travel8v7cnke.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="travel8V7CNKE"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Purple Warm Jacket
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_1.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="womensdenimsk"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Woman Denim Skirt
                  </Text>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[1338px] h-[544px] md:h-[906px] mt-[74px] md:px-[20px] relative w-[100%]">
            <div className="absolute bg-gray_800 flex inset-x-[0] items-start justify-start mx-[auto] p-[52px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
              <div className="flex items-center justify-start mb-[284px] md:ml-[0] ml-[91px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Summer Collections
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[0] sm:h-[1264px] h-[400px] md:h-[832px] inset-x-[0] mx-[auto] md:w-[100%] w-[87%]">
              <List
                className="absolute sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-center m-[auto] w-[99%]"
                orientation="horizontal"
              >
                <div className="bg-bluegray_100 flex items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[400px] items-start justify-center p-[59px] sm:px-[20px] md:px-[40px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group2280.png')",
                    }}
                  >
                    <Text
                      className="font-normal my-[87px] not-italic text-gray_800 text-left"
                      as="h5"
                      variant="h5"
                    ></Text>
                  </div>
                </div>
                <div className="bg-bluegray_100 flex items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[400px] items-start justify-center p-[53px] sm:px-[20px] md:px-[40px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group2278.png')",
                    }}
                  >
                    <Text
                      className="font-normal my-[93px] not-italic text-left text-white_A700"
                      as="h5"
                      variant="h5"
                    ></Text>
                  </div>
                </div>
                <div className="bg-bluegray_100 flex items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[400px] items-start justify-center p-[52px] sm:px-[20px] md:px-[40px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_placeholder.png')",
                    }}
                  >
                    <Text
                      className="font-normal my-[94px] not-italic text-left text-white_A700"
                      as="h5"
                      variant="h5"
                    ></Text>
                  </div>
                </div>
              </List>
              <Button
                className="absolute flex h-[60px] inset-y-[0] items-center justify-center my-[auto] right-[0] w-[60px]"
                size="mdIcn"
                variant="icbFillWhiteA700"
              >
                <Img src="images/img_menu.svg" className="" alt="menu" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start max-w-[1632px] mt-[100px] mx-[auto] pt-[11px] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular This Week
              </Text>
              <div className="flex sm:flex-1 items-center justify-start sm:mt-[0] mt-[5px] sm:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_175X225.png"
                  className="sm:flex-1 h-[175px] md:h-[auto] object-cover sm:w-[100%] w-[48%]"
                  alt="placeholder Twelve"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Checkered Jacket
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_7.png"
                  className="md:flex-1 h-[175px] sm:h-[auto] object-cover md:w-[100%] w-[48%]"
                  alt="placeholder Thirteen"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Elegant Jacket
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_8.png"
                  className="sm:flex-1 h-[175px] md:h-[auto] object-cover sm:w-[100%] w-[48%]"
                  alt="placeholder Fourteen"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Blue Woman Denim
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_9.png"
                  className="sm:flex-1 h-[175px] md:h-[auto] object-cover sm:w-[100%] w-[48%]"
                  alt="placeholder Fifteen"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Orange Jeans
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_10.png"
                  className="md:flex-1 h-[175px] sm:h-[auto] object-cover md:w-[100%] w-[48%]"
                  alt="placeholder Sixteen"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Blue Jeans
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_11.png"
                  className="sm:flex-1 h-[175px] md:h-[auto] object-cover sm:w-[100%] w-[48%]"
                  alt="placeholder Seventeen"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Gray Watch
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_12.png"
                  className="sm:flex-1 h-[175px] md:h-[auto] object-cover sm:w-[100%] w-[48%]"
                  alt="placeholder Eighteen"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Black Sport Jacket
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_13.png"
                  className="md:flex-1 h-[175px] sm:h-[auto] object-cover md:w-[100%] w-[48%]"
                  alt="placeholder Nineteen"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Wristwatch
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_14.png"
                  className="sm:flex-1 h-[175px] md:h-[auto] object-cover sm:w-[100%] w-[48%]"
                  alt="placeholder Twenty"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Classic Watch
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] justify-start mt-[113px] w-[100%]">
            <Text
              className="font-bold md:ml-[0] ml-[144px] text-gray_800 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Why Choose Us
            </Text>
            <div className="bg-gray_50 flex items-center justify-start px-[144px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] sm:w-[100%] w-[384px]">
                  <div className="border-[2px] border-gray_500 border-solid h-[120px] md:h-[65px] p-[27px] sm:px-[20px] relative rounded-[50%] w-[120px]">
                    <Img
                      src="images/img_music.svg"
                      className="absolute h-[65px] inset-[0] justify-center m-[auto] w-[65px]"
                      alt="music"
                    />
                  </div>
                  <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Free Delivery
                    </Text>
                    <Text
                      className="font-normal not-italic text-center text-gray_500"
                      variant="body1"
                    >
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[75%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] w-[100%]">
                    <div className="border-[2px] border-gray_500 border-solid h-[120px] md:h-[64px] p-[28px] sm:px-[20px] relative rounded-[50%] w-[120px]">
                      <Img
                        src="images/img_computer.svg"
                        className="absolute h-[64px] inset-[0] justify-center m-[auto] w-[64px]"
                        alt="computer"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Payment Method
                      </Text>
                      <Text
                        className="font-normal not-italic text-center text-gray_500"
                        variant="body1"
                      >
                        <>
                          This free shipping
                          <br />
                          only for selected region
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] w-[100%]">
                    <div className="border-[2px] border-gray_500 border-solid h-[120px] md:h-[64px] p-[27px] sm:px-[20px] relative rounded-[50%] w-[120px]">
                      <Img
                        src="images/img_clock.svg"
                        className="absolute h-[64px] inset-[0] justify-center m-[auto] w-[64px]"
                        alt="clock"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Warranty
                      </Text>
                      <Text
                        className="font-normal not-italic text-center text-gray_500"
                        variant="body1"
                      >
                        <>
                          This free shipping
                          <br />
                          only for selected region
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] w-[100%]">
                    <div className="border-[2px] border-gray_500 border-solid h-[120px] md:h-[65px] p-[27px] sm:px-[20px] relative rounded-[50%] w-[120px]">
                      <Img
                        src="images/img_music_65X65.svg"
                        className="absolute h-[65px] inset-[0] justify-center m-[auto] w-[65px]"
                        alt="music One"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Customer Support{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-center text-gray_500"
                        variant="body1"
                      >
                        <>
                          This free shipping
                          <br />
                          only for selected region
                        </>
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Img
            src="images/img_brand.svg"
            className="h-[68px] mt-[100px] w-[51%]"
            alt="brand"
          />
          <footer className="bg-gray_800 flex items-center justify-center mt-[100px] md:px-[20px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[85px] items-center justify-center mb-[32px] ml-[144px] mr-[236px] mt-[64px] w-[81%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[28%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-bold text-left text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      Join our Newsletter
                    </Text>
                  </li>
                  <li className="mt-[31px] w-[auto]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                      href="javascript:"
                    >
                      <>
                        Drop your email below to get update about us, <br />
                        lastest news, tips, and more!
                      </>
                    </a>
                  </li>
                  <li className="mt-[35px] sm:w-[100%] sm:mx-[0] w-[91%]">
                    <Input
                      wrapClassName="cursor-pointer flex"
                      className="font-normal leading-[normal] not-italic p-[0] placeholder:text-gray_500_87 text-[18px] text-gray_500_87 text-left tracking-[0.36px] w-[100%]"
                      type="email"
                      name="input"
                      placeholder="Enter your email"
                      suffix={
                        <Img
                          src="images/img_menu.svg"
                          className="mt-[14px] mb-[15px] ml-[35px] mr-[16px]"
                          alt="menu"
                        />
                      }
                      size="sm"
                      variant="FillWhiteA700"
                    ></Input>
                  </li>
                </ul>
                <div className="flex flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[131px] self-stretch w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Product Links
                  </Text>
                  <ul className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700"
                        variant="body1"
                      >
                        Categories
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        New Arrival
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Features
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Collections
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-[28px] items-start justify-start md:ml-[0] ml-[112px] md:mt-[0] mt-[8px] pb-[4px] md:w-[100%] w-[8%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-[10px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700"
                        variant="body1"
                      >
                        About
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[154px] pb-[4px] w-[10%] md:w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Support
                  </Text>
                  <ul className="flex flex-col gap-[10px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700"
                        variant="body1"
                      >
                        Support Center
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-left text-white_A700"
                        href="javascript:"
                      >
                        Terms of service
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[130px] w-[10%] md:w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Get In Touch
                  </Text>
                  <Img
                    src="images/img_sosmedia.svg"
                    className="h-[24px] self-stretch w-[120px]"
                    alt="sosmedia"
                  />
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[676px] mr-[583px] not-italic text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Copyright © 2021 Elliye. All Right Reseved
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepageVOnePage;
