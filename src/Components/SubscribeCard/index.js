import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import labels from "../../Assets/Labels";
import { SvgXml } from "react-native-svg";
import { subscribeCard } from "../../Assets/svgs";
import colors from "../../Config/Colors";
import Button from "../Button";
import { RFValue } from "react-native-responsive-fontsize";
import { Assets } from "../../Assets";
const SubscribeCard = () => {
    return (
        <View style={style.container}>
            <ImageBackground source={Assets.subscription} borderRadius={8} >
                <View style={style.metaContainer}>
                    <Text style={style.title}>{labels.SubscribeNowForAMonthlyDoseOfWellnessCulturalTreasures}</Text>
                    <Button
                        label={labels.Subscribe}
                        containerStyle={style.buttonContainer}
                        labelStyle={style.buttonLabel}
                    />
                </View>
            </ImageBackground>
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
        padding: 20,
        width: '70%'
    },
    title: {
        fontSize: RFValue(16),
        fontWeight: '600',
        lineHeight: 22,
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
    },
})