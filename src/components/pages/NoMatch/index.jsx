import React from "react";
import Grid from '@material-ui/core/Grid';

const NoMatch = () => (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh'}}>
        <Grid item>
            <h1 style={{fontSize:100}}>404</h1>
        </Grid>
        <Grid item>
            <span style={{color:'gray', fontSize:40}}>Error - Page Not Found</span>
        </Grid>
        <Grid>
            <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">🙄</span>
            </h1>
        </Grid>
    </Grid> 
);

export default NoMatch;
