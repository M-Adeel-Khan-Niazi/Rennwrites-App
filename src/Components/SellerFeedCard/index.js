import { StyleSheet, Text, View } from "react-native"
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";
import labels from "../../Assets/Labels";
import TopSellerCard from "../TopSellerCard";

const SellerFeedCards = ({
    data = []
}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{labels.OrdersSummary}</Text>
            <TopSellerCard data={data?.[0]} />
        </View>
    )
}
export default SellerFeedCards;
const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    title: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
})