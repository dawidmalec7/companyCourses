import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import css from "./SmallButton.module.scss";

const SmallButton = ({ className , children, ...props}) => (
    <Button
        className={className} 
        size="small" 
        {...props}
    >
        {children}
    </Button>
);

// AuthButton.propTypes = {
// };

// AuthButton.defaultProps = {
// };

export default SmallButton;
