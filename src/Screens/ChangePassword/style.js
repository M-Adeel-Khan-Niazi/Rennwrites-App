import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    scrollContentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerContentContainer: {
        marginHorizontal: 20
    },
    titleStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
    feildLabel: {
        marginTop: 10,
        color: colors.themeTitleOrangeShade,
        fontSize: 13,
        lineHeight: 17,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    },
    buttonContainer: {
        marginTop: 20
    }
})