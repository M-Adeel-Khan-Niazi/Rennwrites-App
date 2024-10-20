import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";
const {width} = Dimensions.get('screen')
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
        marginTop: 20
    },
    formContainer: {
        marginTop: 20
    },
    bottonContainer: {
        marginTop: 15
    },
    haveAccountContainer: {
        marginTop: 10
    },
    haveAccountText: {
        fontSize: RFValue(14),
        lineHeight: 20,
        // textAlign: 'center',
        color: colors.white
    },
    signUpText: {
        color: colors.themeOrange
    },
    pinCodeText: {
        color: colors.white,
        marginVertical: 10,
        fontSize: RFValue(17),
        lineHeight: 20
    },
    pinCodeContainer: {
        width: width/5,
        borderColor: colors.themeBorderColor
    },
})
