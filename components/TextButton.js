import React from 'react';
import { StyleSheet, TouchableNativeFeedback, Text, View } from 'react-native';

import colors from './colors';

class TextButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isHeld: false };

    this.onPress = this.onPress.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleButtonRelease = this.handleButtonRelease.bind(this);
  }

  onPress() {
    this.props.onPress();
  }

  handleButtonPress() {
    this.setState({ isHeld: true });
  }

  handleButtonRelease() {
    this.setState({ isHeld: false });
  }

  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.onPress}
        background={TouchableNativeFeedback.Ripple(colors.highlightTransparent, false)}
      >
        <View style={[styles.button, this.props.buttonStyle]}>
          <Text style={[styles.text, this.props.textStyle]}>
            {this.props.text}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderColor: colors.highlight,
    borderWidth: 1,
  },
  text: {
    color: colors.highlight,
  },
});

export default TextButton;