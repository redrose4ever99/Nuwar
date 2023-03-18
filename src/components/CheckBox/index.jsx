import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100: "border-[3px] border-bluegray_100 border-solid",
};

const sizes = { sm: "pl-[2px] py-[2px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],

      variant,
      size,
      id = "checkbox_id",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["OutlineBluegray100"]),
  size: PropTypes.oneOf(["sm"]),
};

CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
  size: "",
};

export { CheckBox };
