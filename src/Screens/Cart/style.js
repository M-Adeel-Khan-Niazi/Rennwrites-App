import { StyleSheet } from "react-native";
import colors from "../../Config/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        flex: 1,
        marginTop: 20
    },
    divider: {
        width: 15,
        // height: 15,
        marginVertical: 5,
    },
    swipeListContainer: {
        marginHorizontal: 10
    },
    rowBack: {
        marginHorizontal: 20,
        padding: 9,
        paddingRight: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 8,
        backgroundColor: colors.themeOrange
    },
    
    
})