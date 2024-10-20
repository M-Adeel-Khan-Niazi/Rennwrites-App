import { Image, StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import labels from "../../Assets/Labels";
import QuantityComponent from "../QuantityComponent";
import { RFValue } from "react-native-responsive-fontsize";

const CartItemCard = ({ item, index }) => {
    return (
        <View key={index} style={style.container}>
            <Image source={item.image} style={style.imageStyle} />
            <View style={style.metaContainer}>
                <View style={style.titleContainer}>
                    <Text style={style.title}>{item?.title}</Text>
                    {
                        index ?
                            <View style={style.colorContainer}>
                                <Text style={style.priceLabel}>{labels.Color}:</Text>
                                <View style={style.paletteContainer}>
                                    <View style={style.colorPalet(colors.themeOrange)} />
                                </View>
                                <Text style={style.sizeText}>{'Size: Small'}</Text>

                            </View>
                            :
                            <Text style={style.auther}>{'By Ember Dawn'}</Text>
                    }
                </View>
                <View style={style.priceContainer}>
                    <Text style={style.priceTag}>{item?.price}</Text>
                    <View>
                        <QuantityComponent
                            iconContainer={style.iconContainer}
                            pagingContainer={style.pagingContainer}
                            containerStyle={style.quantityContainerStyle}
                            qtyTextStyle={style.qtyTextStyle}
                        />
                    </View>
                </View>
            </View>
        </View>
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
        width: 60,
        height: 74,
        resizeMode: 'cover'
    },
    title: {
        fontSize: RFValue(14),
        color: colors.themeTitleOrangeShade,
        lineHeight: 19,
        fontWeight: '600'
    },
    titleContainer: {
        marginLeft: 10,

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
        fontSize: RFValue(12),
        lineHeight: 18,
        fontWeight: '300',
        color: colors.playerBackground
    },
    metaContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        flexGrow: 1,
        paddingVertical: 5,
        justifyContent: 'space-between'
    },
    priceTag: {
        fontSize: RFValue(14),
        lineHeight: 18,
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
        fontSize: RFValue(16),
        lineHeight: 32,
        fontWeight: '600'
    },
    sizeText: {
        color: colors.themeBorderColor,
        fontSize: RFValue(12),
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
    }
})