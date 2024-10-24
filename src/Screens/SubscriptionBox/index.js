import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./style";
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import SubscribeCard from "../../Components/SubscribeCard";
import { ScrollView, Text, View } from "react-native";
import { months, subscriptionChecks } from "../../Assets/MockData";
import Button from "../../Components/Button";
import { useState } from "react";
import { PressableOpacity } from "react-native-pressable-opacity";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors";
import SubscriptionBoxIncludesList from "../../Components/SubscriptionIncludeList";
const SubscriptionBox = ({ navigation }) => {
    const [dateSelect, setDateSelect] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => dateSelect ? setDateSelect(false) : navigation.goBack()} title={labels.SubscriptionBox} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>

                <SubscribeCard buttonShow={false} />
                <View style={styles.bodyContainer}>
                    <Text style={styles.subscriptionBoxTitle}>{labels.SubscriptionBoxIncludes}</Text>
                    {
                        dateSelect ?
                        <SubscriptionBoxIncludesList />
                            :
                            <View style={styles.monthsParentContainer}>
                                {
                                    months.map(t => (
                                        <PressableOpacity activeOpacity={0.8} onPress={() => setDateSelect(!dateSelect)} style={styles.monthChildUpper}>
                                            <View style={styles.monthsChildContainer}>
                                                <Text style={styles.monthText}>{t}</Text>
                                            </View>
                                        </PressableOpacity>
                                    ))
                                }
                            </View>
                    }
                    {
                        dateSelect ?
                        null
                        :
                        <>
                        <Text style={styles.priceText}>{'Price: $80/ month'}</Text>
                        <Button
                            containerStyle={styles.buttonContainer}
                            label={labels.Subscribe}
                            onPress={() => navigation.navigate('PaymentDetails', {from: 'subscription box'})}
                            labelStyle={styles.buttonLabel}
                            />
                            </>
                    }
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default SubscriptionBox;