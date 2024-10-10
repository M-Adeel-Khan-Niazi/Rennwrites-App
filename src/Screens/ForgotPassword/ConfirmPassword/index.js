import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { styles } from "./style";
// import Header from "../../Components/Header";
import labels from "../../../Assets/Labels";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
// import colors from "../../Config/Colors";
// import TextInputComp from "../../Components/TextInput";
import Button from "../../../Components/Button";
import Octicons from 'react-native-vector-icons/Octicons'
import { navigate } from "../../../Navigation/NavigationService";
import colors from "../../../Config/Colors";
import Header from "../../../Components/Header";
import TextInputComp from "../../../Components/TextInput";
import { styles } from "./style";
// import { styles } from "./style";
const ForgotPasswordConfirmPassScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
            <Header onBack={() => navigation.goBack()} />
            <ScrollView>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{labels.ForgotPassword}</Text>
                <Text style={styles.description}>{labels.ResetPassword}</Text>
                <View style={styles.formContainer}>
                    <TextInputComp placeholder={labels.Password} showPassword={showPassword} showEye={true} onShowEye={() => setShowPassword(!showPassword)} />
                    <TextInputComp placeholder={labels.ConfirmPassword} showPassword={showConfPassword} showEye={true} onShowEye={() => setShowConfPassword(!showConfPassword)} />
                    <Button
                        label={labels.Submit}
                        containerStyle={styles.bottonContainer}
                        onPress={() => navigate('ForgotPasswordOTPScreen')}
                    />
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgotPasswordConfirmPassScreen