import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import { PressableOpacity } from "react-native-pressable-opacity";
import { fonts } from "../../Assets";

const ShopCard = ({
    image = null,
    title = '',
    price = '',
    onPressCard = () => {}
}) => {
    return (
        <PressableOpacity onPress={onPressCard} activeOpacity={0.8} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.imageStyle} />
            </View>
            <Text numberOfLines={2} style={styles.title}>
            {title}
            </Text>
            <View style={styles.priceContainer}>
                <Text style={styles.priceStyle}>{price}</Text>
                <View style={styles.paletteContainer}>
                    <View style={styles.colorPalet(colors.themeOrange)} />
                    <View style={styles.colorPalet(colors.grayColorPalette)} />
                    <View style={styles.colorPalet(colors.white)} />
                </View>
            </View>
        </PressableOpacity>
    )
}
export default ShopCard;
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 2.2,
    },
    imageContainer: {
        marginBottom: 10
    },
    imageStyle: {
        resizeMode: 'cover',
        borderRadius: 8,
        width: Dimensions.get('screen').width / 2.2,
        height: Dimensions.get('screen').width / 1.5
    },
    title: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 20,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
    },
    priceStyle: {
        color: colors.themeOrange,
        fontFamily: fonts.SherikaBold,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600'    
    },
    priceContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorPalet: (color) => ({
        backgroundColor: color,
        width: 20,
        height: 20,
        borderRadius: 5
    }),
    paletteContainer: {
        flexDirection: 'row',
        gap: 10
    }
})