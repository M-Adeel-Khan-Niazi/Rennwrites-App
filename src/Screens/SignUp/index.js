import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import colors from "../../Config/Colors";
import TextInputComp from "../../Components/TextInput";
import Button from "../../Components/Button";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { navigate } from "../../Navigation/NavigationService";
import { styles } from "./style";
import PhoneInput from 'react-native-phone-input'
const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
            <Header onBack={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{labels.SignUp}</Text>
                    <Text style={styles.description}>{labels.UnlockExclusiveFeaturesManageYourPurchasesAndExploreTailoredBookRecommendationsWithEase}</Text>
                    <View style={styles.formContainer}>
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
                        <TextInputComp placeholder={labels.Password} showPassword={showPassword} showEye={true} onShowEye={() => setShowPassword(!showPassword)} />
                        <TextInputComp placeholder={labels.ConfirmPassword} showPassword={showConfPassword} showEye={true} onShowEye={() => setShowConfPassword(!showConfPassword)} />
                        <Button
                            label={labels.SignUp}
                            containerStyle={styles.buttonContainer}
                        />
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('SignIn')} style={styles.haveAccountContainer}>
                            <Text style={styles.haveAccountText}>{labels.DontHaveAnAccount}<Text style={styles.signUpText}>{" " + labels.SignIn}</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp