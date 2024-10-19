import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import labels from '../../Assets/Labels';
import { PressableOpacity } from 'react-native-pressable-opacity';
const HorizontalCards = ({
    list = [],
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={style.itemContainer}>
                <Image source={item.image} style={style.imageStyle} />
                <View style={style.titleContainer}>
                    <Text style={style.title}>{item?.title}</Text>
                    <Text style={style.auther}>{item?.auther}</Text>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            horizontal={true}
            data={list}
            key={'hc_'}
            keyExtractor={item => "hc_" + item?.id}
            contentContainerStyle={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={style.divider} />}
        />
    )
}

export default HorizontalCards;
const style = StyleSheet.create({
    container: {

    },

    itemContainer: {

    },
    divider: {
        marginHorizontal: 10
    },
    imageStyle: {
        width: 150,
        height: 200,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 16,
        color: colors.themeTitleOrangeShade,
        lineHeight: 19,
        fontWeight: '600'
    },
    titleContainer: {
        marginTop: 10
    },
    auther: {
        fontSize: 12,
        fontWeight: '300',
        color: colors.playerBackground
    }
})