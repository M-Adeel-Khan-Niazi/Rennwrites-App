import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import colors from '../../Config/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const RadioButtonGroup = ({
    selectedId = null,
    setSelectedId = () => {},
    radioButtons = []
}) => {
    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            borderColor={colors.white}
            color={colors.white}
            containerStyle={style.contentContainer}  
            labelStyle={style.labelStyle}
            selectedId={selectedId}
        />
    );

}
export default RadioButtonGroup
const style = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row'
    },
    labelStyle: {
        color: colors.white,
        fontSize: RFValue(11)
    }
})