import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import labels from "../../Assets/Labels";
import QuantityComponent from "../QuantityComponent";
import { fonts } from "../../Assets";
import { PressableOpacity } from "react-native-pressable-opacity";
const CartItemCard = ({ item, index, pagination = true, showItemDescription = false, showFooter = true, showColor = true, showAuther = false, showDateStatus = false, onPress = () => { }, bottomRightQtyShow = false }) => {
    return (
        <PressableOpacity onPress={onPress} activeOpacity={0.8} key={index} style={style.container}>
            <Image source={item.image} style={style.imageStyle} />
            <View style={style.metaContainer}>
                <View style={style.titleContainer}>
                    <Text numberOfLines={2} style={style.title}>{item?.title}</Text>
                    {
                        showItemDescription ?
                            <View style={style.detailContainer}>
                                <View style={style.itemDescriptionFirstRow}>
                                    <Text style={style.itemDetailText}>{'Total: '+ item.price}</Text>
                                    <Text style={style.itemDetailText}>{'Status: '+ item.status}</Text>
                                </View>
                                <View style={style.itemDescriptionFirstRow}>
                                    <Text style={style.itemDetailText}>{'Qty: '+ item.quantity}</Text>
                                    <Text style={style.itemDetailText}>{'Date: '+ item.date}</Text>
                                </View>
                            </View>
                            :
                            null
                    }
                    {
                        showDateStatus ?
                            <View style={style.dateContainer}>
                                <Text style={style.dateText}>{'Date: 16 Nov 2024'}</Text>
                                <View style={style.divider} />
                                <Text style={style.dateText}>{'Status: Pending'}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        showColor ?
                            <View style={style.colorContainer}>
                                <Text style={style.priceLabel}>{labels.Color}:</Text>
                                <View style={style.paletteContainer}>
                                    <View style={style.colorPalet(colors.themeOrange)} />
                                </View>
                                <Text style={style.sizeText}>{'Size: Small'}</Text>
                            </View>
                            :
                            null
                    }
                    {
                        showAuther ?
                            <Text style={style.auther}>{'By Ember Dawn'}</Text>
                            :
                            null
                    }
                </View>
                {
                    showFooter ?
                        <View style={style.priceContainer}>
                            <Text style={style.priceTag}>{item?.price}</Text>
                            <View>
                                {
                                    pagination ?
                                        <QuantityComponent
                                            iconContainer={style.iconContainer}
                                            pagingContainer={style.pagingContainer}
                                            containerStyle={style.quantityContainerStyle}
                                            qtyTextStyle={style.qtyTextStyle}
                                        />
                                        :
                                        null
                                }
                                {
                                    bottomRightQtyShow ?
                                        <Text style={style.qtyText}>{'QTY: 1'}</Text>
                                        :
                                        null
                                }
                            </View>
                        </View>
                        :
                        null
                }
            </View>
        </PressableOpacity>
    )
}
export default CartItemCard;
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 9,
        borderRadius: 8,
        backgroundColor: colors.tabInActiveBackground
    },
    imageStyle: {
        width: 80,
        height: 100,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 18,
        color: colors.themeTitleOrangeShade,
        lineHeight: 22,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
    },
    titleContainer: {
        marginLeft: 10,
        flex: 1
        // flexDirection: "row",
        // justifyContent: 'space-between',
        // alignItems: 'center'
    },
    priceContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    auther: {
        fontSize: 12,
        fontFamily: fonts.SherikaMedium,
        lineHeight: 18,
        fontWeight: '300',
        color: colors.playerBackground
    },
    metaContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        paddingVertical: 5,
        justifyContent: 'space-between'
    },
    priceTag: {
        fontSize: 16,
        lineHeight: 18,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
        color: colors.themeOrange
    },
    colorPalet: (color) => ({
        backgroundColor: color,
        width: 20,
        height: 20,
        borderRadius: 5
    }),
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    priceLabel: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        fontFamily: fonts.SherikaBold,
        lineHeight: 32,
        fontWeight: '600'
    },
    sizeText: {
        color: colors.themeBorderColor,
        fontSize: 12,
        fontFamily: fonts.SherikaMedium,
        lineHeight: 16,
        fontWeight: '500'
    },
    iconContainer: {
        paddingHorizontal: 2,
        borderRadius: 6,
        paddingVertical: 2,
    },
    pagingContainer: {
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 6,
    },
    quantityContainerStyle: {
        paddingHorizontal: 8,
        borderWidth: 0
    },
    qtyTextStyle: {
        color: colors.white
    },
    qtyText: {
        fontSize: 16,
        color: colors.themeTitleOrangeShade,
        lineHeight: 18,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
    },
    dateText: {
        color: colors.playerBackground,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    },
    divider: {
        borderLeftWidth: 1,
        marginHorizontal: 10,
        height: 10,
        borderLeftColor: colors.playerBackground
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemDescriptionFirstRow: {
        flexDirection: 'row',
        // gap: 20
        justifyContent: 'space-between'
    },
    itemDetailText: {
        fontSize: 13,
        lineHeight: 17,
        color: colors.playerBackground,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    },
    detailContainer: {
        width: Dimensions.get('screen').width/1.8
    }
})