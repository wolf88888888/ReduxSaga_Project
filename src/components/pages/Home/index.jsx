import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import Header from "../../views/Header"
import homeRoutes from '../../../routes/home';

const switchRoutes = (
    <Switch>
        {homeRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
        this.resizeFunction = this.resizeFunction.bind(this);
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    resizeFunction() {
        if (window.innerWidth >= 960) {
            this.setState({ mobileOpen: false });
        }
    }

    componentDidMount() {
        // if (navigator.platform.indexOf("Win") > -1) {
        //     const ps = new PerfectScrollbar(this.refs.mainPanel);
        // }
        window.addEventListener("resize", this.resizeFunction);
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({ mobileOpen: false });
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.mainPanel} ref="mainPanel">
                    <Header
                        routes={homeRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
                    <div className={classes.container}>{switchRoutes}</div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Home);