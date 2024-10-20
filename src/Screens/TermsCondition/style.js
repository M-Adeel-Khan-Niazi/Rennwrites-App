import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        marginHorizontal: 10
    },
    description: {
        color: colors.themeTitleOrangeShade,
        fontSize: RFValue(14),
        lineHeight: 17,
        fontWeight: '400'
    },
    descContainer: {
        marginTop: 20
    }
})
