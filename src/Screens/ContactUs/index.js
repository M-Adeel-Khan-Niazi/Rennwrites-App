import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./style";
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { Image, ScrollView, Text, View } from "react-native";
import TextInputComp from "../../Components/TextInput";
import PhoneInput from 'react-native-phone-input'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../../Config/Colors";
import Button from "../../Components/Button";
import AddressCardComp from "../../Components/AddressCardComp";
import { dialIcon, locationPinIcon, messageIcon } from "../../Assets/svgs";
const ContactUs = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} title={labels.ContactUs} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Text style={styles.titleText}>{labels.LetsCreateProgressTogether}</Text>
                <View style={styles.namesContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.FirstName} />
                    </View>
                    <View style={{ marginHorizontal: 10 }} />
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.LastName} />
                    </View>
                </View>
                <TextInputComp placeholder={labels.YourEmail} />
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
                <TextInputComp placeholder={labels.YourEmail} multiline />
                <Button
                    label={labels.Submit}
                    containerStyle={styles.buttonContainer}
                />
                <Text style={styles.contactTitleText}>{labels.ContactLocation}</Text>
                <AddressCardComp
                    icon={dialIcon}
                    title={'+00 123 456 789'}
                />
                <AddressCardComp
                    icon={messageIcon}
                    title={'info@rennwrites.com'}
                />
                <AddressCardComp
                    icon={locationPinIcon}
                    title={'Lorem ipsum, dummy address, 123456'}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
export default ContactUs;