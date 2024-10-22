import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../Config/Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const TextInputComp = ({
    placeholder = '',
    showEye = false,
    showPassword = false,
    onShowEye = () => { },
    keyboardType = 'default',
    multiline = false
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                multiline={multiline}
                placeholderTextColor={colors.themeBorderColor}
                style={styles.textStyle(multiline)}
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
    textStyle: (multiline) => ({
        height: multiline ? 120 : 50,
        color: colors.white,
        fontSize: 14,
        textAlignVertical: 'top',
        lineHeight: 16,
        flex: 1
    }),
    eyeIcon: {

    }
})