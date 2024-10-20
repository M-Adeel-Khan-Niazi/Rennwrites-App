import { Dimensions, StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    slide: {
        flex: 1,
        position: 'relative',
    },
    imageStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 80,
        resizeMode: 'cover',
        // position: 'absolute'
    },
    metaData: {
        flex: 1,
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        // backgroundColor: 'red'
    },
    greetingsTitle: {
        fontSize: RFValue(14),
        lineHeight: 20,
        color: colors.themeOrange,
        textAlign: 'center'
    },
    title: {
        fontSize: RFValue(32),
        lineHeight: 40,
        color: colors.themeTitleOrangeShade,
        textAlign: 'center',
        marginVertical: 10
    },
    description: {
        fontSize: RFValue(14),
        lineHeight: 20,
        textAlign: 'center',
        color: colors.white
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
    buttonContainer: {
        // flexDirection: 'row',
        // marginHorizontal: 24,
    },
    button: {
        flex: 1,
        paddingVertical: 20,
        marginHorizontal: 8,
        borderRadius: 24,
        backgroundColor: '#1cb278',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    descriptionDetailContainer: {
        marginHorizontal: 40,
        marginBottom: 55
    },
    haveAccountText: {
        fontSize: RFValue(14),
        lineHeight: 20,
        textAlign: 'center',
        color: colors.white
    },
    signUpText: {
        color: colors.themeOrange
    },
    haveAccountContainer: {
        marginTop: 10
    }
})
