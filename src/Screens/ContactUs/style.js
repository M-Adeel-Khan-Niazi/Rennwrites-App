import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        marginHorizontal: 20
    },
    scrollContentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    titleText: {
        fontSize: 20,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
        lineHeight: 26,
        color: colors.themeTitleOrangeShade
    },
    namesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    phoneInputText: {
        color: colors.white
    },
    phoneInputStyle: {
        fontSize: 14,
        lineHeight: 20,
        

        borderWidth: 1,
        borderColor: colors.themeBorderColor,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagImage: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: colors.themeBorderColor,
        paddingHorizontal: 5
    },
    buttonContainer: {
        marginVertical: 20
    },
    contactTitleText: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: fonts.SherikaBold,
        fontWeight: '600',
        color: colors.themeTitleOrangeShade
    }
})