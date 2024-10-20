import { Dimensions, StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        marginHorizontal: 10
    },
    bannerImage: {
        flex: 1,
        width: '100%',
    },
    trackImageContainer: {
        height: Dimensions.get('screen').height/2.2,
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative'
    },
    trackImageStyle: {
        resizeMode: 'contain',
        // flexGrow: 1,
        width: '50%',
        height: Dimensions.get('screen').width /1.5
    },
    barContainer: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        width: '50%',
        marginTop: 10,
        marginBottom: 5
    },
    bar: {
        height: 9,
        backgroundColor: colors.themeOrange,
        borderRadius: 10,
    },
    absolute: {

        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    timerText: {
        color: colors.detailTimerColor,
        fontSize: RFValue(12),
        lineHeight: 13,
        fontWeight: '300'
    },
    title: {
        color: colors.themeTitleOrangeShade,
        fontSize: RFValue(20),
        lineHeight: 26,
        fontWeight: '600'
    },
    priceLabel: {
        color: colors.themeTitleOrangeShade,
        fontSize: RFValue(14),
        lineHeight: 20,
        fontWeight: '600'
    },
    priceTag: {
        color: colors.themeOrange
    },
    priceContainer: {
        flexDirection: 'row',
        gap: 20,
        marginVertical: 10
    },
    descText: {
        fontSize: RFValue(12),
        lineHeight: 16,
        color: colors.themeTitleOrangeShade,
        opacity: 0.6
    },
    autherLabel: {
    fontSize: RFValue(14),
    lineHeight: 21,
    color: colors.themeOrange    
    },
    autherName: {
        color: colors.themeTitleOrangeShade
    },
    descContainer: {
        marginVertical: 10,
        gap: 10
    },
    lfcButtonStyle: {
        borderWidth: 1,
        flex: 1,
        borderColor: colors.themeOrange,
        backgroundColor: 'transparent'
    },
    stlButtonStyle: {
        flex: 1,

    },
    lfcButtonLabelStyle: {
        color: colors.themeOrange,
        fontSize: RFValue(16),
        lineHeight: 17
    },
    bottonContainer: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 20
    },
    playIconContainer: {
        backgroundColor: colors.themeOrange,
        padding: 20,
        borderRadius: 100,
        position: 'absolute',
        // top: 0,
        bottom: '45%',
        zIndex:9
    },
    headerContainer: {
        marginHorizontal: 10
    },
    divider: {
        width: 15,
        // height: 15,
        marginVertical: 5,
    },
    listContainer: {
        marginTop: 40
    },
    shopImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    backIcon: {
        width: 40,
        height: 40
    },
    productRemainTag: {
        color: colors.themeOrange,
        fontSize: RFValue(10),
        lineHeight: 18,
        fontWeight: '600'
    },
    colorPalet: (color) => ({
        backgroundColor: color,
        width: 20,
        height: 20,
        borderRadius: 5
    }),
    paletteContainer: {
        flexDirection: 'row',
        gap: 10
    },
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})