import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Config/Colors";
const {width} = Dimensions.get('screen')
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.black
    },
    title: {
        color: colors.white,
        fontSize: 40,
        lineHeight: 40
    },
    description: {
        color: colors.white,
        marginVertical: 10,
        fontSize: 14,
        lineHeight: 17
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
        fontSize: 14,
        // textAlign: 'center',
        color: colors.white
    },
    signUpText: {
        color: colors.themeOrange
    },
    pinCodeText: {
        color: colors.white,
        marginVertical: 10,
        fontSize: 17,
        lineHeight: 17
    },
    pinCodeContainer: {
        width: width/5,
        borderColor: colors.themeBorderColor
    },
})
