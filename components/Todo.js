import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TextButton from './TextButton';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editedTask: '',
      isBeingEdited: false,
    };

    this.removeTodo = this.removeTodo.bind(this);
    this.handleEditPress = this.handleEditPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  removeTodo() {
    this.props.onTodoRemove();
  }

  handleEditPress() {
    if (this.state.isBeingEdited) {
      this.props.onTodoEdit(this.state.editedTask);
    } else {
      this.setState({ editedTask: this.props.todo.task });
    }
    this.setState((state) => {
      return { isBeingEdited: !state.isBeingEdited };
    });
  }

  handleInputChange(text) {
    this.setState({ editedTask: text });
  }

  render() {
    let display = <Text>No task</Text>;
    if (this.state.isBeingEdited) {
      display = (
        <TextInput
          value={this.state.editedTask}
          onChangeText={this.handleInputChange}
          style={styles.input}
          maxLength={40}
          autoFocus
        />
      );
    } else {
      display = <Text>{this.props.todo.task}</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.taskContainer}>{display}</View>
        <View style={styles.buttonsContainer}>
          <TextButton
            text={this.state.isBeingEdited ? 'Accept' : 'Edit'}
            onPress={this.handleEditPress}
            buttonStyle={styles.button}
          />
          <TextButton
            text="Remove"
            onPress={this.removeTodo}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 6,
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'stretch',
    padding: 4,
  }
});

export default Todo;