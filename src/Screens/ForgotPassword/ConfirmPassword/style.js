import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Config/Colors";
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
        marginTop: 20
    },
    formContainer: {
        marginTop: 20
    },
    bottonContainer: {
        marginTop: 15
    }
})
