import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import css from "./SmallButton.module.scss";
import Fab from '@material-ui/core/Fab';

const SmallButton = ({ className , children, ...props}) => (
    <Fab 
        color='secondary' 
        variant="extended" 
        className={className}
        {...props}
        >

        {children}
    </Fab>
);

// AuthButton.propTypes = {
// };

// AuthButton.defaultProps = {
// };

export default SmallButton;
