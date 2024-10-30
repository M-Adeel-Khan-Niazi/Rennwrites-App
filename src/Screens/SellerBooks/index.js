import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import { FlatList, ScrollView, View } from "react-native";
import { styles } from "./style";
import labels from "../../Assets/Labels";
import ListHeader from "../../Components/ListHeader";
import { bookList, filterMenuList } from "../../Assets/MockData";
import SellerBookCard from "../../Components/SellerBookCard";
import Button from "../../Components/Button";
import SellerAudioBookCard from "../../Components/SellerAudioBookCard";

const SellerBooks = ({ navigation }) => {
    const bookRenderItem = ({item, index}) => {
        return(
            <SellerBookCard item={item} index={index} />
        )
    }
    const audioRenderItem  = ({item, index}) => {
        return (
            <SellerAudioBookCard item={item} index={index} />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
            <Header onBack={() => navigation.goBack()} title={labels.ManageBooks} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <ListHeader contentContainerStyle={styles.titleContainer} label={labels.Books} showAll={false} labelStyle={styles.listTitle} showMenu={true} menuList={filterMenuList} />
                <FlatList 
                scrollEnabled={false}
                data={bookList}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                renderItem={bookRenderItem}
                ListFooterComponent={() => <Button label={labels.ViewAll} containerStyle={styles.buttonContainer} labelStyle={styles.buttonLabel} />}
                />
                <View style={styles.seperation} />
            <ListHeader contentContainerStyle={styles.titleContainer} label={labels.AudioBooks} showAll={false} labelStyle={styles.listTitle} showMenu={true} menuList={filterMenuList} />
            <FlatList 
                scrollEnabled={false}
                data={bookList}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                renderItem={audioRenderItem}
                ListFooterComponent={() => <Button label={labels.ViewAll} containerStyle={styles.buttonContainer} labelStyle={styles.buttonLabel} />}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
export default SellerBooks;