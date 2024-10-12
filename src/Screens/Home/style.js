import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        paddingHorizontal: 20,
        backgroundColor: colors.themeOrange,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16
    },
    bodyConatainer: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 20
    },
    listTitle: {
        fontWeight: '600'
    }
})
export default styles;