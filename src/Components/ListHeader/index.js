import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import labels from '../../Assets/Labels';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { RFValue } from 'react-native-responsive-fontsize';
const ListHeader = ({
    label = '',
    showAll = false,
    labelStyle = {},
    onViewAll =() => {}
 }) => {
    return (
            <View style={style.labelContainer}>
                <Text style={[style.labelText, labelStyle]}>{label}</Text>
                {
                    showAll ? 
                <PressableOpacity onPress={onViewAll} activeOpacity={0.8} >
                    <Text style={style.viewAll}>{labels.ViewAll}</Text>
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
        fontSize: RFValue(16),
        lineHeight: 22
    },
    viewAll: {
        color: colors.white,
        fontSize: RFValue(14),
        lineHeight: 32 
    }

})