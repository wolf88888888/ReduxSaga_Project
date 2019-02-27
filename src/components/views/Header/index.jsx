import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons

// core components
// import Button from "components/CustomButtons/Button.jsx";

import styles from './styles';

function Header({ ...props }) {
    function makeBrand() {
        var name;
        props.routes.map((prop, key) => {
            if (prop.path === props.location.pathname) {
                name = prop.navbarName;
            }
            return null;
        });
        return name;
    }
    const { classes, color } = props;
    const appBarClasses = classNames({
        [" " + classes[color]]: color
    });

    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    {/* Here we create navbar brand, based on route name */}
                    {makeBrand()}
                </div>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};
  
export default withStyles(styles)(Header);