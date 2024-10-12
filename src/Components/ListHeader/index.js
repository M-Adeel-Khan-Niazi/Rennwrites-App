import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import labels from '../../Assets/Labels';
import { PressableOpacity } from 'react-native-pressable-opacity';
const ListHeader = ({
    label = '',
    showAll = false,
    labelStyle = {}
 }) => {
    return (
            <View style={style.labelContainer}>
                <Text style={[style.labelText, labelStyle]}>{label}</Text>
                {
                    showAll ? 
                <PressableOpacity activeOpacity={0.8} >
                    <Text style={style.labelText}>{labels.ViewAll}</Text>
                </PressableOpacity>
                    :
                    null
                }
            </View>
            
    )
}

export default ListHeader;
const style = StyleSheet.create({
    container: {
        paddingVertical: 18
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    labelText: {
        color: colors.white,
        fontSize: 20,
        lineHeight: 32
    },

})