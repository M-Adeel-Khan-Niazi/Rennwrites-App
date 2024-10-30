import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar"
import Header from "../../Components/Header"
import labels from "../../Assets/Labels"
import { FlatList, ScrollView, Text } from "react-native"
import { styles } from "./style"
import { useState } from "react"
import ShipmentTypeSelectFeild from "../../Components/ShipmentTypeSelectFeild"
import Button from "../../Components/Button"

const SellerManageShipment = ({ navigation }) => {
    const [shipmentType, setShipmentType] = useState([
        {
            selected: false,
            id: 0,
            title: labels.FreeCharges
        },
        {
            id: 1,
            selected: true,
            title: labels.StandardCharges
        }
    ])
    const onSelectCard = (e) => {
        const updatedList = shipmentType.map(t => {
            if (t?.id === e?.id) {
                return {
                    ...t,
                    selected: true
                }
            } else {
                return {
                    ...t,
                    selected: false
                }
            }
        })
        setShipmentType(updatedList)
    }
    const renderItem = ({ item, index }) => {
        return (
            <ShipmentTypeSelectFeild item={item} index={index} onPress={onSelectCard} />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
            <Header onBack={() => navigation.goBack()} title={labels.ProductInventory} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <Text style={styles.titleText}>{labels.ManageShipmentCharges}</Text>
                <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                <FlatList
                    data={shipmentType}
                    scrollEnabled={false}
                    renderItem={renderItem}
                    ListFooterComponent={() => <Button label={labels.SaveChanges} containerStyle={styles.buttonContainer} />}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
export default SellerManageShipment;