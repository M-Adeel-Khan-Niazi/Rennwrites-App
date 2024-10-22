import { StyleSheet } from "react-native";
import { fonts } from "../../Assets";
import colors from "../../Config/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        marginHorizontal: 20
    },
    scrollContentContainer: {
        paddingHorizontal: 20
    },
    subscriptionBoxTitle: {
        fontSize: 15,
        lineHeight: 22,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
        color: colors.themeTitleOrangeShade,
        textAlign: 'center'
    },
    bodyContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: colors.subscriptionBoxBackground
    },
    monthsParentContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    monthsChildContainer: {
        height: 52,
        width: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: colors.monthNameBackground
    },
    monthText: {
        fontSize: 16,
        lineHeight: 20,
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
    },
    monthChildUpper: {
        margin: 5,
        borderRadius: 12,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.monthNameShadow
    },
    priceText: {
        color: colors.themeOrange,
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 20,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '500'
    },
    buttonContainer: {
        backgroundColor: colors.white,
        marginTop: 20,
        borderRadius: 16,
        paddingVertical: 12
    },
    buttonLabel: {
        color: colors.black
    },
    checksText: {
        fontSize: 12,
        lineHeight: 25,
        
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        color: colors.themeTitleOrangeShade
    },
    checksContainer: {
        backgroundColor: colors.monthNameShadow,
        padding: 10,
        borderRadius: 12,
        marginTop: 20
    }
})