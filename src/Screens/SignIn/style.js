import { Dimensions, StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.black
    },
    title: {
        color: colors.white,
        fontSize: RFValue(32),
        lineHeight: 40
    },
    description: {
        color: colors.white,
        marginVertical: 10,
        fontSize: RFValue(14),
        lineHeight: 20
    },
    bodyContainer: {
        // marginHorizontal: 20,
        marginTop: 20
    },
    formContainer: {
        marginTop: 20
    },
    rememberMe: {
        color: colors.white
    },
    forgetText: {
        color: colors.white
    },
    forgetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    haveAccountText: {
        fontSize: RFValue(14),
        lineHeight: 20,
        textAlign: 'center',
        color: colors.white
    },
    signUpText: {
        color: colors.themeOrange
    },
    haveAccountContainer: {
        marginTop: 10
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
