import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import { SvgXml } from 'react-native-svg';
import { playIcon } from '../../Assets/svgs';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { fonts } from '../../Assets';
const VerticalCards = ({
    list = [],
    onPressCard = () => {}
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <PressableOpacity activeOpacity={0.8} onPress={onPressCard} key={index} style={style.itemContainer}>
                <Image source={item.image} style={style.imageStyle} />
                <View style={style.metaContainer}>

                    <View style={style.titleContainer}>
                        <Text numberOfLines={2} style={style.title}>{item?.title}</Text>
                        <Text style={style.auther}>{item?.auther}</Text>
                    </View>
                    <PressableOpacity activeOpacity={0.8} style={style.playIconContainer}>
                        <SvgXml
                            xml={playIcon}
                            width={12}
                            height={12}
                        />
                    </PressableOpacity>
                </View>
            </PressableOpacity>
        )
    }
    return (
        <FlatList
            horizontal={false}
            scrollEnabled={false}
            data={list}
            key={'#'}
            keyExtractor={item => "#" + item?.id}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <View style={style.divider} />}
        />
    )
}

export default VerticalCards;
const style = StyleSheet.create({
    container: {

    },

    itemContainer: {
        flexDirection: 'row',
        padding: 9,
        borderRadius: 8,
        backgroundColor: colors.tabInActiveBackground
    },
    divider: {
        marginVertical: 10
    },
    imageStyle: {
        width: 60,
        height: 74,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 16,
        color: colors.themeTitleOrangeShade,
        fontFamily: fonts.SherikaBold,
        lineHeight: 20,
        flexGrow: 1,
        fontWeight: '600'
    },
    titleContainer: {
        marginLeft: 10,
        flex: 1
    },
    auther: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '300',
        color: colors.playerBackground
    },
    playIconContainer: {
        backgroundColor: colors.themeOrange,
        padding: 10,
        borderRadius: 100
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-between'
    }
})