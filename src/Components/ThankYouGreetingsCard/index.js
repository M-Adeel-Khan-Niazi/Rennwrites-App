import { StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

const ThankYouGreetingCardComp = ({
    title = '',
    description = ''
}) => {
    return(
        <View style={style.container}>
            <Text style={style.titleStyle}>{title}</Text>
            <Text style={style.descriptionStyle}>{description}</Text>
        </View>
    )
}
export default ThankYouGreetingCardComp;
const style = StyleSheet.create({
    container: {
        backgroundColor: colors.tabInActiveBackground,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
        gap: 10,
        borderRadius: 16
    },
    titleStyle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 18,
        lineHeight: 22,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400',
        textAlign: 'center'
    },
    descriptionStyle: {
        color: colors.themeBorderColor,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '400'
    }
})