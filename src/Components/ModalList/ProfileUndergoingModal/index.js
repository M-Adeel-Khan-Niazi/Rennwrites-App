import { SvgXml } from "react-native-svg"
import CustomModal from "../../CustomModal"
import { checkCircleOrangeIcon } from "../../../Assets/svgs"
import { StyleSheet, Text, View } from "react-native"
import labels from "../../../Assets/Labels"
import { fonts } from "../../../Assets"
import colors from "../../../Config/Colors"

const ProfileUndergoingModal = ({
    isVisible = false,
    onBackdropPress = () => {},
    onBackButtonPress = () => {},
    title = <Text>{labels.YourProfileIsUndergoing}<Text style={styles.verificationText}>{labels.Verification}</Text></Text>,
    desc = labels.AfterTheApprovalYouWillPayTheRegistrationFeesOfAccountActivationThroughTheLinkThatWillBeSharedWithTheSellerViaEmail,
    icon = checkCircleOrangeIcon
}) => {
    const modalBody = () => {
        return(
            <View style={styles.bodyContainerStyle}>
                <SvgXml
                    xml={icon}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text style={styles.descriptionText}>{desc}</Text>
                </View>
            </View>
        )
    }
    return(
        <CustomModal 
        isVisible={isVisible}
        bodyContainer={modalBody}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        />
    )
}
export default ProfileUndergoingModal;
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: fonts.SherikaBold,
        color: colors.themeTitleOrangeShade
    },
    bodyContainerStyle: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    verificationText: {
        color: colors.themeOrange
    },
    descriptionText: {
        color: colors.themeBorderColor,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    }
})