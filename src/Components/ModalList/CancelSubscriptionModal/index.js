import { StyleSheet, Text, View } from "react-native"
import CustomModal from "../../CustomModal"
import { SvgXml } from "react-native-svg"
import { crossCircleOrangeIcon } from "../../../Assets/svgs"
import labels from "../../../Assets/Labels"
import colors from "../../../Config/Colors"
import { fonts } from "../../../Assets"

const CancelSubscriptionModal = ({
    isVisible = false,
    onYesPress = () => { },
    onNoPress = () => { },
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
    return (
        <CustomModal
            isVisible={isVisible}
            bodyContainer={() => modalBody()}
            onNoPress={onNoPress}
            onYesPress={onYesPress}
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
    }
})