import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import labels from '../../Assets/Labels';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { fonts } from '../../Assets';
import PopupMenuComp from '../PopUpMenu';
const ListHeader = ({
    label = '',
    showAll = false,
    labelStyle = {},
    onViewAll = () => { },
    viewAllLabel = labels.ViewAll,
    viewAllLabelStyle = {},
    showMenu = false,
    menuList = []
}) => {
    return (
        <View style={style.labelContainer}>
            <Text style={[style.labelText, labelStyle]}>{label}</Text>
            {
                showAll ?
                    <PressableOpacity onPress={onViewAll} activeOpacity={0.8} >
                        <Text style={[style.viewAll, viewAllLabelStyle]}>{viewAllLabel}</Text>
                    </PressableOpacity>
                    :
                    null
            }
            {
                showMenu ?
                <View style={style.menuContainer}>
                    <Text style={style.sortText}>{labels.SortByStatus}</Text>
                    <PopupMenuComp menuList={menuList}/>
                    </View>
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
        fontFamily: fonts.SherikaBold,
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600'
    },
    viewAll: {
        color: colors.white,
        fontFamily: fonts.SherikaMedium,
        fontSize: 14,
        lineHeight: 32,
        fontWeight: '500'
    },
    sortText: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '500',
        color: colors.themeBorderColor
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})