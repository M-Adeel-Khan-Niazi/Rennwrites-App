import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import colors from "../../Config/Colors";
import labels from "../../Assets/Labels";
import { styles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";
import CartItemCard from "../../Components/CartItemCard";
import { shopData } from "../../Assets/MockData";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CouponComp from "../../Components/CouponComp";
import Button from "../../Components/Button";
import ProceedCeckoutComp from "../../Components/ProceedCheckoutComp";
const Cart = ({ navigation }) => {
    const listViewData = Array(20).fill("").map((_, i) => ({ key: `${i}`, text: `item #${i}` }));
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
            <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
            <Header title={labels.Cart} onBack={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <SwipeListView
                    data={shopData}
                    renderItem={renderItem}
                    disableRightSwipe={true}
                    contentContainerStyle={styles.swipeListContainer}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <MaterialCommunityIcons name='delete' color={colors.white} size={30} />
                        </View>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.divider} />}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
                <CouponComp />
                <ProceedCeckoutComp onPressProceed={() => navigation.navigate('Checkout')} />
            </View>
        </SafeAreaView>
    )
}
export default Cart