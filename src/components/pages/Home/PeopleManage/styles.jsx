import {
    defaultFont
} from "../../../../App/styles";

export const styles = theme => ({
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    tableActionButton: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginRight: 5
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
    viewButton : {
        defaultFont,
        height: 40,
        fontSize: 11,
        backgroundColor:'#fff'
    },
    typographyContent:{
        defaultFont,
        maxWidth: 250,
        fontSize: 12,
    }
});
