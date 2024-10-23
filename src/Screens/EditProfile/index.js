import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import labels from "../../Assets/Labels"
import { styles } from "./style"
import { Image, ScrollView, Text, View } from "react-native"
import TextInputComp from "../../Components/TextInput"
import PhoneInput from 'react-native-phone-input'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors"
import Button from "../../Components/Button"

const EditProfile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Text style={styles.titleStyle}>
                    {labels.EditPersonalDetails}
                </Text>
                <Text style={styles.feildLabel}>
                    {labels.Name}
                </Text>
                <View style={styles.namesContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.FirstName} />
                    </View>
                    <View style={{ marginHorizontal: 10 }} />
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.LastName} />
                    </View>
                </View>
                <Text style={styles.feildLabel}>
                    {labels.Phone}
                </Text>
                <PhoneInput
                            onPressFlag={() => { }}
                            initialCountry={'us'}
                            initialValue="13178675309"
                            offset={10}
                            textStyle={styles.phoneInputText}
                            style={styles.phoneInputStyle}
                            renderFlag={({ imageSource }) => {
                                return (
                                    <View style={styles.flagContainer}>
                                        <Image source={imageSource} width={20} height={20} style={styles.flagImage} />
                                        <MaterialCommunityIcons name='chevron-down' color={colors.themeBorderColor} size={25} />
                                    </View>
                                )
                            }}
                            textProps={{
                                placeholder: 'Enter a phone number...'
                            }}
                        />
                        <Button 
                        label={labels.SaveChanges}
                        onPress={() => navigation.goBack()}
                        containerStyle={styles.buttonContainer}
                        />
            </ScrollView>
        </SafeAreaView>
    )
}
export default EditProfile