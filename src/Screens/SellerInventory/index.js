import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import colors from "../../Config/Colors";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { styles } from "./style";
import { FlatList, ScrollView, View } from "react-native";
import ListHeader from "../../Components/ListHeader";
import { bookList, filterMenuList, orderItems } from "../../Assets/MockData";
import InventoryCard from "../../Components/InventoryCard";

const SellerInventory = ({ navigation }) => {
    const renderItem = ({item, index}) => {
        return(
            <InventoryCard index={index} item={item} />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
            <Header onBack={() => navigation.goBack()} title={labels.ProductInventory} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <ListHeader contentContainerStyle={styles.titleContainer} label={labels.ShopOrders} showAll={false} labelStyle={styles.listTitle} showMenu={true} menuList={filterMenuList} />
                <FlatList 
                scrollEnabled={false}
                data={orderItems}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                renderItem={renderItem}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
export default SellerInventory;