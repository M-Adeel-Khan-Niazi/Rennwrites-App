import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { styles } from "./style";
// import Header from "../../Components/Header";
import labels from "../../../Assets/Labels";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
// import colors from "../../Config/Colors";
// import TextInputComp from "../../Components/TextInput";
import Button from "../../../Components/Button";
import Octicons from 'react-native-vector-icons/Octicons'
import { navigate } from "../../../Navigation/NavigationService";
import colors from "../../../Config/Colors";
import Header from "../../../Components/Header";
import TextInputComp from "../../../Components/TextInput";
import { styles } from "./style";
const ForgotPasswordEmailScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
            <Header onBack={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{labels.ForgotPassword}</Text>
                <Text style={styles.description}>{labels.EnterEmailYouWillReceiveADigitOTPViaEmail}</Text>
                <View style={styles.formContainer}>
                    <TextInputComp keyboardType="email-address" placeholder={labels.YourEmail} />
                    <Button
                        label={labels.Submit}
                        containerStyle={styles.bottonContainer}
                        onPress={() => navigation.navigate('ForgotPasswordOTPScreen')}
                   />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPasswordEmailScreen