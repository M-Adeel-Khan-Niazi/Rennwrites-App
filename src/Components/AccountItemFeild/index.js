import { Image, StyleSheet, Text, View } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors";
import { Assets, fonts } from "../../Assets";
import { PressableOpacity } from "react-native-pressable-opacity";
import { SvgXml } from "react-native-svg";
import { logoutProfile } from "../../Assets/svgs";
const AccountItemFeild = ({
    title = '',
    desc = '',
    onPress = () => { },
    cardImage = null,
    logOutIcon = false,
    titleDesc = true,
    rightArrowShow = true,
    rightLabel = '',
    onlydesc = false
}) => {
    return (
        <PressableOpacity activeOpacity={0.8} onPress={onPress} style={style.container}>
            {
                logOutIcon ?
                    <View style={style.logoutContainer}>
                        <SvgXml xml={logoutProfile} />
                        <Text style={style.logOutTitleStyle}>{title}</Text>
                    </View>
                    :
                    null
            }
            {
                titleDesc ?
                    <View>
                        <Text style={style.titleStyle}>{title}</Text>
                        {
                            onlydesc ?
                            null
                            :
                        <Text numberOfLines={1} style={style.descStyle}>{desc}</Text>
                        }
                    </View>
                    :
                    null
            }
            {
                cardImage ?
                    <Image source={cardImage} style={style.cardImageStyle} />
                    :
                    null
            }
            {
                rightArrowShow ?
                    <MaterialCommunityIcons name='chevron-right' color={colors.themeTitleOrangeShade} size={30} />
                    :
                    null
            }
            {
                rightLabel ?
                <Text style={style.rightLabelText}>{rightLabel}</Text>
                :
                null
            }
        </PressableOpacity>
    )
}
export default AccountItemFeild;
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.tabInActiveBackground,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10
    },
    titleStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 14,
        lineHeight: 32,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '500'
    },
    logOutTitleStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 14,
        lineHeight: 32,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '500',

    },
    descStyle: {
        color: colors.themeBorderColor,
        fontSize: 14,
        lineHeight: 18,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    },
    cardImageStyle: {
        width: 50,
        height: 30,
        borderRadius: 7,
        resizeMode: 'contain'
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    rightLabelText: {
        color: colors.themeBorderColor,
        fontSize: 14,
        lineHeight: 22,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    }
})