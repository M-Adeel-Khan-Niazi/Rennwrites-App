import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        marginHorizontal: 20
    },
    scrollContentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    bodyContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: colors.subscriptionBoxBackground
    },
    subscriptionBoxTitle: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
        color: colors.themeTitleOrangeShade
    },
    checksText: {
        fontSize: 12,
        lineHeight: 25,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        color: colors.themeTitleOrangeShade
    },
    priceTextStyle: {
        color: colors.themeOrange,
        fontSize: 15,
        lineHeight: 22,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
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
})