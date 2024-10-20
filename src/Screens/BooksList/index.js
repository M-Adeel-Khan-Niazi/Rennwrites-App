import React, { useState } from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import colors from "../../Config/Colors";
import labels from "../../Assets/Labels";
import { styles } from "./style";
import HorizontalTabs from "../../Components/HorizontalTabs";
import { bookList, BooksFilterList } from "../../Assets/MockData";
import ReadBookCard from "../../Components/ReadBookCard";
import ListenBookCard from "../../Components/ListenBookCard";
const BooksList = ({ navigation }) => {
    const [tabSelected, setTabSelected] = useState(0);
    const renderItem = ({ item, index }) => {
        return (
            <ReadBookCard
                onPress={() => navigation.navigate('BookDetail', { audio: false, shop: false })}
                title={item.title}
                auther={item.auther}
                index={index}
                image={item.image}
            />
        )
    }
    const renderItemAudio = ({ item, index }) => {
        return (
            <ListenBookCard 
            image={item.image}
            title={item.title}
            auther={item.auther}
            index={index}
            onPress={() => navigation.navigate('BookDetail', { audio: true, shop: false })}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
            <Header onBack={() => navigation.goBack()} title={labels.Books} contentContainerStyle={styles.headerContainer} />
            <View style={styles.bodyContainer}>
                <View style={styles.tabContainer}>
                    <Text style={styles.RecommendedForYouText}>{labels.RecommendedForYou}</Text>
                    <HorizontalTabs list={BooksFilterList} selected={tabSelected} onPress={(id) => setTabSelected(id)} />
                </View>
                {
                    tabSelected ?
                        <View>

                            <FlatList
                                key={'#'}
                                keyExtractor={item => "#" + item.id}
                                data={bookList}
                                ItemSeparatorComponent={() => <View style={styles.divider} />}
                                renderItem={renderItemAudio}
                                horizontal={false}
                            />
                        </View>
                        :
                        <View>

                            <FlatList
                                key={'_'}
                                data={bookList}
                                keyExtractor={item => "_" + item.id}
                                columnWrapperStyle={styles.flatlstCulumnContainer}
                                ItemSeparatorComponent={() => <View style={styles.divider} />}
                                numColumns={2}
                                renderItem={renderItem}
                                horizontal={false}
                            />
                        </View>
                }
            </View>
        </SafeAreaView>
    )
}
export default BooksList