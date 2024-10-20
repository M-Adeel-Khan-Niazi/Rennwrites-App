import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        flex: 1,
        marginHorizontal: 20,
        paddingVertical: 20,

    },
    headerContainer: {
        marginHorizontal: 20
    },
    titleText: {
        fontSize: RFValue(18),
        lineHeight: 26,
        fontWeight: '600',
        color: colors.themeTitleOrangeShade
    },
    namesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    firstNameContainer: {
        flex: 1
    },
    lastNameContainer: {
        flex: 1
    },
    buttonContainer: {
        marginTop: 20
    },
    orderSummary: {
        color: colors.themeTitleOrangeShade,
        fontSize: RFValue(18),
        lineHeight: 26
    },
    arrowContainer: {
        backgroundColor: colors.tabInActiveBackground,
        borderRadius: 100,
        padding: 3
    },
    orderSummaryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    orderDetailContainer: {
        backgroundColor: colors.tabInActiveBackground,
        borderRadius: 8,
        padding: 15
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    itemNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    quantityText: {
        fontSize: RFValue(14),
        lineHeight: 17,
        fontWeight: '400',
        color: colors.themeBorderColor
    },
    priceText: {
        fontSize: RFValue(14),
        fontWeight: '400',
        lineHeight: 17,
        color: colors.themeBorderColor
        
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalAmountText: {
        fontSize: RFValue(14),
        lineHeight: 20,
        fontWeight: '500',
        color: colors.themeTitleOrangeShade
    },
    orderSummaryName: {
        fontSize: RFValue(14),
        lineHeight: 20,
        fontWeight: '500',
        color: colors.themeTitleOrangeShade
    },
    totalPriceText: {
        fontSize: RFValue(14),
        lineHeight: 20,
        fontWeight: '500',
        color: colors.themeOrange
    },
    divider: {
        borderBottomWidth: 1,
        marginVertical: 15,
        borderBottomColor: colors.themeBorderColor
    }
})