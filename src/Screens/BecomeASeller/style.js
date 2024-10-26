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
        fontSize: 32,
        lineHeight: 38,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
    scrollContentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    descText: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.themeTitleOrangeShade
    },
    namesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottonContainerStyle: {
        marginTop: 20
    },
    flagImage: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: colors.themeBorderColor,
        paddingHorizontal: 5
    },
    phoneInputText: {
        color: colors.white
    },
    phoneInputStyle: {
        fontSize: 14,
        lineHeight: 20,
        borderWidth: 1,
        borderColor: colors.themeBorderColor,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20
    },
    orangeColor: {
        color: colors.themeOrange
    }
})