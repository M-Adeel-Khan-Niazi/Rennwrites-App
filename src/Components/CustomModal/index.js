import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import colors from "../../Config/Colors";
import { PressableOpacity } from "react-native-pressable-opacity";
import labels from "../../Assets/Labels";
const CustomModal = ({
    isVisible = false,
    headerComponent = () => {},
    bodyContainer = () => {},
    leftLabel = labels.Yes,
    rightLabel = labels.No,
    onYesPress = () => {},
    onNoPress = () => {},
}) => {
    return(
        <Modal 
        isVisible={isVisible}
        coverScreen={true}
        style={styles.container}
        >
            <View style={styles.modalView}>
                {
                    headerComponent()
                }
                {
                    bodyContainer()
                }
                <View style={styles.footerContainer}>
                    <PressableOpacity onPress={onYesPress} activeOpacity={0.8} style={styles.buttonContainer}>
                        <Text style={styles.ButtonTextStyle}>{leftLabel}</Text>
                    </PressableOpacity>
                    <View style={styles.buttonDivider} />
                    <PressableOpacity onPress={onNoPress} activeOpacity={0.8} style={styles.buttonContainer}>
                        <Text style={styles.ButtonTextStyle}>{rightLabel}</Text>
                    </PressableOpacity>
                </View>
            </View>
        </Modal>
    )
}
export default CustomModal;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalView: {
        backgroundColor: colors.collapseBackground,
        borderRadius: 16
    },
    buttonDivider: {
        borderLeftColor: colors.modalFooterBorderColor,
        borderLeftWidth: 1
    },
    ButtonTextStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 15,
        lineHeight: 25,
        textAlign: 'center'
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
    }
})