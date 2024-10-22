import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";
import Button from "../Button";
import { Assets, fonts } from "../../Assets";
const SubscribeCard = ({
    buttonShow = true
}) => {
    return (
        <View style={style.container}>
            <ImageBackground source={Assets.subscription} borderRadius={8} >
                <View style={style.metaContainer}>
                    <Text style={style.title}>{labels.SubscribeNowForAMonthlyDoseOfWellnessCulturalTreasures}</Text>
                    {
                        buttonShow ?
                        <Button
                            label={labels.Subscribe}
                            containerStyle={style.buttonContainer}
                            labelStyle={style.buttonLabel}
                        />
                        :
                        null
                    }
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
        width: '75%'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold,
        lineHeight: 24,
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