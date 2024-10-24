import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import labels from "../../Assets/Labels"
import { styles } from "./style"
import { FlatList, View } from "react-native"
import ListHeader from "../../Components/ListHeader"
import { orderItems } from "../../Assets/MockData"
import CartItemCard from "../../Components/CartItemCard"

const MyOrderDetail = ({ navigation }) => {
    const renderItem = ({item, index}) => {
        return(
            <CartItemCard
                item={item}
                index={index}
                pagination={false}
                showColor={false}
                showDateStatus={false}
                showFooter={false}
                showItemDescription={true}
            />
        )
    }
    return (
        <SafeAreaView style={styles.conatainer}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <View style={styles.scrollContentContainer}>
                <ListHeader label={labels.OrderID+': RW321654'} showAll={false} labelStyle={styles.listTitle} showMenu={false} />
            </View>
            <FlatList
                data={orderItems}
                renderItem={renderItem}
                contentContainerStyle={styles.flateListContentContainer}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
        </SafeAreaView>
    )
}
export default MyOrderDetail;