import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';
import { PressableOpacity } from 'react-native-pressable-opacity';
import colors from '../../Config/Colors';
import { sellerTabRoutes } from '../../Navigation/SellerTabStack/SellerTabRoutes';
const routes = sellerTabRoutes;
const SellerBottomTab = ({ navigation, state }) => {
  const SelectTab = item => {
    navigation.navigate('SellerTabStack', {
      screen: item.name,
    });
  };
  return (
    <View style={styles.container}>
      {
        routes?.map((text, index) => {
          let isFocused = 'SellerHome';
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

export default SellerBottomTab;