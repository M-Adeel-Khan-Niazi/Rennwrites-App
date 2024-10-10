import { Dimensions, StyleSheet } from "react-native";
import colors from "../../Config/Colors";

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
        // marginHorizontal: 20,
        marginTop: 20
    },
    formContainer: {
        marginTop: 20
    },
    namesContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        marginTop: 15
    },
    haveAccountContainer: {
        marginTop: 10
    },
    haveAccountText: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.white
    },
    signUpText: {
        color: colors.themeOrange
    },
    phoneInputText: {
        color: colors.white
    },
    phoneInputStyle: {
        fontSize: 14,
        lineHeight: 17,
        

        borderWidth: 1,
        borderColor: colors.themeBorderColor,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 16,
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
    }
})
