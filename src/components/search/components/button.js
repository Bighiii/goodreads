import React from "react";
import PropTypes from "prop-types";

const Button  = ({search}) => {
    return(
        <button placeholder="Search here" onClick={search} > Search</button>
    )
};
Button.defaultProps = {};
Button.propTypes = {
    search : PropTypes.func.isRequired
}


export default Button;