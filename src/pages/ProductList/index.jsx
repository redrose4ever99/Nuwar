import React from "react";

import Header from "components/Header";
import {
  Text,
  Line,
  Img,
  CheckBox,
  Button,
  List,
  RatingBar,
  SelectBox,
} from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[36px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[144px] md:px-[20px] md:w-[100%] w-[11%]">
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
              Product List
            </Text>
          </div>
          <Text
            className="font-bold md:ml-[0] ml-[858px] mt-[52px] text-gray_800 text-left w-[auto]"
            as="h5"
            variant="h5"
          >
            Product List
          </Text>
          <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start max-w-[1632px] mt-[70px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start pt-[6px] md:w-[100%] w-[16%]">
              <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    variant="body1"
                  >
                    Categories
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_cut_32X32.svg"
                      className="h-[32px] w-[32px]"
                      alt="cut"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Jacket
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_file.svg"
                      className="h-[32px] w-[32px]"
                      alt="file"
                    />
                    <Text
                      className="font-normal not-italic text-gray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Shirt
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_location_32X32.svg"
                      className="h-[32px] w-[32px]"
                      alt="location"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Pants
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_computer_32X32.svg"
                      className="h-[32px] w-[32px]"
                      alt="computer"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Shoes
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_settings_32X32.svg"
                      className="h-[32px] w-[32px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Dress
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_signal_32X32.svg"
                      className="h-[32px] w-[32px]"
                      alt="signal"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Accesories
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_skirt_32X32.svg"
                      className="h-[32px] w-[32px]"
                      alt="Skirt"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      Skirt
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_arrowdown_gray_500.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body1"
                    >
                      View more
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-bluegray_100 h-[1px] mt-[32px] w-[100%]" />
              <div className="flex flex-col gap-[32px] items-start justify-start mt-[37px] md:w-[100%] w-[68%]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  Filter by Price
                </Text>
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
              <Line className="bg-bluegray_100 h-[1px] mt-[32px] w-[100%]" />
              <div className="flex flex-col gap-[32px] items-start justify-start mt-[37px] md:w-[100%] w-[79%]">
                <Text
                  className="font-medium text-gray_800 text-left w-[auto]"
                  variant="body1"
                >
                  Filter by Rating
                </Text>
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[34%]">
                    <div className="border-[3px] border-bluegray_100 border-solid h-[24px] w-[24px]"></div>
                    <Img
                      src="images/img_star1_3.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarOne"
                    />
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[50%]">
                    <div className="border-[3px] border-bluegray_100 border-solid h-[24px] w-[24px]"></div>
                    <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                      <Img
                        src="images/img_star1_4.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarOne One"
                      />
                      <Img
                        src="images/img_star2_2.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarTwo"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[67%]">
                    <div className="border-[3px] border-bluegray_100 border-solid h-[24px] w-[24px]"></div>
                    <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                      <Img
                        src="images/img_star1_5.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarOne Two"
                      />
                      <Img
                        src="images/img_star2_3.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarTwo One"
                      />
                      <Img
                        src="images/img_star3_1.svg"
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
                          src="images/img_star1_6.svg"
                          className="h-[24px] w-[24px]"
                          alt="StarOne Three"
                        />
                        <Img
                          src="images/img_star2_4.svg"
                          className="h-[24px] w-[24px]"
                          alt="StarTwo Two"
                        />
                        <Img
                          src="images/img_star3_2.svg"
                          className="h-[24px] w-[24px]"
                          alt="StarThree One"
                        />
                        <Img
                          src="images/img_star5_24X24.svg"
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
            <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[84%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between pt-[2px] w-[100%]">
                <Text
                  className="font-medium sm:mt-[0] mt-[4px] text-gray_500 text-left w-[auto]"
                  variant="body1"
                ></Text>
                <SelectBox
                  className="sm:flex-1 font-normal leading-[normal] not-italic text-[18px] text-gray_500 text-left sm:w-[100%] w-[18%]"
                  placeholderClassName="text-gray_500"
                  name="sort"
                  placeholder="Sort by: Newest Items"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] mr-[0] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
              </div>
              <div
                className="common-pointer flex flex-col gap-[56px] items-center justify-start w-[100%]"
                onClick={() => navigate("/productdetails")}
              >
                <div className="flex items-center justify-start w-[100%]">
                  <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-[100%]">
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_placeholder_3.png"
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
                        src="images/img_placeholder_1.png"
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
                        src="images/img_shoesisolated.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Two"
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
                        src="images/img_placeholder_4.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Three"
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
                        src="images/img_placeholder_245X245.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Four"
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
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_placeholder_2.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Five"
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
                        src="images/img_rectangle39_245X245.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
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
                    <div className="flex flex-1 flex-col gap-[21px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_placeholder_250X250.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
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
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_placeholder_631X384.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Eight"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-center text-gray_800"
                          as="h6"
                          variant="h6"
                        >
                          <>
                            Casual <br />
                            Grey Shoes
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
                    <div className="flex flex-1 flex-col gap-[20px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_sportj9bzxuy.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Nine"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-gray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Pink Jacket
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
                        src="images/img_placeholder_5.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Ten"
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
                        src="images/img_placeholder_15.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Eleven"
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
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_businessshirt.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Twelve"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
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
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_placeholder_177X177.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Thirteen"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
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
                        src="images/img_placeholder_400X521.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Fourteen"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
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
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start pb-[4px] w-[100%]">
                      <Img
                        src="images/img_placeholder_16.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Fifteen"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
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
                        src="images/img_placeholder_6.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Sixteen"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[50px] self-stretch w-[auto]">
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
                        src="images/img_travel8v7cnke.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Seventeen"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
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
                        src="images/img_warmpantspxl7.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Eighteen"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
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
                        src="images/img_rectangle45.png"
                        className="h-[245px] md:h-[auto] object-cover w-[245px]"
                        alt="placeholder Nineteen"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
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
                <div className="flex flex-row gap-[24px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowleft"
                  />
                  <Button
                    className="cursor-pointer font-normal h-[50px] leading-[normal] not-italic text-[18px] text-center text-white_A700 w-[50px]"
                    size="lg"
                    variant="FillGray800"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-normal h-[51px] leading-[normal] not-italic text-[18px] text-center text-gray_500 w-[51px]"
                    size="lg"
                    variant="OutlineGray500"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-normal h-[51px] leading-[normal] not-italic text-[18px] text-center text-gray_500 w-[51px]"
                    size="lg"
                    variant="OutlineGray500"
                  >
                    3
                  </Button>
                  <Img
                    src="images/img_info_24X24.svg"
                    className="h-[24px] w-[24px]"
                    alt="info"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_800 flex items-center justify-center mt-[100px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
