import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import styles from './styles';

function GridItem({ ...props }) {
    const { classes, children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

GridItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GridItem);