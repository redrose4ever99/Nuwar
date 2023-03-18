import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillGray800: "bg-gray_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_800",
  OutlineGray500: "border-[2px] border-gray_500 border-solid text-gray_500",
  OutlineBluegray100:
    "border-[1px] border-bluegray_100 border-solid text-gray_800",
  OutlineGray800: "border-[1px] border-gray_800 border-solid text-gray_800",
  OutlineBluegray100_1:
    "bg-gray_800 border-[1px] border-bluegray_100 border-solid text-white_A700",
  icbFillGray800: "bg-gray_800",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = {
  sm: "p-[13px]",
  md: "pl-[16px] py-[16px]",
  lg: "p-[16px]",
  xl: "px-[10px] py-[16px]",
  "2xl": "p-[19px]",
  "3xl": "px-[16px] py-[19px]",
  "4xl": "sm:pl-[20px] pl-[23px] py-[23px]",
  "5xl": "sm:pr-[20px] pr-[35px] py-[35px]",
  smIcn: "p-[5px]",
  mdIcn: "p-[10px]",
  lgIcn: "p-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  variant: PropTypes.oneOf([
    "FillGray800",
    "FillWhiteA700",
    "OutlineGray500",
    "OutlineBluegray100",
    "OutlineGray800",
    "OutlineBluegray100_1",
    "icbFillGray800",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};

Button.defaultProps = { className: "", variant: "", size: "" };
export { Button };
