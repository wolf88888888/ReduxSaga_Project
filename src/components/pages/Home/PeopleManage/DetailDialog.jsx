import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';

import { getFilm } from "../../../../store/actions/film";

import {
    defaultFont
} from "../../../../App/styles";
import { Grid } from '@material-ui/core';

const styles = {
    tableActionButton: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginRight: 5,
    },

    tableActionButtonIcon: {
        width: "20px",
        height: "20px"
    },
    icon: {
        backgroundColor: "transparent",
        // color: dangerColor,
        boxShadow: "none"
    },
    title: {
        '& h2': {
          fontSize:20
        }
    },
    content: {
        fontSize:15
    },
    button: {
        fontSize:13
    },
    loadingProgress: {
        color: red[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    typographyContent:{
        defaultFont,
        fontSize: 12,
    },
    textField: {
        defaultFont,
        fontSize: 12,
    },
    listItem: {
        'primary': {
            defaultFont,
            fontSize: 12,
        }
    },
};

class DetailDialog extends React.Component {
    state = {
        scroll: 'paper',
        open: false,
        isLoading: false,
        films: [],
        character: {},
        film_indexs: [],
    };

    handleOpen = async (character) => {
        console.log("films : ", character.films);
        this.setState({ character: character, open: true });
        let film_indexs = [];
        try {
            for (let i = 0; i < character.films.length; i ++) {
                let film = character.films[i];
                let index = film.replace("https://swapi.co/api/films/", "");
                index = index.replace("/", "")
                if (!this.props.films.hasOwnProperty(index)) {
                    this.props.getFilm(index);
                }
                film_indexs.push(index);
                // if (this.props.films.hasOwnProperty(index)) {
                //     let response = await Apis.getFilm(index);
                //     console.log("response" + i + ": ", response);
                //     films.push(response.data);
                //     this.props.saveFilm({film: response.data, index: index});
                // }
                // else {
                //     console.log("saga result" + i + ": ", this.props.films[index]);
                //     films.push(this.props.films[index]);
                // }
            }
            this.setState({film_indexs: film_indexs, isLoading: false});
        }
        catch (error) {
            this.setState({isLoading: false});
            let messageProperty = Object.getOwnPropertyDescriptor(error, 'message');
            
            this.props.alertMessage("error", messageProperty.value);
        }
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOK = () => {
        this.setState({ open: false });
        this.props.onDelete(this.props.index);
    };

    render() {
        const { classes, films } = this.props;
        const { isLoading, character, film_indexs } = this.state;
        console.log("render character", character);
        return (
            <Grid >
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description">
                    <DialogTitle id="dialog-title" className={classes.title}>{"Detail"}</DialogTitle>
                    <DialogContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                className={classes.textField}
                                id="name"
                                name="Name"
                                label="Name"
                                fullWidth
                                autoComplete="name"
                                value={character.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                className={classes.textField}
                                id="height"
                                name="height"
                                label="Height"
                                fullWidth
                                autoComplete="lname"
                                value={character.height}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                className={classes.textField}
                                id="birth_year"
                                name="birth_year"
                                label="Birth Year"
                                fullWidth
                                autoComplete="birth_year"
                                value={character.birth_year}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                className={classes.textField}
                                id="gender"
                                name="gender"
                                label="Gender"
                                fullWidth
                                autoComplete="gender"
                                value={character.gender}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                className={classes.textField}
                                id="mass"
                                name="mass"
                                label="Mass"
                                fullWidth
                                autoComplete="mass"
                                value={character.mass}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                className={classes.textField}
                                id="hair_color"
                                name="hair_color"
                                label="Hair Color"
                                fullWidth
                                autoComplete="hair_color"
                                value={character.hair_color}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                className={classes.textField}
                                id="eye_color"
                                name="eye_color"
                                label="Eye Color"
                                fullWidth
                                autoComplete="eye_color"
                                value={character.eye_color}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.typographyContent}>
                                Films:
                            </Typography>
                            <List>
                                {
                                    film_indexs.map((film_index, index) => {
                                        if (films.hasOwnProperty(film_index)) {
                                            return (
                                                <ListItem key = {index}>
                                                    <ListItemText style={{fontSize: 12}} primary={films[film_index].title} />
                                                </ListItem>
                                            )
                                        }
                                    })
                                }
                            </List>
                            {
                                isLoading &&
                                    <CircularProgress size={36} className={classes.loadingProgress} />
                            }
                        </Grid>
                    </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" className={classes.button}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        );
    }
}

  
DetailDialog.propTypes = {
    classes: PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
    return {
        films: state.film.films,
    };
}

const mapDispatchToProps = dispatch => ({
    getFilm : bindActionCreators(getFilm, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef : true})(withStyles(styles)(DetailDialog));