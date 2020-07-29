import PropTypes from "prop-types";
import styled from "styled-components";
import { variant } from "styled-system";
import { css } from "@styled-system/css";

/**
 * A basic input field.
 */
const Input = styled.input(
  css({
    boxSizing: "border-box",
    display: "block",
    width: "100%",
    margin: 0,
    padding: "12px",
    border: "thin",
    borderColor: "oline",
    borderRadius: "base",
    fontFamily: "body",
    fontSize: "md",
    color: "text",
    backgroundColor: "bg",
    // Remove red outline on required input in Firefox
    boxShadow: "none",

    "&::placeholder": {
      color: "secondary",
    },

    "&:focus": {
      outline: 0,
      borderColor: "primary",
    },

    "&:disabled": {
      opacity: 0.6,
      filter: "saturate(60%)",
    },
  }),
  variant({
    variants: {
      search: {
        WebkitAppearance: "none",
        width: "100%",
        border: "none",
        height: 3,
        padding: 1,
        background: "primary",
        color: "text",
        "&::placeholder": {
          color: "secondary",
        },

        "&:focus": {
          outline: 0,
          borderColor: "primary",
        },

        "&:disabled": {
          opacity: 0.6,
          filter: "saturate(60%)",
        },
      },
      secondary: {
        WebkitAppearance: "none",
        width: "100%",
        border: "none",
        height: 3,
        padding: 0,
        background: "#DBEAFF",
        "&::-webkit-slider-thumb": {
          WebkitAppearance: "none",
          width: 22,
          height: 22,
          borderRadius: 30,
          backgroundColor: "primary",
          cursor: "pointer",
        },
        "&::-moz-range-thumb": {
          WebkitAppearance: "none",
          appearance: "none",
          border: "none",
          width: 12,
          height: 12,
          backgroundColor: "primary",
          cursor: "pointer",
        },
      },
    },
  })
);

Input.propTypes = {
  /** Button label */
  children: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
};

Input.defaultProps = {
  variant: "primary",
};

/** @component */
export default Input;
