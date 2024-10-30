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
    contentContainerStyle: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    titleText: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
    descText: {
        color: colors.themeTitleOrangeShade,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        marginTop: 5
    },
    buttonContainer: {
        marginTop: 20
    }
})