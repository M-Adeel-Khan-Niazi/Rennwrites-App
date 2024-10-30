import { StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fonts } from "../../Assets";
import { PressableOpacity } from "react-native-pressable-opacity";
const ShipmentTypeSelectFeild = ({
    item = null,
    index = 0,
    onPress = () => { }
}) => {
    return (
        <PressableOpacity activeOpacity={0.8} onPress={() => onPress(item)} key={index} style={styles.container}>
            <MaterialCommunityIcons name={item?.selected ? 'check-circle' : 'radiobox-blank'} color={colors.themeBorderColor} size={25} />
            <View style={styles.divider} />
            <Text style={styles.titleText}>{item?.title}</Text>
        </PressableOpacity>
    )
}
export default ShipmentTypeSelectFeild;
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.themeBorderColor,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 20
    },
    divider: {
        borderLeftWidth: 1,
        borderLeftColor: colors.themeBorderColor,
        marginHorizontal: 10,
        height: 30
    },
    titleText: {
        color: colors.themeBorderColor,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    }
})