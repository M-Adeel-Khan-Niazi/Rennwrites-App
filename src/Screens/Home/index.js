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

const Home = () => {
    const [tabSelected, setTabSelected] = useState(0)
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.themeOrange} />
            <View style={styles.headerContainer}>
                <Header 
                    home={true}
                />
                <ContinueReading />
            </View>
            <ScrollView>
                <View style={styles.bodyConatainer}>
                    <ListHeader label={labels.RecommendedForYou} showAll={true} labelStyle={styles.listTitle} />
                    <HorizontalTabs list={listTabs} selected={tabSelected} />
                    <HorizontalCards list={bookList} />
                    <ListHeader label={labels.AudioBooks} showAll={true} labelStyle={styles.listTitle} />
                    <VerticalCards list={bookList} />
                    <SubscribeCard />
                    <ListHeader label={labels.TrendingBooks} showAll={true} labelStyle={styles.listTitle} />
                    <HorizontalCards list={bookList} />
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home