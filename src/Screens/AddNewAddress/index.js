import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import { ScrollView, Text, View } from "react-native"
import { styles } from "./style"
import labels from "../../Assets/Labels"
import TextInputComp from "../../Components/TextInput"
import Button from "../../Components/Button"

const AddNewAddress = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Text style={styles.titleStyle}>
                    {labels.AddNewAddress}
                </Text>
                <TextInputComp placeholder={labels.EnterSuitApartmentStreet} />
                <View style={styles.namesContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.City} />
                    </View>
                    <View style={{ marginHorizontal: 10 }} />
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.State} />
                    </View>
                </View>
                <View style={styles.namesContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.ZipCode} />
                    </View>
                    <View style={{ marginHorizontal: 10 }} />
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.Country} />
                    </View>
                </View>
                <Button 
                label={labels.Save}
                containerStyle={styles.bottonContainerStyle}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
export default AddNewAddress;