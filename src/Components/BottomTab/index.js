import React from 'react';
import { Image, Text, View } from 'react-native';
// import labels from '../../assets/labels/English.labels';
import styles from './style';
import labels from '../../Assets/Labels';
import { Assets } from '../../Assets';
import { tabRoutes } from '../../Navigation/TabStack/TabRoutes';
import { PressableOpacity } from 'react-native-pressable-opacity';
// import styles from './BotttomTab.style';
const routes = tabRoutes;
const BottomTab = ({ navigation, state }) => {
  console.log(navigation,state, 'sss')
  let isFocused = 'Home';
  state.routes.map((index, i) => {
    if (i == state.index) {
      isFocused = index.name;
    }
  });
  const SelectTab = item => {
    item.navigateTo &&
      navigation.navigate('TabStack', {
        screen: item.name,
      });
  };
  return (
    <View style={styles.container}>
      {
        routes?.map((text, index) => (
          <PressableOpacity onPress={() => SelectTab(text)} activeOpacity={0.8} key={index} style={styles.itemContainer}>
            <Image source={text?.icon} />
            <Text style={styles.itemName}>{text?.label}</Text>
          </PressableOpacity>
        ))
      }
    </View>
  );
};

export default BottomTab;