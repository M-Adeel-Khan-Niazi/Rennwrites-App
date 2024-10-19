import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import labels from "../../../Assets/Labels";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../Components/Button";
import colors from "../../../Config/Colors";
import Header from "../../../Components/Header";
import { styles } from "./style";
import { OtpInput } from "react-native-otp-entry";
import { navigate } from "../../../Navigation/NavigationService";
const ForgotPasswordOTPScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
            <Header onBack={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{labels.ForgotPassword}</Text>
                <Text style={styles.description}>{labels.EnterEmailYouWillReceiveADigitOTPViaEmail}</Text>
                <View style={styles.formContainer}>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor={colors.themeOrange}
                        focusStickBlinkingDuration={500}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        textInputProps={{
                            accessibilityLabel: "One-Time Password",
                        }}
                        theme={{
                            pinCodeContainerStyle: styles.pinCodeContainer,
                            pinCodeTextStyle: styles.pinCodeText,
                        }}
                    />
                    <Button
                        label={labels.Submit}
                        containerStyle={styles.bottonContainer}
                        onPress={() => navigation.navigate('ForgotPasswordConfirmPassScreen')}
                    />
                    <TouchableOpacity activeOpacity={0.8} style={styles.haveAccountContainer}>
                        <Text style={styles.haveAccountText}>{labels.HavenReceivedCode}<Text style={styles.signUpText}>{" " + labels.Resend}</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPasswordOTPScreen