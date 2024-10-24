import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContentContainer: {
        marginHorizontal: 20
    },
    scrollContentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    bodyContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: colors.subscriptionBoxBackground
    },
    renewalDateText: {
        color: colors.themeTitleOrangeShade,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    },
    renewalDateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: colors.white,
        paddingVertical: 15
    },
    buttonLabelStyle: {
        color: colors.black
    }
})