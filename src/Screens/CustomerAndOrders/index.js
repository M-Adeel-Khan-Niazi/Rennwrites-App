import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import labels from "../../Assets/Labels"
import { styles } from "./style"
import { ScrollView } from "react-native"
import { filterMenuList, orderTable } from "../../Assets/MockData"
import ShopOrderComp from "../../Components/ShopOrderComp"
import ListHeader from "../../Components/ListHeader"

const CustomerAndOrders = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} title={labels.MyOrders} showProfile={false} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <ListHeader contentContainerStyle={styles.titleContainer} label={labels.MyOrders} showAll={false} labelStyle={styles.listTitle} showMenu={true} menuList={filterMenuList} />

                <ShopOrderComp data={orderTable} showTitle={false} contentContainerStyle={styles.tableContainer} showFooter={true} />

            </ScrollView>
        </SafeAreaView>
    )
}
export default CustomerAndOrders;