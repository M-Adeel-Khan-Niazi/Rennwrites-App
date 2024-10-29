import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import colors from "../../Config/Colors";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { styles } from "./style";
import { ScrollView, View } from "react-native";
import OrderSummaryComp from "../../Components/OrderSummaryComp";
import { useState } from "react";
import SellerFeedCards from "../../Components/SellerFeedCard";
import { bookList, orderTable } from "../../Assets/MockData";
import ShopOrderComp from "../../Components/ShopOrderComp";
const dummyOrderSummary = [
    {
        title: labels.Completed,
        count: '125'
    },
    {
        title: labels.Shipped,
        count: '25'
    },
    {
        title: labels.Cancelled,
        count: '05'
    },
    {
        title: labels.Pending,
        count: '10'
    }
]
const SellerHome = ({navigation}) => {
    const [orderSummary, setOrderSummary] = useState(dummyOrderSummary)
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={colors.themeOrange} />
            <View style={styles.headerContainer}>
                <Header
                    home={true}
                    showAppLogoLeft={false}
                    showProfileDetail={true}
                    title={labels.SubscriptionBox}
                    profileNameTextStyle={styles.profileNameTextStyle}
                    myAccountLabelStyle={styles.myAccountLabelStyle}
                    profileName={'John Doe'}
                    profileNameBottomLabel={labels.ViewProfile}
                    showCartIcon={false}
                    showSearchIcon={false}
                    onMenuPress={() => navigation.navigate('SideMenu', {seller: true})}
                />
            </View>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <OrderSummaryComp data={orderSummary} />
                <SellerFeedCards data={bookList} />
                <ShopOrderComp data={orderTable} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default SellerHome;