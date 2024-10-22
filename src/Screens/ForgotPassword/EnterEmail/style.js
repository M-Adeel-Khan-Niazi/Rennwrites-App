import { StyleSheet } from "react-native";
import colors from "../../../Config/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.black
    },
    title: {
        color: colors.white,
        fontSize: 32,
        fontWeight: '600',
        lineHeight: 40
    },
    description: {
        color: colors.white,
        marginVertical: 10,
        fontSize: 14,
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
