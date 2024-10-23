import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import { ScrollView, Text } from "react-native";
import { styles } from "./style";
import labels from "../../Assets/Labels";
import TextInputComp from "../../Components/TextInput";
import Button from "../../Components/Button";

const ChangePassword = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Text style={styles.titleStyle}>
                    {labels.ChangePassword}
                </Text>
                <Text style={styles.feildLabel}>
                    {labels.OldPassword}
                </Text>
                <TextInputComp placeholder={labels.FirstName} showEye={true} showPassword={true} />

                <Text style={styles.feildLabel}>
                    {labels.NewPassword}
                </Text>
                <TextInputComp placeholder={labels.FirstName} showEye={true} showPassword={true} />

                <Text style={styles.feildLabel}>
                    {labels.ConfirmPassword}
                </Text>
                <TextInputComp placeholder={labels.FirstName} showEye={true} showPassword={true} />
                <Button 
                label={labels.SaveChanges}
                containerStyle={styles.buttonContainer}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
export default ChangePassword;