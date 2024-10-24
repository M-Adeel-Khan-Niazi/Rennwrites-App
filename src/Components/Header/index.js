import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../Config/Colors';
import { Assets, fonts } from '../../Assets';
import { SvgXml } from 'react-native-svg';
import { appLogoWhite, burgerIcon, cartIcon, searchIcon } from '../../Assets/svgs';
import { PressableOpacity } from 'react-native-pressable-opacity';
import labels from '../../Assets/Labels';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Header = ({
    onBack = () => { },
    home = false,
    onMenuPress = () => { },
    homeBackShow = false,
    title = '',
    contentContainerStyle = {},
    onCartPress = () => { },
    showProfile = false,
    profileName = '',
    profileNameBottomLabel = labels.MyAccount,
    editIconShow = false
}) => {
    return (
        <View style={contentContainerStyle}>
            {
                home ?
                    <View style={style.headerContainer}>
                        <SvgXml
                            xml={appLogoWhite}
                            width={180}
                        />
                        {
                            homeBackShow ?
                                <PressableOpacity onPress={onBack} activeOpacity={0.8} style={style.backButtonContainer}>
                                    <MaterialCommunityIcons name='chevron-left' color={colors.white} size={20} />
                                    <Text style={style.backText}>{labels.Back}</Text>
                                </PressableOpacity>
                                :
                                <View style={style.rightIconsContainer}>
                                    <View style={style.iconContainer}>
                                        <SvgXml
                                            xml={searchIcon}
                                            width={20}
                                            height={20}
                                        />
                                    </View>
                                    <PressableOpacity activeOpacity={0.8} onPress={onCartPress} style={[style.iconContainer, style.cartContainer]}>
                                        <SvgXml
                                            xml={cartIcon}
                                            width={20}
                                            height={20}
                                        />
                                        <View style={style.dot} />
                                    </PressableOpacity>
                                    <PressableOpacity onPress={onMenuPress} activeOpacity={0.8} style={style.iconContainer}>
                                        <SvgXml
                                            xml={burgerIcon}
                                            width={20}
                                            height={20}
                                        />
                                    </PressableOpacity>
                                </View>
                        }
                    </View>
                    :
                    <TouchableOpacity activeOpacity={0.8} onPress={onBack} style={style.container}>
                        <Image source={Assets.backIcon} style={style.backIcon} />
                        {
                            showProfile ?
                                <View style={style.profileContainer}>
                                    <View style={style.imageContainer}>
                                        <Image source={Assets.dummyProfile} style={style.profileImage} />
                                        {
                                            editIconShow ?
                                            <View style={style.penContainer}>
                                                <MaterialIcons name='edit' size={15} color={colors.black} />
                                                </View>
                                            :
                                            null
                                        }
                                    </View>
                                    <View>
                                        <Text style={style.profileNameText}>{profileName}</Text>
                                        <Text style={style.myAccountLabel}>{profileNameBottomLabel}</Text>
                                    </View>
                                </View>
                                :
                                <Text style={style.titleText}>{title}</Text>

                        }
                    </TouchableOpacity>
            }
        </View>
    )
}

export default Header;
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
        color: colors.white

    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.iconDarkBackground,
        borderRadius: 100,
        width: 40,
        height: 40,
        marginLeft: 10
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 20
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartContainer: {
        position: 'relative'
    },
    dot: {
        position: 'absolute',
        backgroundColor: colors.notifBedgeColor,
        width: 10,
        height: 10,
        borderRadius: 100,
        top: 5,
        right: 6
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    backText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: fonts.SherikaMedium,
        lineHeight: 17,
        fontWeight: '500'
    },
    titleText: {
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaBold,
        fontSize: 26,
        lineHeight: 32,
        fontWeight: '600',
        marginLeft: 10
    },
    backIcon: {
        resizeMode: 'contain',
        width: 35,
        height: 35
    },
    profileImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.black,
    },
    imageContainer: {
        borderWidth: 1,
        marginRight: 10,
        borderColor: colors.themeOrange,
        borderRadius: 100
    },
    profileContainer: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    myAccountLabel: {
        fontSize: 14,
        lineHeight: 18,
        color: colors.themeOrange,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '500'
    },
    profileNameText: {
        fontSize: 26,
        lineHeight: 32,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
        color: colors.themeTitleOrangeShade
    },
    penContainer: {
        backgroundColor: colors.themeOrange,
        position: 'absolute',
        borderRadius: 100,
        padding: 5,
        bottom: -5,
        right: -3
    }
})