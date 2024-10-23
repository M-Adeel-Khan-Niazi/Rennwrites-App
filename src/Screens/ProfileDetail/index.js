import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import { styles } from "./style";
import Header from "../../Components/Header";
import { ScrollView, Text } from "react-native";
import ListHeader from "../../Components/ListHeader";
import labels from "../../Assets/Labels";
import AccountItemFeild from "../../Components/AccountItemFeild";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const ProfileDetail = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.conatiner}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <ListHeader onViewAll={() => navigation.navigate('EditProfile')} label={labels.MyAccount} showAll={true} viewAllLabel={labels.Edit} viewAllLabelStyle={styles.viewAllLabelStyle} />
                <AccountItemFeild rightLabel="John" rightArrowShow={false} onlydesc={true} title={labels.FirstName} desc={labels.UserDetailsAndPassword} />
                <AccountItemFeild rightLabel="Doe" rightArrowShow={false} onlydesc={true} title={labels.LastName} desc={labels.UserDetailsAndPassword} />
                <AccountItemFeild rightLabel="jhonedor@email.com" rightArrowShow={false} onlydesc={true} title={labels.EmailAddress} desc={labels.UserDetailsAndPassword} />
                <AccountItemFeild rightLabel="+00 123 456 789" rightArrowShow={false} onlydesc={true} title={labels.Phone} desc={labels.UserDetailsAndPassword} />
                <ListHeader onViewAll={() => navigation.navigate('ChangePassword')} label={labels.MyPassword} showAll={true} viewAllLabel={labels.ChangePassword} viewAllLabelStyle={styles.viewAllLabelStyle} />
                <AccountItemFeild rightLabel={<Text><MaterialCommunityIcons name='dots-horizontal' size={35} /><MaterialCommunityIcons name='dots-horizontal' size={35} /></Text>} rightArrowShow={false} onlydesc={true} title={labels.Password} desc={labels.UserDetailsAndPassword} />

            </ScrollView>
        </SafeAreaView>
    )
}
export default ProfileDetail;