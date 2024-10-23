import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { selectedRadio, unSelectedRadio } from '../../Assets/svgs';
import colors from '../../Config/Colors';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { fonts } from '../../Assets';
import labels from '../../Assets/Labels';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const AddressDetailCard = ({
    address = null,
    showEditRemove = false,
    onEditPress = () => { },
    onRemovePress = () => { }
}) => {
    return (
        <View>
            {
                address.map((text, index) => (
                    <PressableOpacity key={index} activeOpacity={0.8} style={style.container}>
                        <View>
                            <SvgXml
                                xml={text.checked ? selectedRadio : unSelectedRadio}
                                width={30}
                                height={30}
                            />
                        </View>
                        <View style={style.metaContainer}>
                            <View style={style.titleTextContainer}>

                                <Text style={style.titleText}>{text?.title}</Text>
                                {
                                    showEditRemove ?
                                        <View style={style.editContainer}>
                                            <PressableOpacity activeOpacity={0.8} onPress={onEditPress}>
                                                <Text style={style.editText}>{labels.Edit}</Text>
                                            </PressableOpacity>
                                            <View style={style.editDivider} />
                                            <PressableOpacity activeOpacity={0.8} onPress={onRemovePress}>
                                                <MaterialIcons name='delete' color={colors.themeOrange} size={20} />
                                            </PressableOpacity>
                                        </View>
                                        :
                                        null
                                }
                            </View>
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
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: colors.tabInActiveBackground,
    },
    metaContainer: {
        marginHorizontal: 10
    },
    titleText: {
        color: colors.themeTitleOrangeShade,
        fontSize: 14,
        fontFamily: fonts.SherikaMedium,
        lineHeight: 32,
        fontWeight: '500'
    },
    addressText: {
        fontSize: 14,
        fontFamily: fonts.SherikaMedium,
        lineHeight: 17,
        fontWeight: '400',
        color: colors.themeBorderColor
    },
    defaultText: {
        marginTop: 10,
        fontFamily: fonts.SherikaMedium,
        fontSize: 14,
        lineHeight: 19,
        fontWeight: '400',
        color: colors.defaultGrayDark

    },
    editContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    editText: {
        fontSize: 13,
        lineHeight: 17,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        color: colors.themeOrange
    },
    editDivider: {
        borderLeftWidth: 1,
        marginHorizontal: 7,
        height: 15,
        borderLeftColor: colors.themeBorderColor
    },
    titleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
})