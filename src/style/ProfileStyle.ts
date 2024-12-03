// profileStyles.ts

import { StyleSheet } from 'react-native';
import labelStyle from "./LabelStyle";
import theme from "./theme";
import viewStyles from "./ViewStyle";

const profileStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.WhiteSmoke,

    },
    pageTitle: {
        ...labelStyle.PageTitleStyle,
        marginBottom: 25,
        alignSelf: 'center',
    },
    labelSmall: {
        ...labelStyle.LabelSmall,
        marginBottom: 10,
        alignSelf: 'center',
    },
    labelMediumBoldDonorBlue: {
        ...labelStyle.LabelMediumDonorBlue,
        textAlign: 'center',
        marginBottom: 25,
    },
    bloodImage: {
        width: 27,
        height: 34,
        alignSelf: 'center',
        marginBottom: 25,
    },
    bloodImageSmall: {
        width: 22,
        height: 28,
        alignSelf: 'center',
        marginBottom: 25,
    },
    contributorView: {
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: theme.colors.PrimaryColor,
    },
    contributorTextRed: {
        ...labelStyle.LabelNormalRed,
        marginTop: 15,
    },
    contributorTextBoldRed: {
        ...labelStyle.LabelNormalBoldRed,
        fontSize:16,
        marginBottom: 15,
    },
    boxViewSeparator: {
        ...viewStyles.BoxViewSeparator,
        zIndex: 70,
        width: '90%',
        alignSelf: 'center',
    },
    boxViewSeparatorCarteDonneur: {
        ...viewStyles.BoxViewSeparator,
        zIndex: 70,
        width: '100%',
        alignSelf: 'center',
    },
    menuButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: theme.colors.PrimaryColor,
        width: '100%',
        justifyContent: 'center',
    },
    menuButton: {
        backgroundColor: theme.colors.PrimaryColor,
        width: '32%',
        height: 80,
        marginBottom: 25,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: theme.colors.DisabledTextColor,
    },
    menuButtonSelected: {
        backgroundColor: theme.colors.PrimaryColor,
        width: '32%',
        height: 80,
        marginBottom: 25,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: theme.colors.DonorBlue,
    },
    menuButtonText: {
        ...labelStyle.LabelNormalGreyProfile,
        textAlign: 'center',
        marginTop: 25,
        lineHeight:17
    },
    menuButtonTextSelected: {
        ...labelStyle.LabelNormalBoldMidnightBlueProfile,
        textAlign: 'center',
        marginTop: 25,
        lineHeight:17
    },
    infoView: {
        flexDirection: 'column',
        gap: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: theme.colors.PrimaryColor,
    },
    contactButtonFirst: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderColor: theme.colors.LightGrey,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5,
    },
    contactButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderColor: theme.colors.LightGrey,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5,
        justifyContent: 'space-between',
    },
    contactMe: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderColor: theme.colors.LightGrey,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    contactMeUserPreferences: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderColor: theme.colors.LightGrey,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'space-between',
    },
    contactImage: {
        width: 22,
        height: 28,
        marginLeft: 15,
    },
    smallIcon: {
        width: 19,
        height: 24,
        marginLeft: 15,
    },
    contactText: {
        ...labelStyle.LabelNormalMidnightBlue,
    },
    contactBoldText: {
        ...labelStyle.LabelNormalBoldMidnightBlue,
    },
    arrowImage: {
        width: 12,
        height: 14,
    },
    arrowImageSmall: {
        width: 12,
        height: 16,
        marginLeft : 60
    },
    arrowImageSmallConnection: {
        width: 12,
        height: 16,
    },
    numberArrowContainter: {
        flexDirection : "row" ,
        alignItems : "center",
        marginRight : 15
    },
    donationView: {
        backgroundColor: theme.colors.PrimaryColor,
    },
});

export default profileStyles;
