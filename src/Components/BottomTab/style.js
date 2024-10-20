import {StyleSheet} from 'react-native';
import colors from '../../Config/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 5
  },
  itemContainer: {
    alignItems: 'center'
  },
  itemName: (active) => ({
    fontSize: RFValue(11),
    lineHeight:22,
    textAlign: 'center',
    color: active ? colors.themeOrange : colors.themeBorderColor
  })
});

export default styles;