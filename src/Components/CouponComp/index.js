import { StyleSheet, TextInput, View } from "react-native"
import colors from "../../Config/Colors";
import Button from "../Button";
import labels from "../../Assets/Labels";

const CouponComp = () => {
    return(
        <View style={style.container}>
            <TextInput 
            style={style.textInputStyle}
            placeholder={labels.AddCouponCode}
            placeholderTextColor={colors.themeBorderColor}
            />
            <Button 
            label={labels.Apply}
            containerStyle={style.buttonContainer}
            />
        </View>
    )
}
export default CouponComp;
const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
        borderColor: colors.themeBorderColor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInputStyle: {
        flex: 3,
    },
    buttonContainer: {
      flex: 1  
    }
})