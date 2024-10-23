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
    },
    namesContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    feildLabel: {
        marginTop: 10,
        color: colors.themeTitleOrangeShade,
        fontSize: 13,
        lineHeight: 17,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
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
    }
})