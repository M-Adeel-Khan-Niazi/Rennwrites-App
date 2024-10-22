import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { PressableOpacity } from "react-native-pressable-opacity"
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

const ReadBookCard = ({
    onPress = () => {},
    title = '',
    auther = '',
    image = null,
    index = 0
}) => {
    return(
        <PressableOpacity onPress={onPress} key={index} activeOpacity={0.8} style={styles.itemContainer}>
                <Image source={image} style={styles.imageStyle} />
                <View style={styles.nameContainer}>
                    <Text style={styles.bookTitle}>{title}</Text>
                    <Text style={styles.autherText}>{auther}</Text>
                </View>
            </PressableOpacity>
    )
}
export default ReadBookCard;
const styles = StyleSheet.create({
    itemContainer: {
        // flexDirection: 'row'
    },
    imageStyle: {
        width: Dimensions.get('screen').width / 2.2,
        height: Dimensions.get('screen').width / 1.8
    },
    nameContainer: {
        marginTop: 10
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
        fontFamily: fonts.SherikaMedium,
        lineHeight: 18,
        fontWeight: '600',
        opacity: 0.5
    },
})