import React from "react";

import {
  Img,
  Text,
  Button,
  Line,
  Slider,
  PagerIndicator,
  List,
  RatingBar,
} from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const HomepageVTwoPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div
        className="common-pointer bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]"
        onClick={() => navigate("/homepagevthree")}
      >
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-center md:w-[100%] w-[88%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <div className="flex md:flex-1 flex-row gap-[8px] items-center justify-start md:w-[100%] w-[7%]">
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
                <div className="bg-white_A700 border-[2px] border-gray_50 border-solid flex md:flex-1 flex-row sm:gap-[40px] items-center justify-between mb-[5px] md:ml-[0] ml-[411px] sm:pl-[20px] pl-[32px] md:w-[100%] w-[36%]">
                  <Text
                    className="font-normal not-italic text-gray_500_87 text-left w-[auto]"
                    variant="body1"
                  >
                    Search here
                  </Text>
                  <div className="bg-gray_800 md:h-[18px] h-[48px] p-[16px] relative w-[48px]">
                    <Img
                      src="images/img_search.svg"
                      className="absolute h-[18px] inset-[0] justify-center m-[auto] w-[18px]"
                      alt="search"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_car_24X80.svg"
                  className="h-[24px] md:ml-[0] ml-[304px] self-stretch w-[80px]"
                  alt="car"
                />
                <Button
                  className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[32px] text-[14px] text-center text-white_A700 w-[107px]"
                  size="lg"
                  variant="FillGray800"
                >
                  Login
                </Button>
              </div>
              <Line className="bg-gray_50 h-[1px] mt-[19px] w-[100%]" />
              <ul className="flex md:flex-col flex-row gap-[80px] md:hidden items-start justify-start mt-[27px] self-stretch md:w-[100%] w-[auto] common-row-list">
                <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    Categories
                  </a>
                </li>
                <li className="mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    New Arrival
                  </a>
                </li>
                <li className="mt-[1px] mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    Collections
                  </a>
                </li>
                <li className="mb-[4px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[18px] text-gray_800 text-left"
                    href="javascript:"
                  >
                    Discount
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="overflow-auto overflow-x-auto w-[100%]">
            <div className="sm:h-[1040px] h-[750px] md:px-[20px] relative w-[100%]">
              <div className="h-[750px] m-[auto] w-[100%]">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  paddingRight={26}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="m-[auto] w-[100%]"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div
                        className="bg-cover bg-no-repeat flex h-[750px] items-center justify-start mx-[10px]"
                        style={{
                          backgroundImage: "url('images/img_group2291.png')",
                        }}
                      >
                        <div className="bg-black_900_68 flex items-start justify-end p-[32px] sm:px-[20px] w-[100%]">
                          <div className="flex flex-col gap-[148px] md:gap-[40px] items-start justify-start md:ml-[0] ml-[112px] mt-[86px] md:w-[100%] w-[44%]">
                            <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start w-[100%]">
                              <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  50% Off Limited Offer
                                </Text>
                                <Text
                                  className="font-playfairdisplay leading-[100.00%] text-left text-white_A700"
                                  variant="body3"
                                >
                                  <>
                                    Summer <br />
                                    Collection
                                  </>
                                </Text>
                              </div>
                              <Button
                                className="cursor-pointer flex h-[60px] items-center justify-center px-[24px] w-[245px]"
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
                                <div className="font-medium leading-[normal] md:text-[22px] sm:px-[20px] sm:text-[20px] text-[24px] text-left text-white_A700">
                                  Shop Now
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-[12px] bg-gray_800 w-[12px] relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700 w-[12px] relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[4%] flex gap-[8px] h-[12px] left-[7%] self-stretch w-[112px]"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-gray_800 w-[12px] relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700 w-[12px] relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
              <div className="absolute bottom-[4%] gap-[16px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-center right-[0] self-stretch shadow-bs w-[auto]">
                <div className="bg-white_A700 flex h-[160px] items-center justify-end p-[34px] sm:px-[20px] w-[160px]">
                  <div className="flex flex-col gap-[16px] items-center justify-start mt-[4px] self-stretch w-[auto]">
                    <Img
                      src="images/img_vector.svg"
                      className="h-[39px] w-[39px]"
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
                <div className="bg-white_A700 flex h-[160px] items-center justify-end p-[30px] sm:px-[20px] w-[160px]">
                  <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_file.svg"
                      className="h-[35px] w-[68%]"
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
                <div className="bg-white_A700 flex h-[160px] items-center justify-end p-[30px] sm:px-[20px] w-[160px]">
                  <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_68X43.svg"
                      className="h-[39px] w-[45%]"
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
                <div className="bg-gray_800 flex h-[160px] items-center justify-end p-[30px] sm:px-[20px] w-[160px]">
                  <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_cut.svg"
                      className="h-[28px] w-[70%]"
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
                <div className="bg-white_A700 flex h-[160px] items-center justify-end p-[30px] sm:px-[20px] w-[160px]">
                  <div className="flex flex-col gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_vector_68X48.svg"
                      className="h-[39px] w-[50%]"
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
                <div className="bg-white_A700 flex h-[160px] items-center justify-end p-[31px] sm:px-[20px] w-[160px]">
                  <div className="flex flex-col gap-[16px] items-center justify-start mb-[3px] mt-[11px] self-stretch w-[auto]">
                    <Img
                      src="images/img_globe.svg"
                      className="h-[32px] w-[40%]"
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
          </div>
          <Img
            src="images/img_vector_gray_500.svg"
            className="h-[68px] mt-[115px] w-[969px]"
            alt="Vector Three"
          />
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start max-w-[1633px] mt-[115px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[49%]">
              <div
                className="bg-cover bg-no-repeat flex h-[400px] items-start justify-start p-[82px] sm:px-[20px] md:px-[40px] w-[100%]"
                style={{ backgroundImage: "url('images/img_02.png')" }}
              >
                <Text
                  className="font-normal my-[59px] not-italic text-left text-white_A700"
                  as="h5"
                  variant="h5"
                ></Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex h-[400px] items-start justify-end p-[90px] sm:px-[20px] md:px-[40px] w-[100%]"
                style={{ backgroundImage: "url('images/img_01.png')" }}
              >
                <Text
                  className="font-normal mb-[47px] mt-[55px] not-italic text-gray_800 text-left"
                  as="h5"
                  variant="h5"
                ></Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 h-[832px] items-start justify-start p-[79px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]"
              style={{ backgroundImage: "url('images/img_03.png')" }}
            >
              <Text
                className="font-normal mb-[332px] mt-[224px] not-italic text-left text-white_A700"
                as="h5"
                variant="h5"
              ></Text>
            </div>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1632px] mt-[100px] mx-[auto] pt-[8px] md:px-[20px] w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Featured
              </Text>
              <div className="flex flex-row gap-[8px] items-center justify-between w-[7%]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="h-[31px] w-[32px]"
                  alt="menu"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 items-center justify-start pb-[7px] md:w-[100%] w-[33%]">
                <div
                  className="bg-cover bg-no-repeat flex h-[761px] items-center justify-start p-[56px] sm:px-[20px] md:px-[40px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_placeholder_11.png')",
                  }}
                >
                  <Text
                    className="font-normal mb-[541px] not-italic text-center text-gray_800"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[66%]">
                <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_10.png"
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
                      src="images/img_placeholder_11.png"
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
                      src="images/img_placeholder_175X225.png"
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
                      src="images/img_placeholder_13.png"
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
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_12.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Four"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Casual <br />
                          Pink Shirt
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
                  <div className="flex flex-1 flex-col gap-[23px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_rectangle39.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Five"
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
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_9.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Six"
                    />
                    <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_800"
                        as="h6"
                        variant="h6"
                      >
                        <>
                          Purple <br />
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
                  <div className="flex flex-1 flex-col gap-[21px] items-center justify-start pb-[4px] w-[100%]">
                    <Img
                      src="images/img_placeholder_12.png"
                      className="h-[245px] md:h-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Seven"
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
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1632px] sm:h-[535px] h-[579px] mt-[100px] md:px-[20px] relative w-[100%]">
            <div className="absolute bg-gray_800 flex inset-x-[0] items-start justify-start mx-[auto] p-[52px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
              <div className="flex items-center justify-start mb-[271px] md:ml-[0] ml-[91px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Limited Offer
                </Text>
              </div>
            </div>
            <List
              className="absolute bottom-[0] sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 inset-x-[0] justify-center mx-[auto] w-[85%]"
              orientation="horizontal"
            >
              <div className="bg-gray_50 flex md:flex-col flex-row gap-[48px] items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] shadow-bs1 w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_rectangle45.png"
                    className="h-[279px] md:h-[auto] object-cover w-[279px]"
                    alt="RectangleFortyFive"
                  />
                  <Button
                    className="cursor-pointer font-bold h-[60px] leading-[normal] text-[18px] text-center text-white_A700 w-[200px]"
                    size="2xl"
                    variant="FillGray800"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[53%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row gap-[32px] items-center justify-between mt-[31px] w-[100%]">
                      <div className="border-[1px] border-gray_500 border-solid flex h-[107px] items-center justify-end p-[22px] sm:px-[20px] w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            08
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border-[1px] border-gray_500 border-solid flex h-[107px] items-center justify-start p-[18px] w-[107px]">
                        <div className="flex flex-col gap-[18px] items-center justify-start my-[4px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            58
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border-[1px] border-gray_500 border-solid flex h-[107px] items-center justify-start p-[14px] w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start my-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium h-[24px] text-gray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            18
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-bold mt-[29px] text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Black Warm Jacket{" "}
                    </Text>
                    <div className="flex flex-row gap-[24px] items-center justify-start mt-[22px] md:w-[100%] w-[36%]">
                      <Text
                        className="font-normal line-through not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $299
                      </Text>
                      <Text
                        className="font-medium text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 flex md:flex-col flex-row gap-[48px] items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] shadow-bs1 w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_placeholder_4.png"
                    className="h-[279px] md:h-[auto] object-cover w-[279px]"
                    alt="RectangleFortyFive One"
                  />
                  <Button
                    className="cursor-pointer font-bold h-[60px] leading-[normal] text-[18px] text-center text-white_A700 w-[200px]"
                    size="2xl"
                    variant="FillGray800"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[53%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row gap-[32px] items-center justify-between mt-[31px] w-[100%]">
                      <div className="border-[1px] border-gray_500 border-solid flex h-[107px] items-center justify-end p-[22px] sm:px-[20px] w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            08
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border-[1px] border-gray_500 border-solid flex h-[107px] items-center justify-start p-[18px] w-[107px]">
                        <div className="flex flex-col gap-[18px] items-center justify-start my-[4px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            58
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border-[1px] border-gray_500 border-solid flex h-[107px] items-center justify-start p-[14px] w-[107px]">
                        <div className="flex flex-col gap-[19px] items-center justify-start my-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium h-[24px] text-gray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            18
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-bold mt-[32px] text-gray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Casual Grey Shoes
                    </Text>
                    <div className="flex flex-row gap-[23px] items-center justify-start mt-[16px] md:w-[100%] w-[36%]">
                      <Text
                        className="font-normal line-through not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $399
                      </Text>
                      <Text
                        className="font-medium text-gray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1634px] mt-[100px] mx-[auto] pt-[7px] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[50%]">
              <Text
                className="font-bold text-gray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                New Arrival
              </Text>
              <div className="flex items-center justify-start mt-[42px] w-[100%]">
                <div className="md:gap-[20px] gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_sportj9bzxuy.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder"
                    />
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
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_shoesisolated.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder One"
                    />
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
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_placeholder_250X250.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder Two"
                    />
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
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_placeholder_6.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder Three"
                    />
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
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-center md:ml-[0] ml-[346px] mt-[32px] md:w-[100%] w-[14%]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="h-[31px] w-[32px]"
                  alt="menu One"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[50%]">
              <Text
                className="font-bold text-gray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular This Week
              </Text>
              <div className="flex items-center justify-start mt-[32px] w-[100%]">
                <div className="md:gap-[20px] gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_placeholder_3.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder Four"
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
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_placeholder_5.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder Five"
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
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_placeholder_177X177.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder Six"
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
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_placeholder_4.png"
                      className="h-[107px] md:h-[auto] object-cover w-[107px]"
                      alt="placeholder Seven"
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
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-center md:ml-[0] ml-[346px] mt-[32px] md:w-[100%] w-[14%]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="h-[31px] w-[32px]"
                  alt="menu Two"
                />
              </div>
            </div>
          </div>
          <List
            className="bg-gray_50 sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[100px] px-[144px] sm:px-[20px] md:px-[40px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex sm:flex-1 flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
            <div className="flex sm:flex-1 flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
            <div className="flex sm:flex-1 flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
            <div className="flex sm:flex-1 flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
          <Footer1 className="bg-gray_800 flex items-center justify-center md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default HomepageVTwoPage;
