import { Image, StyleSheet, Text, View } from "react-native"
import { Assets, fonts } from "../../Assets"
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";
import { PressableOpacity } from "react-native-pressable-opacity";

const ProfileDetailComp = ({
    image = Assets.dummyProfile,
    name = 'John Doe',
    onPress = () => {}
}) => {
    return (
        <PressableOpacity onPress={onPress} activeOpacity={0.8} style={style.container}>
            <View style={style.imageContainer}>
                <Image source={image} style={style.imageStyle} />
            </View>
            <View style={style.nameContainer}>
                <Text style={style.nameText}>{name}</Text>
                <Text style={style.viewText}>{labels.ViewProfile}</Text>
            </View>
        </PressableOpacity>
    )
}
export default ProfileDetailComp;
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: colors.themeOrange,
        borderRadius: 100
    },
    imageStyle: {
        resizeMode: 'contain',
        width: 55,
        height: 55,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.black,

    },
    nameText: {
        fontFamily: fonts.SherikaBold,
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '500',
        color: colors.themeTitleOrangeShade
    },
    viewText: {
        fontSize: 12,
        fontFamily: fonts.SherikaMedium,
        lineHeight: 18,
        color: colors.themeTitleOrangeShade
    },
    nameContainer: {
        marginLeft: 10
    }
})