import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";
import { styles } from "./style";
import { ScrollView, Text } from "react-native";
import CollapseComp from "../../Components/CollapseComp";
import { AboutUsCollapseList } from "../../Assets/MockData";
import { useState } from "react";

const AboutUs = ({ navigation }) => {
    const [collapseList, setCollapseList] = useState(AboutUsCollapseList);
    const onCollapse = (item) => {
        const collapseUpdate = collapseList.map(t => {
            if(t.id === item.id){
                return{
                    ...t,
                    selected: true
                }
            }else{
                return{
                    ...t,
                    selected: false
                }
            }
        })
        setCollapseList(collapseUpdate)
    }
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor='transparent' />
            <Header onBack={() => navigation.goBack()} title={labels.AboutUs} contentContainerStyle={styles.headerContainer} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <Text style={styles.titleStyle}>{labels.WelcomeToRennwrites}</Text>
                <Text style={styles.description}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'}</Text>
                {
                    collapseList.map((text, index) => (
                        <CollapseComp
                            data={text}
                            index={index}
                            onCollapse={onCollapse}
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}
export default AboutUs;