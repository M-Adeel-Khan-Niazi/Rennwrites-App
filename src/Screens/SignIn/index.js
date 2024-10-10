import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import colors from "../../Config/Colors";
import TextInputComp from "../../Components/TextInput";
import Button from "../../Components/Button";
import Octicons from 'react-native-vector-icons/Octicons'
import { navigate } from "../../Navigation/NavigationService";
const SignIn = ({ navigation }) => {
    const [remember, setRemember] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
            <Header onBack={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{labels.SignIn}</Text>
                <Text style={styles.description}>{labels.WelcomeBackYouveBeenMissed}</Text>
                <View style={styles.formContainer}>
                    <TextInputComp placeholder={labels.YourEmail} />
                    <TextInputComp placeholder={labels.Password} showPassword={showPassword} showEye={true} onShowEye={() => setShowPassword(!showPassword)} />
                    <View style={styles.forgetContainer}>
                        <TouchableOpacity onPress={() => setRemember(!remember)} activeOpacity={0.8} style={styles.rememberContainer}>
                            <Octicons name={remember ? 'check-circle' : 'check-circle-fill'} color={colors.themeOrange} size={15} />
                            <Text style={styles.rememberMe}>{" " + labels.RememberMe}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('ForgotPasswordEmailScreen')} activeOpacity={0.8}>
                            <Text style={styles.forgetText}>{labels.ForgetPassword}</Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        label={labels.SignIn}
                        // onPress={() =>navigate('SignUp')}
                    />
                    <TouchableOpacity activeOpacity={0.8} onPress={() =>navigate('SignUp')} style={styles.haveAccountContainer}>
                        <Text style={styles.haveAccountText}>{labels.DontHaveAnAccount}<Text style={styles.signUpText}>{" " + labels.SignUp}</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignIn