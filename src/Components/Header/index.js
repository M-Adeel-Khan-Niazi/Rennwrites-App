import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../Config/Colors';
import { Assets } from '../../Assets';
import { SvgXml } from 'react-native-svg';
import { appLogoWhite, burgerIcon, cartIcon, searchIcon } from '../../Assets/svgs';
const Header = ({
    onBack = () => { },
    home = false
}) => {
    return (
        <View>
            {
                home ?
                    <View style={style.headerContainer}>
                        <SvgXml
                            xml={appLogoWhite}
                            width={180}
                        />
                        <View style={style.rightIconsContainer}>

                        <View style={style.iconContainer}>
                            <SvgXml
                                xml={searchIcon}
                                width={20}
                                height={20}
                            />
                        </View>
                        <View style={[style.iconContainer, style.cartContainer]}>
                            <SvgXml
                                xml={cartIcon}
                                width={20}
                                height={20}
                            />
                            <View style={style.dot} />
                        </View>
                        <View style={style.iconContainer}>
                            <SvgXml
                                xml={burgerIcon}
                                width={20}
                                height={20}
                            />
                        </View>
                        </View>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={0.8} onPress={onBack} style={style.container}>
                        <Image source={Assets.backIcon} />
                    </TouchableOpacity>
            }
        </View>
    )
}

export default Header;
const style = StyleSheet.create({
    container: {
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
    }
})