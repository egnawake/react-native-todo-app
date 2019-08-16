import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodoAdder from './TodoAdder';
import TodoLister from './TodoLister';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: props.todos };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(todo) {
    const newState = Object.assign({}, this.state);
    newState.todos.push(todo);
    this.setState(newState);
  }

  removeTodo(index) {
    const newState = Object.assign({}, this.state);
    newState.todos.splice(index, 1);
    this.setState(newState);
  }

  editTodo(index, task) {
    const newState = Object.assign({}, this.state);
    newState.todos[index] = { ...newState.todos[index], task: task };
    this.setState(newState);
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoAdder onTodoAdd={this.addTodo} />
        <TodoLister
          todos={this.state.todos}
          onTodoRemove={this.removeTodo}
          onTodoEdit={this.editTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;