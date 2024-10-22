import { Image, StyleSheet, Text, View } from "react-native"
import { PressableOpacity } from "react-native-pressable-opacity"
import colors from "../../Config/Colors";
import { SvgXml } from "react-native-svg";
import { playIcon } from "../../Assets/svgs";
import { fonts } from "../../Assets";

const ListenBookCard = ({
    onPress = () => { },
    title = '',
    auther = '',
    image = null,
    index = 0
}) => {
    return (
        <PressableOpacity activeOpacity={0.8} onPress={onPress} key={index} style={styles.containerAudio}>
            <Image source={image} style={styles.audioImageStyle} />
            <View style={styles.metaContainer}>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={2} style={styles.bookTitle}>
                        {title}
                    </Text>
                    <Text style={styles.autherText}>
                        {auther}
                    </Text>
                </View>
                <PressableOpacity activeOpacity={0.8} style={styles.playIconContainer}>
                    <SvgXml
                        xml={playIcon}
                        width={12}
                        height={12}
                    />
                </PressableOpacity>
            </View>
        </PressableOpacity>
    )
}
export default ListenBookCard;
const styles = StyleSheet.create({
    containerAudio: {
        flexDirection: 'row',
        backgroundColor: colors.tabInActiveBackground,
        padding: 15,
        borderRadius: 8
    },
    audioImageStyle: {
        width: 60,
        height: 74
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    bookTitle: {
        fontSize: 16,
        
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaBold,
        lineHeight: 20,
        fontWeight: '600',

    },
    autherText: {
        fontSize: 12,
        color: colors.playerBackground,
        lineHeight: 18,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        opacity: 0.5
    },
    playIconContainer: {
        backgroundColor: colors.themeOrange,
        padding: 10,
        borderRadius: 100
    },
    nameContainer: {
        flex: 1
    }
})