import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';
import { tabRoutes } from '../../Navigation/TabStack/TabRoutes';
import { PressableOpacity } from 'react-native-pressable-opacity';
import colors from '../../Config/Colors';
const routes = tabRoutes;
const BottomTab = ({ navigation, state }) => {
  const SelectTab = item => {
    navigation.navigate('TabStack', {
      screen: item.name,
    });
  };
  return (
    <View style={styles.container}>
      {
        routes?.map((text, index) => {
          let isFocused = 'Home';
          if (index == state.index) {
            isFocused = text.name;
          } else {
            isFocused = 0
          }
          return (
            <PressableOpacity onPress={() => SelectTab(text)} activeOpacity={0.8} key={index} style={styles.itemContainer}>
              <Image source={text?.icon} tintColor={isFocused ? colors.themeOrange : colors.themeBorderColor} />
              <Text style={styles.itemName(isFocused)}>{text?.label}</Text>
            </PressableOpacity>
          )
        })
      }
    </View>
  );
};

export default BottomTab;