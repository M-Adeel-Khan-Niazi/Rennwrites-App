import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import { ScrollView, Text, View } from "react-native"
import labels from "../../Assets/Labels"
import TextInputComp from "../../Components/TextInput"
import Button from "../../Components/Button"
import { styles } from "./style"

const AddNewCreditCard = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Text style={styles.titleStyle}>
                    {route?.params?.edit ? labels.EditCardDetail : labels.AddNewCard}
                </Text>
                <TextInputComp placeholder={labels.NameOnCard} />
                <TextInputComp placeholder={labels.CardNumber} />
                <View style={styles.namesContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.CVC} />
                    </View>
                    <View style={{ marginHorizontal: 10 }} />
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.MMYY} />
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
export default AddNewCreditCard;