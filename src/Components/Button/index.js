import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../Config/Colors';
import { fonts } from '../../Assets';
const Button = ({
    label = '',
    onPress = () => {},
    containerStyle = {},
    labelStyle = {}
}) => {
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[style.container, containerStyle]}>
            <Text style={[style.labelStyle,labelStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button;
const style = StyleSheet.create({
    container: {
        backgroundColor: colors.themeOrange,
        borderRadius: 16,
        paddingVertical: 18
    },
    labelStyle: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '500',
        textAlign: 'center',
        color: colors.white

    }
})