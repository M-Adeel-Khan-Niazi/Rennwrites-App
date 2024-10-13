import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import labels from "../../Assets/Labels";
import { SvgXml } from "react-native-svg";
import { subscribeCard } from "../../Assets/svgs";
import colors from "../../Config/Colors";
import Button from "../Button";
const SubscribeCard = () => {
    return (
        <View style={style.container}>
            <SvgXml
                xml={subscribeCard}
                width={'100%'}
            />
            <View style={style.metaContainer}>
                <Text style={style.title}>{labels.SubscribeNowForAMonthlyDoseOfWellnessCulturalTreasures}</Text>
                <Button 
                label={labels.Subscribe}
                containerStyle={style.buttonContainer}
                labelStyle={style.buttonLabel}
                />
            </View>
        </View>
    )
}
export default SubscribeCard
const style = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 20
    },
    metaContainer: {
        position: 'absolute',
        padding: 20,
        width: '70%'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 23,
        color: colors.themeTitleOrangeShade
    },
    buttonContainer: {
        backgroundColor: colors.white,
        paddingVertical: 10,
        width: 100,
        borderRadius: 8,
        marginTop: 10
    },
    buttonLabel: {
        color: colors.black
    }
})