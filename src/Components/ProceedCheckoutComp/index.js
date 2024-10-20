import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const ProceedCeckoutComp = ({
    onPressProceed = () => {},
    buttonLabel = labels.ProceedToCheckout
}) => {
    return(
        <View style={styles.proceedCheckoutContainer}>
                    <View style={styles.grandTotalContainer}>
                        <Text style={styles.grandTotal}>{labels.GrandTotal}</Text>
                        <Text style={styles.priceTag}>{'$20.50'} <Text style={styles.discount}>{' $20.50'}</Text></Text>
                    </View>
                    <Button
                        label={buttonLabel}
                        onPress={onPressProceed}
                        containerStyle={styles.proceedButtonContainer}
                    />
                </View>
    )
}
export default ProceedCeckoutComp;
const styles = StyleSheet.create({
    proceedCheckoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20
    },
    proceedButtonContainer: {
        flex: 1
    },
    grandTotalContainer: {
        flex: 1
    },
    grandTotal: {
        fontSize: RFValue(16),
        lineHeight: 24,
        color: colors.white,
        fontWeight: '400'
    },
    priceTag: {
        fontSize: RFValue(18),
        lineHeight: 24,
        color: colors.white,
        fontWeight: '600'
    },
    discount:{
        color: colors.themeOrange,
        fontSize: RFValue(12),
        lineHeight: 24,
        textDecorationLine: 'line-through'
    },
})