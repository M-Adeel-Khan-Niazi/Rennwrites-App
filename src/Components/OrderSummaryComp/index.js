import { FlatList, StyleSheet, Text, View } from "react-native"
import labels from "../../Assets/Labels";
import colors from "../../Config/Colors";
import { fonts } from "../../Assets";

const OrderSummaryComp = ({
    data = []
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <Text style={styles.countText}>{item?.count}</Text>
                <Text style={styles.itemTitle}>{item?.title}</Text>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{labels.OrdersSummary}</Text>
            <FlatList
                data={data}
                scrollEnabled={false}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.flatlistContentContainer}
                columnWrapperStyle={{ gap: 10 }}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
            />
        </View>
    )
}
export default OrderSummaryComp;
const styles = StyleSheet.create({
    container: {

    },
    title: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
    itemTitle: {
        color: colors.themeTitleOrangeShade,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '400',
        fontFamily: fonts.SherikaMedium
    },
    itemContainer: {
        backgroundColor: colors.tabInActiveBackground,
        flex: 1,
        padding: 20,
        borderRadius: 8
    },
    countText: {
        fontSize: 34,
        lineHeight: 42,
        color: colors.themeOrange,
        fontWeight: '600',
        fontFamily: fonts.SherikaBold
    },
    flatlistContentContainer: {
        marginTop: 10
    }
})