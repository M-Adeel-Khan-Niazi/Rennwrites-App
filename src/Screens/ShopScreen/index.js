import React, { useState } from "react";
import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import { styles } from "./style";
import colors from "../../Config/Colors";
import labels from "../../Assets/Labels";
import HorizontalTabs from "../../Components/HorizontalTabs";
import { listTabs, shopData } from "../../Assets/MockData";
import ShopCard from "../../Components/ShopCard";
import PaginationComp from "../../Components/pagination";
const ShopScreen = ({navigation}) => {
    const [tabSelected, setTabSelected] = useState(0);
    const renderItem = ({ item, index }) => {
        return (
            <ShopCard
            onPressCard={() => navigation.navigate('BookDetail', { audio: false, shop: true })}
                index={index}
                image={item?.image}
                title={item.title}
                price={item.price}
            />
        )
    }
    const footerComp = () => {
        return (
            <PaginationComp
                list={[0, 1, 2, 3]}
                selectedIndex={0}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
            <Header title={labels.shop} onBack={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bodyContainer}>
                    <View style={styles.tabContainer}>
                        <Text style={styles.RecommendedForYouText}>{labels.RecommendedForYou}</Text>
                        <HorizontalTabs list={listTabs} selected={tabSelected} />
                    </View>
                    <FlatList
                        key={'_'}
                        scrollEnabled={false}
                        data={shopData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => "_" + item.id}
                        columnWrapperStyle={styles.flatlstCulumnContainer}
                        ItemSeparatorComponent={() => <View style={styles.divider} />}
                        numColumns={2}
                        renderItem={renderItem}
                        ListFooterComponent={footerComp}
                        horizontal={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ShopScreen