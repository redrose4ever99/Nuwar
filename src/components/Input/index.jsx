import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillWhiteA700: "bg-white_A700",
  OutlineWhiteA700: "bg-gray_800 border-[1px] border-solid border-white_A700",
  OutlineBluegray100: "border-[1px] border-bluegray_100 border-solid",
};

const sizes = { sm: "pb-[17px] pl-[17px] pt-[22px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,

      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
               
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,

  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "OutlineWhiteA700",
    "OutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["sm"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  variant: "",
  size: "",
};

export { Input };
