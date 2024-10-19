import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";

const ProceedCeckoutComp = ({
    onPressProceed = () => {}
}) => {
    return(
        <View style={styles.proceedCheckoutContainer}>
                    <View style={styles.grandTotalContainer}>
                        <Text style={styles.grandTotal}>{labels.GrandTotal}</Text>
                        <Text style={styles.priceTag}>{'$20.50'} <Text style={styles.discount}>{' $20.50'}</Text></Text>
                    </View>
                    <Button
                        label={labels.ProceedToCheckout}
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
        marginVertical: 20
    },
    proceedButtonContainer: {
        flex: 1
    },
    grandTotalContainer: {
        flex: 1
    },
    grandTotal: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.white,
        fontWeight: '400'
    },
    priceTag: {
        fontSize: 22,
        lineHeight: 24,
        color: colors.white,
        fontWeight: '600'
    },
    discount:{
        color: colors.themeOrange,
        fontSize: 12,
        lineHeight: 24,
        textDecorationLine: 'line-through'
    },
})