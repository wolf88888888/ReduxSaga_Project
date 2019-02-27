import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from '@material-ui/core/CircularProgress';

// core components
import styles from './styles';

function CustomTable({ ...props }) {
    const { classes, tableHead, tableData, tableHeaderColor, containerHeight, rowsPerPage, totalCount, page, handleChangePage, isLoading } = props;
    return (
        <div className={classes.wrapperContainer}>
            <div className={classes.tableResponsive} style={{height: containerHeight}}>
                <TablePagination
                    classes={{
                        root: classes.tablePaginationRoot,
                        caption: classes.tablePaginationCaption,
                    }} 
                    rowsPerPageOptions={[rowsPerPage]}
                    component="div"
                    count={totalCount}
                    rowsPerPage={rowsPerPage}
                    page={page - 1}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage}
                    // onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                <Table className={classes.table}>
                    {tableHead !== undefined ? (
                        <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
                            <TableRow>
                                {tableHead.map((prop, key) => {
                                    return (
                                        <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        key={key}
                                        >
                                        {prop}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                    ) : null}
                    <TableBody>
                        {tableData.map((prop, key) => {
                        return (
                            <TableRow 
                                key={key} className={classes.tableRow} onClick={() => {props.onTableRowClick(key)}}>
                            {prop.map((prop, key) => {
                                return (
                                <TableCell className={classes.tableCell} key={key}>
                                    {prop}
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                </Table>
            </div>
            {
                isLoading &&
                    <CircularProgress size={36} className={classes.loadingProgress} />
            }
        </div>
    );
}
  
CustomTable.defaultProps = {
    tableHeaderColor: "gray",
    totalCount: 0,
    rowsPerPage: 10,
    page: 1,
    isLoading: false,
};
  
CustomTable.propTypes = {
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf([
        "black",
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    // tableHead: PropTypes.arrayOf([PropTypes.string, PropTypes.object]),
    // tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string | PropTypes.object))
    // tableData: PropTypes.arrayOf(PropTypes.arrayOf([PropTypes.string, PropTypes.object]))
};

export default withStyles(styles)(CustomTable);