import { Image, StyleSheet, Text, View } from "react-native"
import labels from "../../Assets/Labels";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";
const InventoryCard = ({
    index = 0,
    item = null
}) => {
    return (
        <View key={index} style={style.container}>
            <View style={style.topContainer}>
                <Text style={style.orderNumberText}>{labels.OrderItem}: {item?.orderID}</Text>
                <View style={style.activeContainer}>
                    <Text style={style.activeText}>{labels.Active}</Text>
                    <MaterialCommunityIcons name='chevron-down' style={{opacity: 0.5}} color={colors.themeTitleOrangeShade} size={18} />
                </View>
            </View>
            <View style={style.imageContainer}>
                <Image source={item?.image} style={style.imageStyle} />
                <View style={style.metaContainer}>
                    <View>
                        <Text style={style.nameText}>{item?.name}</Text>
                        <Text style={style.priceText}>{labels.UnitPrice}: {item?.price}</Text>
                    </View>
                    <View>
                        <Text style={style.soldText}>{labels.ItemsSold}: {item?.sold}</Text>
                        <Text style={style.soldText}>{labels.QtyAvailable}: {item?.qtyAvailable}</Text>

                    </View>
                </View>
            </View>
        </View>
    )
}
export default InventoryCard;
const style = StyleSheet.create({
    container: {
        backgroundColor: colors.tabInActiveBackground,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    orderNumberText: {
        fontSize: 12,
        lineHeight: 18,
        color: colors.playerBackground,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        opacity: 0.5
    },
    activeContainer: {
        backgroundColor: colors.themeOrange,
        flexDirection: 'row',
        gap: 5,
        paddingHorizontal: 6,
        borderRadius: 100,
        paddingVertical: 2,
    },
    activeText: {
        color: colors.themeTitleOrangeShade,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.SherikaMedium,
        opacity: 0.5,
        fontWeight: '400'
    },
    imageStyle: {
        resizeMode: 'cover',
        width: 50,
        height: 50,
        borderRadius: 8
    },
    imageContainer: {
        flexDirection: 'row',
        gap: 10
        // flex: 1
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    nameText: {
        fontSize: 13,
        lineHeight: 20,
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    },
    priceText: {
        fontSize: 13,
        lineHeight: 20,
        color: colors.themeOrange,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    },
    soldText: {
        fontSize: 13,
        lineHeight: 20,
        color: colors.playerBackground,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        opacity: 0.5,
        textAlign: 'right'
    }
})