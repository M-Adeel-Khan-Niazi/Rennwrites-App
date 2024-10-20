import { SafeAreaView } from "react-native-safe-area-context"
import { style } from "./style"
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import TextInputComp from "../../Components/TextInput";
import PhoneInput from 'react-native-phone-input'
import colors from "../../Config/Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBoxComp from "../../Components/CheckBox";
import { useMemo, useState } from "react";
import RadioButtonGroup from "../../Components/RadioButtonGroups";
import ProceedCeckoutComp from "../../Components/ProceedCheckoutComp";
import AddressDetailCard from "../../Components/AddressCard";
import { addressList } from "../../Assets/MockData";
const Checkout = ({ navigation }) => {
    const [dummyAddressList, setDummyAddressList] = useState(addressList)
    const [shippingChecked, setShippingChecked] = useState(false)
    const [radioSelectedId, setRadioSelectedId] = useState('1')
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: labels.UseSavedAddress,
            value: '1'
        },
        {
            id: '2',
            label: labels.AddNewAddress,
            value: '2'
        }
    ]), []);
    return (
        <SafeAreaView style={style.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
            <Header title={labels.Checkout} onBack={() => navigation.goBack()} contentContainerStyle={style.headerContainer} />
            <ScrollView>

                <View style={style.bodyContainer}>
                    <Text style={style.titleText}>{labels.ShippingDetails}</Text>
                    <View style={style.namesContainer}>
                        <View style={style.firstNameContainer}>
                            <TextInputComp placeholder={labels.FirstName} />
                        </View>
                        <View style={style.lastNameContainer}>
                            <TextInputComp placeholder={labels.LastName} />
                        </View>
                    </View>
                    <TextInputComp placeholder={labels.EmailAddress} />
                    <PhoneInput
                        onPressFlag={() => { }}
                        initialCountry={'us'}
                        initialValue="13178675309"
                        offset={10}
                        textStyle={style.phoneInputText}
                        style={style.phoneInputStyle}
                        renderFlag={({ imageSource }) => {
                            return (
                                <View style={style.flagContainer}>
                                    <Image source={imageSource} width={20} height={20} style={style.flagImage} />
                                    <MaterialCommunityIcons name='chevron-down' color={colors.themeBorderColor} size={25} />
                                </View>
                            )
                        }}
                        textProps={{
                            placeholder: 'Enter a phone number...'
                        }}
                    />
                    <View style={style.billingContainer}>
                        <Text style={style.titleText}>{labels.BillingDetails}</Text>
                        <CheckBoxComp
                            checked={shippingChecked}
                            setChecked={() => setShippingChecked(!shippingChecked)}
                            label={labels.SameAsShippingDetails}
                        />
                    </View>
                    <View style={style.namesContainer}>
                        <View style={style.firstNameContainer}>
                            <TextInputComp placeholder={labels.FirstName} />
                        </View>
                        <View style={style.lastNameContainer}>
                            <TextInputComp placeholder={labels.LastName} />
                        </View>
                    </View>
                    <TextInputComp placeholder={labels.EmailAddress} />
                    <PhoneInput
                        onPressFlag={() => { }}
                        initialCountry={'us'}
                        initialValue="13178675309"
                        offset={10}
                        textStyle={style.phoneInputText}
                        style={style.phoneInputStyle}
                        renderFlag={({ imageSource }) => {
                            return (
                                <View style={style.flagContainer}>
                                    <Image source={imageSource} width={20} height={20} style={style.flagImage} />
                                    <MaterialCommunityIcons name='chevron-down' color={colors.themeBorderColor} size={25} />
                                </View>
                            )
                        }}
                        textProps={{
                            placeholder: 'Enter a phone number...'
                        }}
                    />
                    <View style={style.billingContainer}>
                        <Text style={style.titleText}>{labels.Address}</Text>
                        <RadioButtonGroup
                            radioButtons={radioButtons}
                            selectedId={radioSelectedId}
                            setSelectedId={setRadioSelectedId}
                        />
                    </View>
                    {
                        radioSelectedId === '1' ?
                            <AddressDetailCard address={dummyAddressList} />
                            :
                            <View>
                                <TextInputComp placeholder={labels.EnterSuitApartmentStreet} />
                                <View style={style.namesContainer}>
                                    <View style={style.firstNameContainer}>
                                        <TextInputComp placeholder={labels.City} />
                                    </View>
                                    <View style={style.lastNameContainer}>
                                        <TextInputComp placeholder={labels.State} />
                                    </View>
                                </View>
                                <View style={style.namesContainer}>
                                    <View style={style.firstNameContainer}>
                                        <TextInputComp placeholder={labels.ZipCode} />
                                    </View>
                                    <View style={style.lastNameContainer}>
                                        <TextInputComp placeholder={labels.Country} />
                                    </View>
                                </View>
                            </View>
                    }
                </View>
            </ScrollView>
            <ProceedCeckoutComp buttonLabel={labels.ProceedToPayment} onPressProceed={() => navigation.navigate('PaymentDetails')} />
        </SafeAreaView>
    )
}
export default Checkout;