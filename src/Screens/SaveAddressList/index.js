import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import { styles } from "./style";
import { ScrollView, Text } from "react-native";
import labels from "../../Assets/Labels";
import { useState } from "react";
import { addressList } from "../../Assets/MockData";
import AddressDetailCard from "../../Components/AddressCard";
import Button from "../../Components/Button";

const SaveAddressList = ({ navigation }) => {
    const [dummyAddressList, setDummyAddressList] = useState(addressList)

    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
            <Text style={styles.titleStyle}>
                    {labels.SavedAddress}
                </Text>
                <AddressDetailCard address={dummyAddressList} showEditRemove={true} onEditPress={() => navigation.navigate('AddNewAddress')} />
                <Button 
                label={labels.AddNewAddress}
                onPress={() => navigation.navigate('AddNewAddress')}
                containerStyle={styles.bottonContentContainer}
                />
            </ScrollView>
        </SafeAreaView>

    )
}
export default SaveAddressList;