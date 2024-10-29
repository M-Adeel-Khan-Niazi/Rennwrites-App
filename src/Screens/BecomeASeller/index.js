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
import ProfileUndergoingModal from "../../Components/ModalList/ProfileUndergoingModal"
import { useState } from "react"
import { thumbOrange } from "../../Assets/svgs"
import SuccessfullyApprovedModal from "../../Components/ModalList/SuccessApprovedModal"

const BecomeASeller = ({ navigation }) => {
    const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
    const [isApprovedSuccessModal, setIsApprovedSuccessModal] = useState(false)
    const onCloseModal = () => {
        setIsSellerModalOpen(false)
        setTimeout(() => {
            setIsApprovedSuccessModal(true)
        }, 500);
    }
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={false} profileNameBottomLabel={labels.CustomerAccount} showProfile={false} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Text style={styles.titleStyle}>{labels.BecomeASeller}</Text>
                <Text style={styles.descText}>{labels.ToRegisterAsASellerKindlyProvideTheFollowingDetails}</Text>
                <View style={styles.namesContainer}>
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.FirstName} />
                    </View>
                    <View style={{ marginHorizontal: 10 }} />
                    <View style={{ flexGrow: 1 }}>
                        <TextInputComp placeholder={labels.LastName} />
                    </View>
                </View>
                <TextInputComp placeholder={labels.StoreName} />
                <TextInputComp placeholder={labels.EmailAddress} />
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
                <TextInputComp placeholder={labels.Password} showEye={true} showPassword={true} />
                <TextInputComp placeholder={labels.ConfirmPassword} showEye={true} showPassword={true} />
                <Button
                    label={labels.Submit}
                    onPress={() => setIsSellerModalOpen(true)}
                    containerStyle={styles.buttonContainer}
                />
            </ScrollView>
            <ProfileUndergoingModal
                isVisible={isSellerModalOpen}
                onBackButtonPress={onCloseModal}
                onBackdropPress={onCloseModal}
                title={<Text>{labels.YourRequestHasBeenSuccessfullySubmitted}<Text style={styles.orangeColor}>{labels.Successfully}</Text> {labels.Submitted}</Text>}
                desc={labels.AfterTheApprovalYouWillPayTheRegistrationFeesOfAccountActivationThroughTheLinkThatWillBeSharedWithTheSellerViaEmail}
                icon={thumbOrange}
            />
            <SuccessfullyApprovedModal
                isVisible={isApprovedSuccessModal}
                title={<Text>{labels.YourRequestHasBeenSuccessfullySubmitted}<Text style={styles.orangeColor}>{labels.SuccessfullyApproved}</Text></Text>}
                desc={labels.RequestApprovedDescription}
                icon={thumbOrange}
                onButtonPress={() => navigation.navigate('SellerSubscriptionBox')}
            />
        </SafeAreaView>
    )
}
export default BecomeASeller;