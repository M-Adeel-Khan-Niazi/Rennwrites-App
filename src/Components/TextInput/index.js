import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../Config/Colors";
import { Assets } from "../../Assets";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RFValue } from "react-native-responsive-fontsize";
const TextInputComp = ({
    placeholder = '',
    showEye = false,
    showPassword = false,
    onShowEye = () => { },
    keyboardType = 'default'
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor={colors.themeBorderColor}
                style={styles.textStyle}
                secureTextEntry={showPassword}
            />
            {
                showEye ?
                    <TouchableOpacity onPress={onShowEye} activeOpacity={0.8} >
                        <MaterialCommunityIcons name={!showPassword ? "eye-off" : "eye"} color={colors.white} size={20} />
                    </TouchableOpacity>
                    :
                    null
            }
        </View>
    )
}
export default TextInputComp

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.themeBorderColor,
        borderRadius: 16,
        paddingHorizontal: 10,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',

    },
    textStyle: {
        height: 50,
        color: colors.white,
        fontSize: RFValue(14),
        lineHeight: 16,
        flex: 1
    },
    eyeIcon: {

    }
})