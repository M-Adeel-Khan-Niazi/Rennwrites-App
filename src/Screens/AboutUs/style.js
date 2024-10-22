import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerContainer: {
        marginHorizontal: 20
    },
    titleStyle: {
        fontSize: 20,
        color: colors.themeOrange,
        lineHeight: 26,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
    },
    description: {
        fontSize: 14,
        color: colors.themeTitleOrangeShade,
        lineHeight: 17,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    }
})