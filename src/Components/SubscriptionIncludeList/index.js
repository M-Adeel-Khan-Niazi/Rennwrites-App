import { StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fonts } from "../../Assets"
import { subscriptionChecks } from "../../Assets/MockData"
const SubscriptionBoxIncludesList = () => {
    return (
        <View style={styles.checksContainer}>
            {
                subscriptionChecks.map(t => (
                    <View>

                        <Text style={styles.checksText}><MaterialCommunityIcons name='check' color={colors.themeTitleOrangeShade} size={15} />{"   "}{t}</Text>
                    </View>
                ))
            }
        </View>
    )
}
export default SubscriptionBoxIncludesList;
const styles = StyleSheet.create({

    checksText: {
        fontSize: 12,
        lineHeight: 25,

        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        color: colors.themeTitleOrangeShade
    },
    checksContainer: {
        backgroundColor: colors.monthNameShadow,
        padding: 10,
        borderRadius: 12,
        marginTop: 20
    }
})