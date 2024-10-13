import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import Header from '../../Components/Header';
import { navigate } from '../../Navigation/NavigationService';
import { FlatList, ScrollView, Text, View } from 'react-native';
import ProfileDetailComp from '../../Components/ProfileDetailComp';
import { profileMenuList } from './MenuList';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { SvgXml } from 'react-native-svg';
const SideMenu = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <PressableOpacity onPress={() => navigate(item?.navigate)} key={index} activeOpacity={0.8} style={styles.menuItemContainer}>
                <SvgXml xml={item.icon} width={50} height={50} />
                <Text style={styles.itemName}>{item?.name}</Text>
            </PressableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header
                    home={true}
                    homeBackShow={true}
                    onBack={() => navigation.goBack()}
                    onMenuPress={() => navigate('SideMenu')}
                />
            </View>
            <ScrollView>
                <View style={styles.bodyContainer}>
                    <ProfileDetailComp />
                    <FlatList
                        data={profileMenuList}
                        scrollEnabled={false}
                        contentContainerStyle={styles.listContainer}
                        ItemSeparatorComponent={() => <View style={styles.divider} />}
                        renderItem={renderItem}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SideMenu;
