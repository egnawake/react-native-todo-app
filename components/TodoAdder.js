import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import TextButton from './TextButton';

class TodoAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: '' };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.confirmTodoAdd = this.confirmTodoAdd.bind(this);
  }

  handleTextChange(text) {
    this.setState({ input: text });
  }

  confirmTodoAdd() {
    const newTodo = {
      task: this.state.input,
      completed: false,
    };
    this.props.onTodoAdd(newTodo);
    this.resetInput();
  }

  resetInput() {
    this.setState({ input: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.handleTextChange}
          value={this.state.input}
          style={styles.input}
        />
        <TextButton
          onPress={this.confirmTodoAdd}
          text="Add"
          buttonStyle={styles.addButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    flexDirection: 'row',
    padding: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 3,
    marginRight: 6,
  },
  addButton: {
    width: 90,
  },
});

export default TodoAdder;