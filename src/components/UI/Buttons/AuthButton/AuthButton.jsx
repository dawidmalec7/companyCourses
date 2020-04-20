import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import css from "./AuthButton.module.scss";

const AuthButton = ({ className, text, type, ...props }) => (
  <Button
    type={type}
    variant="contained"
    className={clsx(css.AuthButton, className)}
    color="primary"
    {...props}
  >
    {text}
  </Button>
);

AuthButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

AuthButton.defaultProps = {
  type: "button",
  className: "",
};

export default AuthButton;
