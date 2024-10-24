import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
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
    scrollContentContainerStyle: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    buttonContainer: {
        marginTop: 15
    }
})