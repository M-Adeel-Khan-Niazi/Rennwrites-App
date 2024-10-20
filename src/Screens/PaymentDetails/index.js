import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { style } from "./style";
import TextInputComp from "../../Components/TextInput";
import Button from "../../Components/Button";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../Config/Colors";
import { PressableOpacity } from "react-native-pressable-opacity";
import { orderItems } from "../../Assets/MockData";
const PaymentDetails = ({navigation}) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <SafeAreaView style={style.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
            <Header title={labels.PaymentDetails} onBack={() => navigation.goBack()} contentContainerStyle={style.headerContainer} />
            <ScrollView>
                <View style={style.bodyContainer}>
                    <Text style={style.titleText}>{labels.EnterCardDetails}</Text>
                    <TextInputComp placeholder={labels.NameOnCard} />
                    <TextInputComp placeholder={labels.CardNumber} />
                    <View style={style.namesContainer}>
                        <View style={style.firstNameContainer}>
                            <TextInputComp placeholder={labels.CVC} />
                        </View>
                        <View style={style.lastNameContainer}>
                            <TextInputComp placeholder={labels.MMYY} />
                        </View>
                    </View>
                    <Button label={labels.PayNow} containerStyle={style.buttonContainer} />
                    <View style={style.orderSummaryContainer}>
                        <Text style={style.orderSummary}>{labels.OrderSummary}</Text>
                        <PressableOpacity onPress={() => setCollapse(!collapse)} activeOpacity={0.8} style={style.arrowContainer}>
                            <MaterialCommunityIcons name={collapse ? 'chevron-down' : 'chevron-up'} size={25} color={colors.white} />
                        </PressableOpacity>
                    </View>
                    {
                        !collapse ?
                            <View style={style.orderDetailContainer}>
                                {
                                    orderItems.map((text, index) => (
                                        <View style={style.itemContainer}>
                                            <View style={style.itemNameContainer}>
                                                <Text style={style.orderSummaryName}>{text.name}</Text>
                                                <Text style={style.quantityText}>{text.quantity}</Text>
                                            </View>
                                            <Text style={style.priceText}>{text.price}</Text>
                                        </View>

                                    ))
                                }
                                <View style={style.divider} />
                                <View style={style.totalContainer}>
                                    <Text style={style.totalAmountText}>{labels.TotalAmount}</Text>
                                    <Text style={style.totalPriceText}>{'$60.00'}</Text>

                                </View>
                            </View>
                            :
                            null
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PaymentDetails;
