import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../Config/Colors';
import { fonts } from '../../Assets';
const CheckBoxComp = ({
    checked = false,
    setChecked = () => { },
    label = ''
}) => {
    return (
        <View style={style.container}>
            <CheckBox
                tintColors={colors.themeBorderColor}
                tintColor={colors.themeBorderColor}
                onTintColor={colors.themeBorderColor}
                onCheckColor={colors.themeBorderColor}
                onFillColor={colors.themeBorderColor}
                disabled={false}
                value={checked}
                onValueChange={setChecked}
            />
            <Text style={style.labelText}>{label}</Text>
        </View>
    )
}
export default CheckBoxComp;
const style = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelText: {
        fontFamily: fonts.SherikaMedium,
        fontSize: 14,
        lineHeight: 17,
        color: colors.themeTitleOrangeShade
    }
})