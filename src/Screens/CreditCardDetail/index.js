import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import labels from "../../Assets/Labels"
import { styles } from "./style"
import { ScrollView, Text } from "react-native"
import { creditCardList } from "../../Assets/MockData"
import CreditCardComp from "../../Components/CreditCard"
import Button from "../../Components/Button"

const CreditCardDetail = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainerStyle}>
                <Text style={styles.titleStyle}>
                    {labels.CardDetail}
                </Text>
                {
                    creditCardList.map((text, index) => (
                        <CreditCardComp text={text} index={index} onEditPress={() => navigation.navigate('AddNewCreditCard', {edit: true})} />
                    ))
                }
                <Button 
                label={labels.AddNew}
                onPress={() => navigation.navigate('AddNewCreditCard')}
                containerStyle={styles.buttonContainer}
                />

            </ScrollView>
        </SafeAreaView>
    )
}
export default CreditCardDetail;