import React from "react";
import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { styles } from "./style";
import ThankYouGreetingCardComp from "../../Components/ThankYouGreetingsCard";
import { shopData } from "../../Assets/MockData";
import CartItemCard from "../../Components/CartItemCard";
import Button from "../../Components/Button";
const ThankYou = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <CartItemCard
                item={item}
                index={index}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'transparent'} />
            <Header onBack={() => navigation.goBack()} title={labels.ThankYou} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentView}>
                <ThankYouGreetingCardComp
                    title={labels.ThankYouForShopping}
                    description={labels.ThankYouGreetingDesc}
                />
                <FlatList 
                data={shopData}
                renderItem={renderItem}
                />
                <Button
                label={labels.ContinueShopping}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
export default ThankYou