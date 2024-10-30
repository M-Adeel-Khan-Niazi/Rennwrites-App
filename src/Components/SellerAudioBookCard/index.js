import { Image, StyleSheet, Text, View } from "react-native"
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PressableOpacity } from "react-native-pressable-opacity";
import { SvgXml } from "react-native-svg";
import { playIcon } from "../../Assets/svgs";

const SellerAudioBookCard = ({
    item = null,
    index = 0
}) => {
    return (
        <View key={index} style={styles.container}>
            <Image source={{ uri: item?.image }} style={styles.imageStyle} />
            <View style={styles.detailContainer}>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={2} style={styles.titleText}>{item?.title}</Text>
                    <View style={styles.autherContainer}>
                        <Text style={styles.autherText}>{item?.auther}</Text>
                        <View style={styles.autherDivider} />
                        <Text style={styles.autherText}>{item?.time}</Text>
                    </View>
                </View>
                <View style={styles.playContainer}>
                    <View style={styles.statusContainer}>
                        <Text style={styles.activeText}>{labels.Active}</Text>
                        <MaterialCommunityIcons name='chevron-down' style={{ opacity: 0.5 }} color={colors.themeTitleOrangeShade} size={18} />
                    </View>
                    <PressableOpacity activeOpacity={0.8} style={styles.playIconContainer}>
                        <SvgXml
                            xml={playIcon}
                            width={12}
                            height={12}
                        />
                    </PressableOpacity>
                    {/* <Text>{item?.title}</Text> */}
                </View>
            </View>
        </View>
    )
}
export default SellerAudioBookCard;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: colors.tabInActiveBackground,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        width: 60,
        height: 70,
        resizeMode: 'cover'
    },
    titleText: {
        fontSize: 16,
        lineHeight: 20,
        color: colors.themeTitleOrangeShade,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
    statusContainer: {
        backgroundColor: colors.themeOrange,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 16
    },
    activeText: {
        fontSize: 12,
        lineHeight: 18,
        opacity: 0.5,
        color: colors.themeTitleOrangeShade,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    },
    playIconContainer: {
        backgroundColor: colors.themeOrange,
        padding: 10,
        borderRadius: 100
    },
    nameContainer: {
        flex: 1,
        gap: 5
        // alignItems: 'flex-end'
    },
    playContainer: {
        alignItems: 'flex-end',
        gap: 10
    },
    autherText: {
        fontSize: 12,
        lineHeight: 18,
        color: colors.playerBackground,
        opacity: 0.5,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    },
    autherContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    autherDivider: {
        borderLeftColor: colors.playerBackground,
        borderLeftWidth: 1,
        marginHorizontal: 10,
        height: 12,
        opacity: 0.5
    }
})