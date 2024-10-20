import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabContainer: {
        marginBottom: 20
    },
    RecommendedForYouText: {
        color: colors.themeTitleOrangeShade,
        fontSize: RFValue(18),
        lineHeight: 26,
        fontWeight: '600'
    },
    bodyContainer: {
        marginVertical: 20
    },
    divider: {
        width: 15,
        height: 15,
        marginVertical: 5,
    },
    flatlstCulumnContainer: {
        gap: 20,
        justifyContent: 'space-between'
    },
})