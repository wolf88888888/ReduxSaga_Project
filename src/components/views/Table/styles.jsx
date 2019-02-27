import {
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    defaultFont
} from "../../../App/styles";
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    warningTableHeader: {
        color: warningColor
    },
    primaryTableHeader: {
        color: primaryColor
    },
    dangerTableHeader: {
        color: dangerColor
    },
    successTableHeader: {
        color: successColor
    },
    infoTableHeader: {
        color: infoColor
    },
    roseTableHeader: {
        color: roseColor
    },
    grayTableHeader: {
        color: grayColor
    },
    table: {
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse"
    },
    tableHeadCell: {
        color: "inherit",
        ...defaultFont,
        fontSize: "1.4em"
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableCell: {
        ...defaultFont,
        lineHeight: "1.42857143",
        padding: "12px 8px",
        verticalAlign: "middle",
        fontSize: "1.4em",
    },
    tableResponsive: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    tablePaginationRoot: {
        position:'absolute',
        top: -30,
        right: 0,
    },
    tablePaginationCaption: {
        ...defaultFont,
        fontSize: 15
    },
    wrapperContainer: {
        position: 'relative',
    },
    loadingProgress: {
        color: red[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
});
    
export default styles;