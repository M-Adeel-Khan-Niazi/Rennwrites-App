import React, { useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import colors from "../../Config/Colors";
import Header from "../../Components/Header";
import ContinueReading from "../../Components/ContinueReading";
import ListHeader from "../../Components/ListHeader";
import labels from "../../Assets/Labels";
import HorizontalTabs from "../../Components/HorizontalTabs";
import HorizontalCards from "../../Components/HorizontalCards";
import { bookList, listTabs } from "../../Assets/MockData";
import VerticalCards from "../../Components/VerticalCardList";
import SubscribeCard from "../../Components/SubscribeCard";
import { navigate, navigationRef } from "../../Navigation/NavigationService";
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";

const Home = ({ navigation }) => {
    const [tabSelected, setTabSelected] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={colors.themeOrange} />
            <View style={styles.headerContainer}>
                <Header
                    home={true}
                    onCartPress={() => navigation.navigate('Cart')}
                    onMenuPress={() => navigation.navigate('SideMenu')}
                />
                <ContinueReading onViewAll={() => navigation.navigate('BooksList')} />
            </View>
            <ScrollView>
                <View style={styles.bodyConatainer}>
                    <ListHeader label={labels.RecommendedForYou} onViewAll={() => navigation.navigate('BooksList')} showAll={true} labelStyle={styles.listTitle} />
                    <HorizontalTabs list={listTabs} selected={tabSelected} />
                    <HorizontalCards list={bookList} onPressCard={() => navigation.navigate('BookDetail', { audio: false, shop: false })} />
                    <ListHeader label={labels.AudioBooks} onViewAll={() => navigation.navigate('BooksList')} showAll={true} labelStyle={styles.listTitle} />
                    <VerticalCards list={bookList} onPressCard={() => navigation.navigate('BookDetail', { audio: true, shop: false })} />
                    <SubscribeCard />
                    <ListHeader label={labels.TrendingBooks} onViewAll={() => navigation.navigate('BooksList')} showAll={true} labelStyle={styles.listTitle} />
                    <HorizontalCards list={bookList} onPressCard={() => navigation.navigate('BookDetail', { audio: false, shop: false })} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home