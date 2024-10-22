import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

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
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '400'
    },

    headerContainer: {
        marginHorizontal: 10
    },
    RecommendedForYouText: {
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaBold,
        fontSize: 20,
        lineHeight: 32,
        fontWeight: '600'
    },
    divider: {
        width: 15,
        height: 15,
        marginVertical: 5,
    },
    flatlstCulumnContainer: {
        justifyContent: 'space-between'
    },
    nameContainer: {
        marginTop: 10
    },
    tabContainer: {
        marginBottom: 20
    },
    audioImageStyle: {
        width: 60,
        height: 74
    },
})
