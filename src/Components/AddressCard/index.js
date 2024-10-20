import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { selectedRadio, unSelectedRadio } from '../../Assets/svgs';
import colors from '../../Config/Colors';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { RFValue } from 'react-native-responsive-fontsize';
const AddressDetailCard = ({
    address = null
}) => {
    return (
        <View>
            {
                address.map((text, inex) => (
                    <PressableOpacity activeOpacity={0.8} style={style.container}>
                        <View>
                            <SvgXml
                                xml={text.checked ? selectedRadio : unSelectedRadio}
                                width={30}
                                height={30}
                            />
                        </View>
                        <View style={style.metaContainer}>
                            <Text style={style.titleText}>{text?.title}</Text>
                            <Text style={style.addressText}>{text?.address}</Text>
                            <Text style={style.defaultText}>{text.defaultText}</Text>
                        </View>

                    </PressableOpacity>
                ))
            }
        </View>
    )
}
export default AddressDetailCard;
const style = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: colors.tabInActiveBackground,
    },
    metaContainer: {
        marginHorizontal: 10
    },
    titleText: {
        color: colors.themeTitleOrangeShade,
        fontSize: RFValue(12),
        lineHeight: 32,
        fontWeight: '500'
    },
    addressText: {
        fontSize: RFValue(12),
        lineHeight: 17,
        fontWeight: '400',
        color: colors.themeBorderColor
    },
    defaultText: {
        marginTop: 10,
        fontSize: RFValue(12),
        lineHeight: 17,
        fontWeight: '400',
        color: colors.defaultGrayDark
        
    }
})