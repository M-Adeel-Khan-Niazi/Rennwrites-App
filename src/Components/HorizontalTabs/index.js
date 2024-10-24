import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { fonts } from '../../Assets';
const HorizontalTabs = ({
    list = [],
    selected = 0,
    onPress = () => {}
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <PressableOpacity key={index} onPress={() => onPress(item?.id)} style={style.itemContainer(selected === item.id)}>
                <Text style={style.itemLabel(selected === item.id)}>
                    {item?.label}
                </Text>
            </PressableOpacity>
        )
    }
    return (
        <FlatList
            horizontal={true}
            data={list}
            key={'ht_'}
            keyExtractor={item => "ht_" + item?.id}
            contentContainerStyle={{marginTop: 10}}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <View style={style.divider} />}
        />
    )
}

export default HorizontalTabs;
const style = StyleSheet.create({
    container: {

    },
    itemLabel: (active) => ({
        fontSize: 14,
        fontFamily: fonts.SherikaMedium,
        color: active ? colors.white : colors.themeBorderColor,
        lineHeight: 20,
        fontWeight: '500',
        textAlign: 'center'
    }),
    itemContainer: (active) => ({
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: active ? colors.themeOrange : colors.tabInActiveBackground
    }),
    divider: {
        marginHorizontal: 5
    }
})