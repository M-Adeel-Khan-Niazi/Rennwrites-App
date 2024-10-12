import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
const HorizontalTabs = ({
    list = [],
    selected = 0
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={style.itemContainer(selected === item.id)}>
                <Text style={style.itemLabel(selected === item.id)}>
                    {item?.label}
                </Text>
            </View>
        )
    }
    return (
        <FlatList
            horizontal={true}
            data={list}
            contentContainerStyle={{marginTop: 10}}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
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
        color: active ? colors.white : colors.themeBorderColor,
        lineHeight: 17,
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