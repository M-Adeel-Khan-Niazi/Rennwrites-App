import { Image, StyleSheet, Text, View } from "react-native"
import { Assets } from "../../Assets"
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";

const ProfileDetailComp = ({
    image = Assets.dummyProfile,
    name = 'John Doe'
}) => {
    return(
        <View style={style.container}>
            <View style={style.imageContainer}>
            <Image source={image} style={style.imageStyle} />
            </View>
            <View style={style.nameContainer}>
                <Text style={style.nameText}>{name}</Text>
                <Text style={style.viewText}>{labels.ViewProfile}</Text>
            </View>
        </View>
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
        fontSize: 20,
        lineHeight: 32,
        color: colors.themeTitleOrangeShade
    },
    viewText: {
        fontSize: 12,
        lineHeight: 17,
        color: colors.themeTitleOrangeShade 
    },
    nameContainer: {
        marginLeft: 10
    }
})