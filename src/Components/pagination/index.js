import { StyleSheet, Text, View } from "react-native"
import { PressableOpacity } from "react-native-pressable-opacity"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors"
import { RFValue } from "react-native-responsive-fontsize"

const PaginationComp = ({
    list = [],
    selectedIndex = 0
}) => {
    return(
        <View style={styles.container}>
        <PressableOpacity style={styles.paginationPrev}>
            <MaterialCommunityIcons name={'chevron-left'} size={25} />
        </PressableOpacity>
        {
            list.map((t, i) => (
                <PressableOpacity style={styles.paginationNumber(i === selectedIndex)}>
                    <Text style={styles.paginationNumberText(i === selectedIndex)}>{t+1}</Text>
            </PressableOpacity>
            ))
        }
        <PressableOpacity style={styles.paginationPrev}>
            <MaterialCommunityIcons name={'chevron-right'} size={25} />
        </PressableOpacity>
    </View>
    )
}
export default PaginationComp;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        gap : 5
    },
    paginationPrev: {
        backgroundColor: colors.themeOrange,
        borderRadius: 8,
        width: 25,
        height: 25,
    },
    paginationNumber: (active) => ({
        borderRadius: 8,
        width: 25,
        height: 25,
        justifyContent: 'center',
        backgroundColor: active ? colors.white : colors.tabInActiveBackground
    }),
    paginationNumberText: (active) => ({
        color: active ? colors.themeOrange : colors.themeBorderColor,
        fontSize: RFValue(13),
        // lineHeight: 16,
        textAlign: 'center',
        // backgroundColor: 'red'
    })
})