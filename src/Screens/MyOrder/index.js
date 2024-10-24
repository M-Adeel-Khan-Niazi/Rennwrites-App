import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import { FlatList, ScrollView, View } from "react-native"
import { styles } from "./style"
import labels from "../../Assets/Labels"
import ListHeader from "../../Components/ListHeader"
import { filterMenuList, ordersList, shopData } from "../../Assets/MockData"
import CartItemCard from "../../Components/CartItemCard"

const MyOrders = ({ navigation }) => {
    const renderItem = ({item, index}) => {
        return(
            <CartItemCard
                item={item}
                index={index}
                pagination={false}
                showColor={false}
                showDateStatus={true}
                bottomRightQtyShow={true}
                onPress={() => navigation.navigate('MyOrderDetail')}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <View style={styles.scrollContentContainer}>
                <ListHeader label={labels.MyOrders} showAll={false} labelStyle={styles.listTitle} showMenu={true} menuList={filterMenuList} />
                </View>
                <FlatList 
                data={ordersList}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                contentContainerStyle={styles.scrollContentContainer}
                />
        </SafeAreaView>
    )
}
export default MyOrders;