import { SafeAreaView } from "react-native-safe-area-context"
import { Styles } from "./style";
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import { ScrollView, Text } from "react-native";
import labels from "../../Assets/Labels";
import AccountItemFeild from "../../Components/AccountItemFeild";
import { Assets } from "../../Assets";

const MyAccount = ({navigation}) => {
    return (
        <SafeAreaView style={Styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header showProfile={true} profileName={'John Doe'} contentContainerStyle={Styles.headerContentContainer} />
            <ScrollView contentContainerStyle={Styles.scrollContentContainer}>
                <Text style={Styles.titleStyle}>
                    {labels.PersonalInfo}
                </Text>
                <AccountItemFeild onPress={() => navigation.navigate('ProfileDetail')} title={labels.MyAccount} desc={labels.UserDetailsAndPassword} />
                <AccountItemFeild onPress={() => navigation.navigate('SaveAddressList')} title={labels.MyAddress} desc={'Office # 707, lorem ipsum, dummy address, Chicago, IL'} />
                <AccountItemFeild title={labels.MyOrder} desc={labels.OrderListingWithDetails} />
                <AccountItemFeild onPress={() => navigation.navigate('MySubscription')} title={labels.MySubscription} desc={labels.SubscriptionDetails} />
                <AccountItemFeild title={labels.MyCardDetails} desc={'**** **** 2345'} cardImage={Assets.cardImage} rightArrowShow={false} />
                <AccountItemFeild titleDesc={false} logOutIcon={true} title={labels.Logout} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default MyAccount;
