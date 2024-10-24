import React from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import labels from '../../Assets/Labels';
import { Assets, fonts } from '../../Assets';
import ListHeader from '../ListHeader';
const ContinueReading = ({
    onViewAll = () => {}
}) => {
    return (
        <View style={style.container}>
            <ListHeader label={labels.ContinueReading} onViewAll={onViewAll} showAll={true} />
            <View style={style.itemContainer}>
                <Image source={Assets.trackImage} />
                <View style={style.metaData}>
                    <View>
                        <Text style={style.titleText}>The Shadow's Embrace</Text>
                        <Text style={style.autherName}>By Jason Roy</Text>
                    </View>
                    <View>
                        <View style={style.barHeader}>
                            <Text style={style.completedLabel}>{labels.Completed} :</Text>
                            <Text style={style.remainTime}>24:00 - 01:58:00</Text>
                        </View>
                        <View style={style.barContainer}>
                            <Animated.View style={[style.bar, { width: 50 }]} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ContinueReading;
const style = StyleSheet.create({
    container: {
        paddingVertical: 18
    },
    itemContainer: {
        backgroundColor: colors.playerBackground,
        padding: 10,
        borderRadius: 12,
        flexDirection: 'row',
        marginTop: 10
    },
    metaData: {
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    titleText: {
        fontFamily: fonts.SherikaBold,
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600'
    },
    autherName: {
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: colors.iconDarkBackground
    },
    barHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2
    },
    bar: {
        height: 9,
        backgroundColor: colors.themeGreen,
        borderRadius: 10,
    },
    barContainer: {
        borderWidth: 2,
        borderRadius: 10,
        width: Dimensions.get('screen').width / 1.6
    },
    completedLabel: {
        fontSize: 10,
        fontFamily: fonts.SherikaMedium,
        color: colors.iconDarkBackground,
        lineHeight: 16,
        fontWeight: '400'
    },
    remainTime: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        color: colors.themeRemainTimeBrown
    }

})