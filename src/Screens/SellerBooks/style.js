import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        marginHorizontal: 20
    },
    contentContainerStyle: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    divider: {
        marginVertical: 5
    },
    buttonContainer: {
        backgroundColor: colors.white,
        marginTop: 20,
        borderRadius: 16,
        paddingVertical: 12
    },
    buttonLabel: {
        color: colors.black
    },
    seperation: {
        borderBottomWidth: 1,
        borderBottomColor: colors.themeBorderColor,
        marginVertical: 15,
        opacity: 0.5
    }
})