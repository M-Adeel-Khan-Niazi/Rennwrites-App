import { StyleSheet, Text, View } from "react-native"
import CustomModal from "../../CustomModal"
import { SvgXml } from "react-native-svg"
import { crossCircleOrangeIcon } from "../../../Assets/svgs"
import labels from "../../../Assets/Labels"
import colors from "../../../Config/Colors"
import { fonts } from "../../../Assets"
import { PressableOpacity } from "react-native-pressable-opacity"

const CancelSubscriptionModal = ({
    isVisible = false,
    onYesPress = () => { },
    onNoPress = () => { },
    leftLabel = labels.Yes,
    rightLabel = labels.No
}) => {
    const modalBody = () => {
        return (
            <View style={styles.bodyContainerStyle}>
                <SvgXml
                    xml={crossCircleOrangeIcon}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.areYouSureText}>{labels.AreYouSureYouWantTo}</Text>
                    <Text style={styles.cancelSubscription}>{labels.CancelSubscription}</Text>
                </View>
            </View>
        )
    }
    const modalFooter = () => {
        return(
            <View style={styles.footerContainer}>
                    <PressableOpacity onPress={onYesPress} activeOpacity={0.8} style={styles.buttonContainer}>
                        <Text style={styles.ButtonTextStyle}>{leftLabel}</Text>
                    </PressableOpacity>
                    <View style={styles.buttonDivider} />
                    <PressableOpacity onPress={onNoPress} activeOpacity={0.8} style={styles.buttonContainer}>
                        <Text style={styles.ButtonTextStyle}>{rightLabel}</Text>
                    </PressableOpacity>
                </View>
        )
    }
    return (
        <CustomModal
            isVisible={isVisible}
            bodyContainer={() => modalBody()}
            footerComponent={modalFooter}
        />
    )
}
export default CancelSubscriptionModal;
const styles = StyleSheet.create({
    areYouSureText: {
        color: colors.themeTitleOrangeShade,
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
    },
    cancelSubscription: {
        color: colors.themeOrange,
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        fontFamily: fonts.SherikaBold,
        fontWeight: '600'
    },
    bodyContainerStyle: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 20
    },
    footerContainer: {
        borderTopWidth: 1,
        borderTopColor: colors.modalFooterBorderColor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flex: 1,
        paddingVertical: 10
    },

    ButtonTextStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 15,
        lineHeight: 25,
        textAlign: 'center'
    },
    buttonDivider: {
        borderLeftColor: colors.modalFooterBorderColor,
        borderLeftWidth: 1
    },
})