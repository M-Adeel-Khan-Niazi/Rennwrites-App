import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabContainer: {
        marginBottom: 20
    },
    RecommendedForYouText: {
        color: colors.themeTitleOrangeShade,

        fontFamily: fonts.SherikaBold,
        fontSize: 20,
        lineHeight: 32,
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