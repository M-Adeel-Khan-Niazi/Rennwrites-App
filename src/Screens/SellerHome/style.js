import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    headerContainer: {
        paddingRight: 20,
        paddingBottom: 10,
        backgroundColor: colors.themeOrange,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16
    },
    profileNameTextStyle: {
        color: colors.white
    },
    myAccountLabelStyle: {
        color: colors.white
    },
    contentContainerStyle: {
        paddingHorizontal: 20,
        paddingVertical: 20
    }
})