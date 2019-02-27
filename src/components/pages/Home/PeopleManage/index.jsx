import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// core components
import GridItem from "../../../views/GridItem";
import GridContainer from "../../../views/GridContainer";
import Table from "../../../views/Table";
import Card from "../../../views/Card";
import CardBody from "../../../views/CardBody";
import Typography from '@material-ui/core/Typography';
import { withSnackbar } from 'notistack';

import { styles } from './styles';
import Apis from '../../../../utils/Apis'
import DetailDialog from './DetailDialog'

class PeopleManage extends Component {

    state = {
        totalCount: 0,
        pageNumber: 1,
        characters: [],
        isLoading: true,
        character: {}
    }

    componentWillMount () {
        const { pageNumber } = this.state;
        this.getPeople(pageNumber);
    }
    
    getPeople = async (pageNumber) => {
        const { classes } = this.props;
        this.setState({ isLoading: true });
        try {
            let response = await Apis.getPeople(pageNumber);
            console.log("response", response);

            let results = response.data.results;
            let characters = [];
            for (let i = 0; i < results.length; i ++) {
                // users = [...users, {email: respUsers[i].email, isAllowed: respUsers[i].email, ]
                characters = [...characters, 
                        [   
                            <Typography noWrap className={classes.typographyContent}>{results[i].name}</Typography>, 
                            <Typography noWrap className={classes.typographyContent}>{results[i].height}</Typography>, 
                            <Typography noWrap className={classes.typographyContent}>{results[i].birth_year}</Typography>, 
                        ]
                    ];
            }
            this.setState({pageNumber: pageNumber, totalCount: response.data.count, characters: characters, isLoading: false, raw: results})
        }
        catch (error) {
            this.setState({isLoading: false});
            let messageProperty = Object.getOwnPropertyDescriptor(error, 'message');
            
            this.props.enqueueSnackbar(messageProperty.value, { 
                variant: 'error',
            });
        }
    }

    handleChangePage = (event, page) => {
        console.log("handleChangePage", page);
        this.getPeople(page + 1);
    }

    alertMessage = (type, message) => {
        this.props.enqueueSnackbar(message, { 
            variant: type,
        });
    }

    onTableRowClick = (index) => {
        console.log("onTableRowClick index : ", index);
        const { raw } = this.state;
        // console.log("onTableRowClick --",  raw);
        console.log("onTableRowClick --",  this.dialog);
        this.dialog.handleOpen(raw[index]);
    }

    render() {
        const { totalCount, pageNumber, characters, isLoading } = this.state;
        return (
            <GridContainer>
                 <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardBody>
                            <Table
                                tableHeaderColor="black"
                                tableHead={[<b>Name</b>, <b>Height</b>, <b>Birth year</b>]}
                                tableData={characters}
                                handleChangePage = {this.handleChangePage}
                                totalCount = {totalCount}
                                rowsPerPage = {10}
                                page = { pageNumber }
                                isLoading = { isLoading }
                                onTableRowClick={this.onTableRowClick}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
                <DetailDialog 
                    innerRef={ref => {
                            this.dialog = ref
                        }
                    }
                    alertMessage={this.alertMessage}/>
            </GridContainer>
        );
    }
}

PeopleManage.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(withSnackbar(PeopleManage));