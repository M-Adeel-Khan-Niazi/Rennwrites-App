import { StyleSheet, Text, View } from "react-native"
import { SvgXml } from "react-native-svg";
import { dialIcon } from "../../Assets/svgs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";
const AddressCardComp = ({
    icon = dialIcon,
    title = '+00 123 456 789'
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <SvgXml
                    xml={icon}
                />
                <Text style={styles.textStyle}>{title}</Text>
            </View>
            <MaterialCommunityIcons name='chevron-right' color={colors.white} size={30} />
        </View>
    )
}
export default AddressCardComp;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: colors.tabInActiveBackground
    },
    textStyle: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.themeBorderColor,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    },
    textContainer: {
        flexDirection: 'row',
        gap: 20
    }
})