import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import { ScrollView, Text, View } from "react-native"
import labels from "../../Assets/Labels"
import { styles } from "./style"
import SubscribeCard from "../../Components/SubscribeCard"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors"
import Button from "../../Components/Button"

const SellerSubscriptionBox = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} title={labels.SubscriptionBox} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <SubscribeCard buttonShow={false} desc={labels.MonthSubscriptionFeeToOpenYourStoreOnThePlatform} />
                <View style={styles.bodyContainer}>
                    <Text style={styles.subscriptionBoxTitle}>{labels.SubscriptionBoxIncludes}</Text>
                    <Text style={styles.checksText}><MaterialCommunityIcons name='check' color={colors.themeTitleOrangeShade} size={15} />{"   "}{'Nemo enim ipsam voluptatem quia voluptas sit.'}</Text>
                    <Text style={styles.checksText}><MaterialCommunityIcons name='check' color={colors.themeTitleOrangeShade} size={15} />{"   "}{'Nemo enim ipsam voluptatem quia voluptas sit.'}</Text>
                    <Text style={styles.checksText}><MaterialCommunityIcons name='check' color={colors.themeTitleOrangeShade} size={15} />{"   "}{'Nemo enim ipsam voluptatem quia voluptas sit.'}</Text>
                    <Text style={styles.priceTextStyle}>{'Price: $289 for 3 months'}</Text>
                    <Button
                        containerStyle={styles.buttonContainer}
                        label={labels.Subscribe}
                        onPress={() => navigation.navigate('SellerTabStack')}
                        labelStyle={styles.buttonLabel}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SellerSubscriptionBox;