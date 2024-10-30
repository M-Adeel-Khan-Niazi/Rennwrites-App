import { Image, StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";
import labels from "../../Assets/Labels";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const SellerBookCard = ({
    item = null,
    index = 0
}) => {
    return (
        <View key={index} style={styles.container} >
            <Image source={{ uri: item?.image }} style={styles.imageStyle} />
            <View style={styles.metaContainer}>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.titleText}>{item?.title}</Text>
                    <Text style={styles.orderText}>{item?.OrderID}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.statusContainer}>
                        <Text style={styles.activeText}>{labels.Active}</Text>
                    <MaterialCommunityIcons name='chevron-down' style={{opacity: 0.5}} color={colors.themeTitleOrangeShade} size={18} />

                    </View>
                    <Text style={styles.priceText}>{labels.UnitPrice}: {item?.price}</Text>

                </View>
            </View>
        </View>
    )
}
export default SellerBookCard;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: colors.tabInActiveBackground,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8
    },
    imageStyle: {
        resizeMode: 'cover',
        width: 45,
        height: 50,
        borderRadius: 8
    },
    titleText: {
        fontSize: 13,
        lineHeight: 20,
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    },
    orderText: {
        fontSize: 13,
        lineHeight: 20,
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        opacity: 0.5
    },
    priceText: {
        fontSize: 13,
        lineHeight: 20,
        color: colors.themeOrange,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        textAlign: 'right'
    },
    statusContainer: {
        backgroundColor: colors.themeOrange,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 16
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    nameContainer: {
        flex: 1
    },
    priceContainer: {
        alignItems: 'flex-end'
    },
    activeText: {
        fontSize: 12,
        lineHeight: 18,
        opacity: 0.5,
        color: colors.themeTitleOrangeShade,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    }
})