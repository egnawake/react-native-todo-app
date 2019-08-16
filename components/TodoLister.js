import React from 'react';
import { ScrollView } from 'react-native';

import Todo from './Todo';

class TodoLister extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(index) {
    this.props.onTodoRemove(index);
  }

  editTodo(index, task) {
    this.props.onTodoEdit(index, task);
  }

  render() {
    return (
      <ScrollView>
        {this.props.todos.map((item, index) => (
          <Todo
            key={`todo-${index}`}
            todo={item}
            onTodoRemove={this.removeTodo.bind(this, index)}
            onTodoEdit={this.editTodo.bind(this, index)}
          />
        ))}
      </ScrollView>
    );
  }
}

export default TodoLister;