import { FlatList, StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";
import labels from "../../Assets/Labels";
import { orderTable } from "../../Assets/MockData";
import Button from "../Button";

const ShopOrderComp = ({
    title = labels.RecentOrders,
    data = orderTable,
    showTitle = true,
    contentContainerStyle = {},
    showFooter = false
}) => {
    const HeaderComp = () => {
        return (
            <>
                <View style={styles.headerContainer}>
                    <Text style={styles.idHeaderText}>{labels.OrderID}</Text>
                    <Text style={styles.qtyHeaderText}>{labels.Qty}</Text>
                    <Text style={styles.priceHeaderText}>{labels.Price}</Text>
                    <Text style={styles.statusHeaderText}>{labels.Status}</Text>
                </View>
                <View style={styles.divider} />
            </>
        )
    }
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.headerContainer}>
                <Text style={styles.itemIdHeaderText}>{labels.OrderID}: {item?.id}</Text>
                <Text style={styles.itemQtyHeaderText}>{item?.qty}</Text>
                <Text style={styles.itemPriceHeaderText}>{item?.price}</Text>
                <Text style={styles.itemStatusHeaderText}>{item?.status}</Text>
            </View>
        )
    }
    const footerComp = () => {
        return(
            <View>
                <Button 
                containerStyle={styles.buttonContainer}
                label={labels.ViewAll}
                labelStyle={styles.buttonLabel}
                />
            </View>
        )
    }
    return (
        <View style={[styles.container, contentContainerStyle]}>
            {
                showTitle ?
                <Text style={styles.title}>{title}</Text>
                :
                null
            }
            <FlatList
                data={data}
                scrollEnabled={false}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContentContainer}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                ListHeaderComponent={HeaderComp}
                ListFooterComponent={showFooter ? footerComp : null}
            />
        </View>
    )
}
export default ShopOrderComp;
const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
    idHeaderText: {
        fontSize: 12,
        lineHeight: 18,
        flex: 1,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.playerBackground,
        opacity: 0.5
    },
    qtyHeaderText: {
        fontSize: 12,
        flex: 0.4,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.playerBackground,
        textAlign: 'center',
        opacity: 0.5
    },
    priceHeaderText: {
        fontSize: 12,
        lineHeight: 18,
        flex: 0.5,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.playerBackground,
        textAlign: 'center',
        opacity: 0.5
    },
    statusHeaderText: {
        fontSize: 12,
        lineHeight: 18,
        flex: 0.5,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.playerBackground,
        textAlign: 'center',
        opacity: 0.5
    },
    itemIdHeaderText: {
        fontSize: 13,
        lineHeight: 18,
        flex: 1,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.themeTitleOrangeShade,
    },
    itemQtyHeaderText: {
        fontSize: 13,
        flex: 0.4,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.themeTitleOrangeShade,
        textAlign: 'center',
    },
    itemPriceHeaderText: {
        fontSize: 13,
        lineHeight: 18,
        flex: 0.5,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.themeOrange,
        textAlign: 'center',
    },
    itemStatusHeaderText: {
        fontSize: 13,
        lineHeight: 18,
        flex: 0.5,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.themeTitleOrangeShade,
        textAlign: 'center',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.monthNameBackground,
        marginVertical: 15
    },
    flatListContentContainer: {
        backgroundColor: colors.tabInActiveBackground,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10
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
})