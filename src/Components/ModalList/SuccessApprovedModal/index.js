import { StyleSheet, Text, View } from "react-native"
import CustomModal from "../../CustomModal"
import { SvgXml } from "react-native-svg"
import { fonts } from "../../../Assets"
import colors from "../../../Config/Colors"
import { checkCircleOrangeIcon } from "../../../Assets/svgs"
import Button from "../../Button"
import labels from "../../../Assets/Labels"

const SuccessfullyApprovedModal = ({
    isVisible = false,
    onBackButtonPress = () => {},
    onBackdropPress = () => {},
    title = '',
    desc = '',
    icon = checkCircleOrangeIcon,
    buttonLabel = labels.ProceedToPay,
    onButtonPress = () => {}
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
    const footerComp = () => {
        return(
                <Button
                label={buttonLabel} 
                onPress={onButtonPress}
                containerStyle={styles.buttonContainer}
                />
        )
    }
    return(
        <CustomModal
        isVisible={isVisible}
        bodyContainer={modalBody}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        footerComponent={footerComp}
        />
    )
}
export default SuccessfullyApprovedModal;
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
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginBottom: 20
    }
})