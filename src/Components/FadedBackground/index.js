import React from "react";
import Utility from "../../Utils/Utility";
import { View } from "react-native";


const divisor = 1000;
const pi = 1/divisor;

class Faded extends React.PureComponent {
  constructor(props) {
    super(props);
    let i;
    let collection = [];
    let pixelsStyle = {
      width: '100%',
      position: 'absolute',
      height: props.height,
      flexDirection: 'column'
    };
    if (props.direction === 'up') {
      pixelsStyle = {
        ...pixelsStyle, bottom: 0
      }
      collection.push(0);
      i = pi;
      while (i < 1) {
        collection.push(i);
        i += pi;
      }
      collection.push(1);
    } else {
      pixelsStyle = {
        ...pixelsStyle, top: 0
      }
      collection.push(1);
      i = 1.00;
      while (i > 0) {
        collection.push(i);
        i -= pi;
      }
      collection.push(0);
    }
    let r = 0, g = 0, b = 0;
    if (Utility.hexToRgb(props.color)) {
      r = Utility.hexToRgb(props.color).r;
      g = Utility.hexToRgb(props.color).g;
      b = Utility.hexToRgb(props.color).b;
    }
    this.state = {
      collection,
      pixelsStyle,
      r, g, b
    };
  }
  render() {
    const { children, height } = this.props;
    const { collection, pixelsStyle, r, g, b } = this.state;
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={pixelsStyle}>
          {collection.map((o, key) =>
            <View key={key} style={{ height: (height / divisor), backgroundColor: `rgba(${r}, ${g}, ${b}, ${o})` }} />
          )}
        </View>
        {children}
      </View>
    );
  }
}

// Faded.propTypes = {
//   children: PropTypes.object,
//   color: PropTypes.string,
//   direction: PropTypes.string
// }

Faded.defaultProps = {
  color: '#000000',
  direction: 'up'
}

export default Faded