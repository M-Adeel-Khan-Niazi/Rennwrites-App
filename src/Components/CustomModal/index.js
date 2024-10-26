import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import colors from "../../Config/Colors";
const CustomModal = ({
    isVisible = false,
    headerComponent = () => {},
    bodyContainer = () => {},
    footerComponent = () => {},
    onBackdropPress = () => {},
    onBackButtonPress = () => {}
}) => {
    return(
        <Modal 
        isVisible={isVisible}
        coverScreen={true}
        style={styles.container}
        onBackButtonPress={onBackButtonPress}
        onBackdropPress={onBackdropPress}
        >
            <View style={styles.modalView}>
                {
                    headerComponent()
                }
                {
                    bodyContainer()
                }
                {
                    footerComponent()
                }
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
    
})