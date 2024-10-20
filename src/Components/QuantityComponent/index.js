import { StyleSheet, Text, View } from "react-native"
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RFValue } from "react-native-responsive-fontsize";
const QuantityComponent = ({
    iconContainer = {},
    pagingContainer = {},
    qtyTextStyle = {},
    containerStyle = {}
}) => {
    return (
        <View style={[style.container, containerStyle]}>
            <Text style={[style.qtyText, qtyTextStyle]}>{labels.Qty}:</Text>
            <View style={style.pagingButton}>
                <View style={[style.iconContainer, iconContainer]}>
                    <MaterialCommunityIcons name={'minus'} color={colors.white} size={20} />
                </View>
                <View style={[style.pagingContainer, pagingContainer]}>
                    <Text style={style.pagingNumber}>{'01'}</Text>
                </View>
                <View style={[style.iconContainer, iconContainer]}>
                    <MaterialCommunityIcons name={'plus'} color={colors.white} size={20} />
                </View>
            </View>
        </View>
    )
}
export default QuantityComponent;
const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 15,
        borderRadius: 16,
        borderColor: colors.themeOrange,
    },
    pagingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    qtyText: {
        color: colors.themeOrange,
        fontSize: RFValue(14),
        // flex: 1,
        lineHeight: 17,
        fontWeight: '500'
    },
    pagingNumber: {
        color: colors.themeOrange,
        fontSize: RFValue(12),
        lineHeight: 17,
        fontWeight: '500'
    },
    iconContainer: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 11,
        backgroundColor: colors.themeOrange
    },
    pagingContainer: {
        paddingHorizontal: 8,
        paddingVertical: 9,
        borderRadius: 11,
        backgroundColor: colors.white
    }
})