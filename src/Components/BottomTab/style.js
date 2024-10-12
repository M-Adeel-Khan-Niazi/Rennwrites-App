import {StyleSheet} from 'react-native';
import colors from '../../Config/Colors';

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
  itemName: {
    fontSize: 11,
    lineHeight:22,
    textAlign: 'center',
    color: colors.themeBorderColor
  }
});

export default styles;