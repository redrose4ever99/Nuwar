import React from "react";

import { Text, Img, Line, List, Button, RatingBar, Input } from "components";
import { useNavigate } from "react-router-dom";

const HomepageVThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-center w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex items-center justify-start p-[30px] sm:px-[20px] w-[100%]">
                <ul className="flex md:flex-col flex-row md:hidden items-end justify-start ml-[114px] w-[88%] common-row-list">
                  <li className="mt-[8px] mb-[5px] sm:w-[100%] sm:my-[10px] w-[34%]">
                    <div className="flex sm:flex-col flex-row gap-[56px] items-start justify-start sm:w-[100%]">
                      <a
                        className="common-pointer cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_800 text-left w-[auto]"
                        onClick={() => navigate("/categorieswithsidebar")}
                      >
                        Categories
                      </a>
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_800 text-left w-[auto]"
                        href="javascript:"
                      >
                        New Arrival
                      </a>
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_800 text-left w-[auto]"
                        href="javascript:"
                      >
                        Features
                      </a>
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_800 text-left w-[auto]"
                        href="javascript:"
                      >
                        Collections
                      </a>
                    </div>
                  </li>
                  <li className="ml-[213px] sm:w-[100%] sm:my-[10px] w-[7%]">
                    <div className="flex flex-row gap-[8px] items-center justify-center">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[24px] w-[35%]"
                        alt="volume"
                      />
                      <a
                        className="cursor-pointer hover:font-bold font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_800 text-left w-[auto]"
                        href="javascript:"
                      >
                        Elliye
                      </a>
                    </div>
                  </li>
                  <li className="ml-[592px] sm:w-[100%] sm:my-[10px] w-[11%] my-[6px]">
                    <Img
                      src="images/img_icon.svg"
                      className="h-[24px] w-[168px]"
                      alt="icon"
                    />
                  </li>
                </ul>
              </div>
              <Line className="bg-gray_50 h-[1px] w-[85%]" />
            </div>
            <div className="bg-white_A700 flex items-start justify-center max-w-[1920px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-center w-[67%]">
                <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-[8px] items-center justify-start mb-[5px] self-stretch w-[auto]">
                    <Img
                      src="images/img_cut_48X48.svg"
                      className="h-[48px] w-[48px]"
                      alt="cut"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Jacket
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-[8px] items-center justify-start mb-[5px] self-stretch w-[auto]">
                    <Img
                      src="images/img_info.svg"
                      className="h-[48px] w-[48px]"
                      alt="info"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Shirt
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-[8px] items-center justify-start mb-[5px] self-stretch w-[auto]">
                    <Img
                      src="images/img_location.svg"
                      className="h-[48px] w-[48px]"
                      alt="location"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Pants
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-[8px] items-center justify-start mb-[5px] self-stretch w-[auto]">
                    <Img
                      src="images/img_user.svg"
                      className="h-[48px] w-[48px]"
                      alt="user"
                    />
                    <Text
                      className="font-normal not-italic text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Shoes
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[18px] w-[120px]">
                  <div className="flex flex-col gap-[8px] items-center justify-start mb-[5px] self-stretch w-[auto]">
                    <Img
                      src="images/img_settings.svg"
                      className="h-[48px] w-[48px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Dress
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-4 md:w-[100%] w-[44%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[11px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-start mb-[12px] mt-[7px] self-stretch w-[auto]">
                      <Img
                        src="images/img_signal.svg"
                        className="h-[48px] w-[48px]"
                        alt="signal"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                        variant="body1"
                      >
                        Accesories
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[18px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-start mb-[5px] self-stretch w-[auto]">
                      <Img
                        src="images/img_skirt.svg"
                        className="h-[48px] w-[48px]"
                        alt="Skirt"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                        variant="body1"
                      >
                        Skirt
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[10px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-start mb-[13px] mt-[8px] self-stretch w-[auto]">
                      <Img
                        src="images/img_bra.svg"
                        className="h-[48px] w-[48px]"
                        alt="Bra"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                        variant="body1"
                      >
                        Underwear
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex h-[120px] items-center justify-start p-[18px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-start mb-[5px] self-stretch w-[auto]">
                      <Img
                        src="images/img_car_48X48.svg"
                        className="h-[48px] w-[48px]"
                        alt="car"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                        variant="body1"
                      >
                        More
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex h-[718px] items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_herosection.png')" }}
          >
            <div className="bg-white_A700_82 flex items-start justify-start p-[157px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[126px] md:w-[100%] w-[43%]">
                <Button
                  className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[271px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_800 w-[auto]"
                  size="xl"
                  variant="FillWhiteA700"
                >
                  50% Off Limited Offer
                </Button>
                <Text
                  className="font-playfairdisplay mt-[32px] text-gray_800 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Summer Collection
                </Text>
                <Text
                  className="font-normal font-poppins leading-[32.00px] mt-[40px] not-italic text-gray_800 text-left w-[100%]"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </Text>
                <Button
                  className="cursor-pointer flex h-[60px] items-center justify-center mt-[80px] pr-[24px] w-[245px]"
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
          <div className="flex flex-col gap-[42px] items-center justify-start max-w-[1632px] mt-[32px] mx-[auto] pt-[8px] md:px-[20px] w-[100%]">
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
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[32%]">
                <div className="sm:gap-[20px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_warmpantspxl7.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Green <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_rectangle39_245X245.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine One"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Black
                          <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_177X177.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="placeholder"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Black <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_6.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="placeholder One"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Black
                          <br />
                          Brief Case
                        </>
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
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[32%]">
                <div className="bg-gray_50 flex flex-col items-center justify-start pb-[55px] w-[100%]">
                  <Img
                    src="images/img_placeholder_400X521.png"
                    className="h-[400px] sm:h-[auto] object-cover w-[100%]"
                    alt="placeholder Two"
                  />
                  <div className="flex flex-col gap-[16px] items-center justify-start mt-[27px] self-stretch w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_800"
                      as="h5"
                      variant="h5"
                    >
                      <>
                        Brown <br />
                        Casual Sneaker
                      </>
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $299
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[60px] leading-[normal] mt-[56px] text-[18px] text-center text-white_A700 w-[200px]"
                    size="2xl"
                    variant="FillGray800"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[32%]">
                <div className="sm:gap-[20px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_1.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Two"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Blue Grey <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_631X384.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Three"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Blue Denim <br />
                          Jacket
                        </>
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_245X245.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="placeholder Three"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[42px] self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Modern Classic
                          <br />
                          Watch
                        </>
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_250X250.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="placeholder Four"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[42px] self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Casual <br />
                          Classic Watch
                        </>
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
          <div className="md:h-[1442px] h-[426px] sm:h-[526px] max-w-[1630px] mt-[100px] mx-[auto] md:px-[20px] relative w-[100%]">
            <div className="flex flex-col gap-[24px] h-[100%] items-start justify-start ml-[32px] mt-[32px] w-[auto]">
              <Text
                className="font-bold text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                New Arrival
              </Text>
              <Text
                className="font-normal leading-[32.00px] not-italic text-left text-white_A700 w-[100%]"
                variant="body1"
              >
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </div>
            <div className="absolute flex inset-[0] justify-center m-[auto] w-[100%]">
              <div className="bg-gray_800 h-[426px] my-[auto] w-[24%]"></div>
              <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between ml-[-109px] my-[auto] w-[84%] z-[1]">
                <List
                  className="sm:flex-col flex-row gap-[26.57px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[362px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs2 w-[318px]">
                    <Img
                      src="images/img_businessshirt.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="blackbusiness"
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
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[362px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs2 w-[318px]">
                    <Img
                      src="images/img_sportj9bzxuy.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="pink3TZ3PBBOne"
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
                  className="sm:flex-col flex-row gap-[26.58px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[361px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs2 w-[318px]">
                    <Img
                      src="images/img_placeholder_4.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="graytshirtis"
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
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[361px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs2 w-[318px]">
                    <Img
                      src="images/img_placeholder_5.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="redcheckereds"
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
          </div>
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start max-w-[1633px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 h-[400px] items-start justify-center p-[82px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]"
              style={{ backgroundImage: "url('images/img_02_400X800.png')" }}
            >
              <Text
                className="font-normal my-[59px] not-italic text-left text-white_A700"
                as="h5"
                variant="h5"
              ></Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 h-[400px] items-start justify-center p-[79px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]"
              style={{ backgroundImage: "url('images/img_03_400X801.png')" }}
            >
              <Text
                className="font-normal my-[73px] not-italic text-left text-white_A700"
                as="h5"
                variant="h5"
              ></Text>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[100px] w-[100%]">
            <div className="h-[362px] md:h-[466px] sm:h-[964px] md:px-[20px] relative w-[100%]">
              <div className="absolute bg-gray_800 flex inset-x-[0] items-start justify-start mx-[auto] p-[63px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
                <div className="flex items-center justify-start mb-[154px] md:ml-[0] ml-[80px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Why Choose Us
                  </Text>
                </div>
              </div>
              <List
                className="absolute bottom-[0] sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] justify-center mx-[auto] w-[85%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs3 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_music.svg"
                    className="h-[48px] w-[48px]"
                    alt="music"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Free Delivery
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left"
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
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs3 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_computer.svg"
                    className="h-[48px] w-[48px]"
                    alt="computer"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Payment Method
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left"
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
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs3 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_clock.svg"
                    className="h-[48px] w-[48px]"
                    alt="clock"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Warranty
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left"
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
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs3 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_music_65X65.svg"
                    className="h-[48px] w-[48px]"
                    alt="music One"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Customer Support{" "}
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left"
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
          <div className="flex flex-col gap-[32px] items-center justify-start max-w-[1630px] mt-[100px] mx-[auto] pt-[11px] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular this Week
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
            <List
              className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start self-stretch md:w-[100%] w-[auto]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_6.png"
                  className="h-[245px] md:h-[auto] object-cover w-[245px]"
                  alt="placeholder Five"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-center text-gray_800"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Black Adventure
                      <br />
                      Boots
                    </>
                  </Text>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_177X177.png"
                  className="h-[245px] md:h-[auto] object-cover w-[245px]"
                  alt="placeholder Six"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-center text-gray_800"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Black Formal
                      <br />
                      Highheels
                    </>
                  </Text>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_250X250.png"
                  className="h-[245px] md:h-[auto] object-cover w-[245px]"
                  alt="placeholder Seven"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-center text-gray_800"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Brown <br />
                      Casual Shoes
                    </>
                  </Text>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] justify-start pb-[4px] w-[100%]">
                <Img
                  src="images/img_travel8v7cnke.png"
                  className="h-[245px] md:h-[auto] object-cover w-[245px]"
                  alt="placeholder Eight"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[50px] self-stretch w-[auto]">
                  <Text
                    className="font-medium text-center text-gray_800"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Gray <br />
                      Longpants
                    </>
                  </Text>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_245X245.png"
                  className="h-[245px] md:h-[auto] object-cover w-[245px]"
                  alt="placeholder Nine"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-center text-gray_800"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Green
                      <br />
                      Sport Jacket
                    </>
                  </Text>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_3.png"
                  className="h-[245px] md:h-[auto] object-cover w-[245px]"
                  alt="placeholder Ten"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start w-[143px]">
                  <Text
                    className="font-medium text-center text-gray_800"
                    as="h6"
                    variant="h6"
                  >
                    <>
                      Blue Denim <br />
                      Skirt
                    </>
                  </Text>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
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
          <Img
            src="images/img_brand.svg"
            className="h-[68px] mt-[100px] w-[51%]"
            alt="brand"
          />
          <footer className="bg-gray_800 flex items-center justify-center mt-[100px] md:px-[20px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[68px] items-center justify-center mb-[32px] mt-[64px] mx-[auto] w-[85%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[48px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[26%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[416px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Contacts
                      </Text>
                      <div className="flex flex-col gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_call.svg"
                            className="h-[24px] w-[24px]"
                            alt="call"
                          />
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            +1234567890
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_mail.svg"
                            className="h-[24px] w-[24px]"
                            alt="mail"
                          />
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            elliye@support.com
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Social Media
                      </Text>
                      <Img
                        src="images/img_sosmedia.svg"
                        className="h-[24px] self-stretch w-[120px]"
                        alt="sosmedia"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[32px] items-start justify-start w-[166px]">
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
                          className="cursor-pointer font-normal not-italic text-gray_500 text-left"
                          variant="body1"
                        >
                          Categories
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          New Arrival
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Features
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Collections
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Discount
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Special Offer
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[32px] items-start justify-start md:ml-[0] ml-[251px] w-[245px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Company
                    </Text>
                    <ul className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-gray_500 text-left"
                          variant="body1"
                        >
                          About
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Careers
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Services
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                          href="javascript:"
                        >
                          Terms of service
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[170px] md:w-[100%] w-[24%] common-column-list">
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
                        className="cursor-pointer font-normal not-italic text-[18px] text-gray_500 text-left"
                        href="javascript:"
                      >
                        Drop your email below to get update, promotions,
                        coupons, and more!
                      </a>
                    </li>
                    <li className="mt-[35px] w-[100%]">
                      <Input
                        wrapClassName="cursor-pointer flex"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-bluegray_100_87 text-[18px] text-bluegray_100_87 text-left tracking-[0.36px] w-[100%]"
                        type="email"
                        name="form"
                        placeholder="Enter your email"
                        suffix={
                          <div className="h-[60px] ml-[35px] w-[60px] bg-white_A700 p-[14px] flex justify-center items-center">
                            <Img
                              src="images/img_menu.svg"
                              className="my-[auto]"
                              alt="menu"
                            />
                          </div>
                        }
                        size="sm"
                        variant="OutlineWhiteA700"
                      ></Input>
                    </li>
                  </ul>
                </div>
              </div>
              <Text
                className="not-italic text-bluegray_100 text-left w-[auto]"
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

export default HomepageVThreePage;
