import { StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PressableOpacity } from "react-native-pressable-opacity";
const CollapseComp = ({
    data = null,
    index = 0,
    onCollapse =() => {}
}) => {
    return (
        <PressableOpacity activeOpacity={0.8} onPress={() => onCollapse(data)} key={index} style={styles.container(data?.selected)}>
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.titleStyle}>{data?.title}</Text>
                <MaterialCommunityIcons name={data?.selected ? 'chevron-up' : 'chevron-down'} color={colors.white} size={30} />
            </View>
            {
                data?.selected ?
                <View style={styles.descContainer}>

                <Text style={styles.descriptionStyle}>{data?.description}</Text>
                </View>
:
null
            }
        </PressableOpacity>
    )
}
export default CollapseComp;
const styles = StyleSheet.create({
    container: (active) => ({
        backgroundColor: active ? colors.themeOrange : colors.collapseBackground,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 15,
        borderRadius: 16
    }),
    titleStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 18,
        maxWidth: '93%',
        lineHeight: 24,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    },
    titleContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    descriptionStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: fonts.SherikaRegular,
        fontWeight: '400'
    },
    descContainer: {
        marginTop: 10
    }
})