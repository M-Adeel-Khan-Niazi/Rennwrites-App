import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../Config/Colors';
import { Assets } from '../../Assets';
const Header = ({
    onBack = () => { },
}) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={onBack} style={style.container}>
                <Image source={Assets.backIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;
const style = StyleSheet.create({
    container: {
        // backgroundColor: colors.themeOrange,
        // borderRadius: 16,
        // paddingVertical: 18
    },
    labelStyle: {
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
        color: colors.white

    }
})