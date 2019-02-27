import React from "react";
import { Provider } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'
import { SnackbarProvider } from 'notistack';
// import { PersistGate } from 'redux-persist/integration/react'
// import {store, persistor} from '../store';
import {store} from '../store';
import Routes from '../routes'
import {
    primaryColor, 
    primaryLightColor,
    primaryDarkColor,
    secondaryColor,
    secondaryLightColor,
    secondaryDarkColor,
    defaultFont
} from './styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            light: primaryLightColor,
            dark: primaryDarkColor
        },
        secondary: {
            main: secondaryColor,
            light: secondaryLightColor,
            dark: secondaryDarkColor,
        }
    }
});

const stylesSnackbar = {
    success: { ...defaultFont, fontSize: 13 },
    error: { ...defaultFont, fontSize: 13 },
    warning: { ...defaultFont, fontSize: 13 },
    info: { ...defaultFont, fontSize: 13 },
};

const NotistackRoutes = (props) => {
    const { classes } = props;
    return (
        <SnackbarProvider 
            maxSnack={5}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            classes={{
                variantSuccess: classes.success,
                variantError: classes.error,
                variantWarning: classes.warning,
                variantInfo: classes.info,
            }}
        >
            <Routes/>
        </SnackbarProvider>
    );
}

const WrappedRoutes = withStyles(stylesSnackbar)(NotistackRoutes)

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <WrappedRoutes/>
            {/* </PersistGate> */}
        </Provider>
    </MuiThemeProvider>
);

export default App;