import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./style";
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { ScrollView, Text, View } from "react-native";
import SubscribeCard from "../../Components/SubscribeCard";
import SubscriptionBoxIncludesList from "../../Components/SubscriptionIncludeList";
import Button from "../../Components/Button";
import CustomModal from "../../Components/CustomModal";
import { useState } from "react";
import CancelSubscriptionModal from "../../Components/ModalList/CancelSubscriptionModal";

const MySubscription = ({ navigation }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} editIconShow={true} profileNameBottomLabel={labels.CustomerAccount} showProfile={true} profileName={'John Doe'} contentContainerStyle={styles.headerContentContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <SubscribeCard buttonShow={false} />
                <View style={styles.bodyContainer}>
                    <SubscriptionBoxIncludesList />
                    <View style={styles.renewalDateContainer}>
                        <Text style={styles.renewalDateText}>{labels.RenewalDate + ': 16 Nov, 2022'}</Text>
                        <Text style={styles.renewalDateText}>{labels.Status + ': Active'}</Text>
                    </View>
                    <Button
                        containerStyle={styles.buttonContainer}
                        onPress={() => setIsVisibleModal(true)}
                        label={labels.CancelSubscription}
                        labelStyle={styles.buttonLabelStyle}
                    />
                </View>
            </ScrollView>
            <CancelSubscriptionModal
                isVisible={isVisibleModal}
                onNoPress={() => setIsVisibleModal(false)}
            />
        </SafeAreaView>
    )
}
export default MySubscription;
