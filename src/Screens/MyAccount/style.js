import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContentContainer: {
        marginHorizontal: 20
    },
    scrollContentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    titleStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    }
})