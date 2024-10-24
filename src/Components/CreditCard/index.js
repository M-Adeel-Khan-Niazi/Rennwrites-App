import { Image, StyleSheet, Text, View } from "react-native"
import { SvgXml } from "react-native-svg"
import { selectedRadio, unSelectedRadio } from "../../Assets/svgs"
import colors from "../../Config/Colors"
import { fonts } from "../../Assets"
import labels from "../../Assets/Labels"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { PressableOpacity } from "react-native-pressable-opacity"
const CreditCardComp = ({
    text,
    index,
    onRemovePress = () => { },
    onEditPress = () => { }
}) => {
    return (
        <View key={index} style={styles.container}>
            <SvgXml
                xml={text?.checked ? selectedRadio : unSelectedRadio}
                width={30}
                height={30}
            />
            <Image source={text.image} style={styles.imageStyle} />
            <View>
                <Text style={styles.nameText}>{text?.name}</Text>
                <Text style={styles.numberText}>{text?.number}</Text>
            </View>
            <View style={styles.editContainer}>
                <PressableOpacity activeOpacity={0.8} onPress={onEditPress}>
                    <Text style={styles.editText}>{labels.Edit}</Text>
                </PressableOpacity>
                <View style={styles.editDivider} />
                <PressableOpacity activeOpacity={0.8} onPress={onRemovePress}>
                    <MaterialIcons name='delete' color={colors.themeOrange} size={20} />
                </PressableOpacity>
            </View>
        </View>
    )
}
export default CreditCardComp;
const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 8,
        gap: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: colors.tabInActiveBackground
    },
    imageStyle: {
        width: 70,
        height: 40,
        borderRadius: 8,
        resizeMode: 'contain'
    },
    nameText: {
        color: colors.themeTitleOrangeShade,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
    },
    numberText: {
        color: colors.themeBorderColor,
        fontSize: 13,
        lineHeight: 18,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
    },
    editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 10
    },
    editText: {
        fontSize: 13,
        lineHeight: 17,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        color: colors.themeOrange
    },
    editDivider: {
        borderLeftWidth: 1,
        marginHorizontal: 7,
        height: 15,
        borderLeftColor: colors.themeBorderColor
    },
})