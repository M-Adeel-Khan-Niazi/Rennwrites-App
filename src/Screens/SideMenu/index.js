import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import Header from '../../Components/Header';
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native';
import ProfileDetailComp from '../../Components/ProfileDetailComp';
import { profileMenuList } from './MenuList';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { SvgXml } from 'react-native-svg';
import colors from '../../Config/Colors';
const SideMenu = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <PressableOpacity onPress={() => navigation.navigate(item?.navigate)} key={index} activeOpacity={0.8} style={styles.menuItemContainer}>
                <SvgXml xml={item.icon} width={50} height={50} />
                <Text style={styles.itemName}>{item?.name}</Text>
            </PressableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.themeOrange} />
            <View style={styles.headerContainer}>
                <Header
                    home={true}
                    homeBackShow={true}
                    onBack={() => navigation.goBack()}
                />
            </View>
            <ScrollView>
                <View style={styles.bodyContainer}>
                    <ProfileDetailComp onPress={() => navigation.navigate('MyAccount')} />
                    <FlatList
                        data={profileMenuList}
                        key={'side_'}
                        keyExtractor={item => "side_" + item?.id}
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
