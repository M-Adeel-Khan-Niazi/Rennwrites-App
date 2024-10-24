import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        flex: 1,
        paddingVertical: 20,
        marginHorizontal: 20
    },
    namesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    firstNameContainer: {
        flex: 1
    },
    lastNameContainer: {
        flex: 1
    },
    titleText: {
        fontSize: 20,
        lineHeight: 26,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
        color: colors.themeTitleOrangeShade
    },
    headerContainer: {
        marginHorizontal: 20
    },
    phoneInputText: {
        color: colors.white
    },
    phoneInputStyle: {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: fonts.SherikaMedium,
        
        borderWidth: 1,
        borderColor: colors.themeBorderColor,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
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
    billingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})