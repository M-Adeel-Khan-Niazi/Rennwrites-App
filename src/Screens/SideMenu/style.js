import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        paddingHorizontal: 20,
        backgroundColor: colors.themeOrange,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        paddingBottom: 15
    },
    bodyContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20
    },
    itemName: {
        marginLeft: 10,
        fontFamily: fonts.SherikaMedium,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        color: colors.menuItemTextColor
    },
    menuItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        borderBottomWidth: 1,
        borderBlockColor: colors.tabInActiveBackground,
        marginLeft: 60,
        marginVertical: 5
    },
    listContainer: {
        marginTop: 20
    }
})