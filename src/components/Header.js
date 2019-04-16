import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        return(
            <header className='top'>
                <h1>
                    <span className='ofThe'>List</span>
                    <span className='ofThe'>
                        <span className='of'>of</span>
                        <span className='the'>women's</span>
                    </span>
                    <span className='ofThe'>magazines</span>
                </h1>
                <h3 className='tagline'>
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        );
    };
}

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;
