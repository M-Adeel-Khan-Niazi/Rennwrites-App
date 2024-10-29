import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import labels from "../../Assets/Labels";
import { fonts } from "../../Assets";
import colors from "../../Config/Colors";

const TopSellerCard = ({
    data = null
}) => {
    console.log(data)
    return (
        <View style={styles.container}>
            <Image source={{ uri: data?.image }} style={styles.audioImageStyle} />
            <View style={styles.metaContainer}>
                <Text numberOfLines={1} style={styles.titleText}>{data?.title}</Text>
                <Text style={styles.autherText}>{data?.auther}</Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.priceText}>{data?.price}</Text>
                    {
                        data?.topSeller ?
                        <View style={styles.topSellerContainer}>
                            <Text style={styles.topSellerText}>{labels.TopSeller}</Text>
                            </View>
                            :
                            null
                    }

                </View>
            </View>
        </View>
    )
}
export default TopSellerCard;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        padding: 15,
        backgroundColor: colors.tabInActiveBackground,
        borderRadius: 8,
        marginTop: 5
    },
    metaContainer: {
        justifyContent: 'space-between'
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    audioImageStyle: {
        width: 60,
        height: 74,
        resizeMode: 'cover',
        borderRadius: 9,
        
    },
    titleText: {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: '600',
        width: Dimensions.get('screen').width/1.5,
        fontFamily: fonts.SherikaBold,
        color: colors.themeTitleOrangeShade
    },
    autherText: {
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: colors.playerBackground
    },
    priceText: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold,
        color: colors.themeOrange
    },
    topSellerContainer: {
        backgroundColor: colors.themeOrange,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 100
    },
    topSellerText: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium,
        color: colors.themeTitleOrangeShade,
        opacity: 0.5
    }
})