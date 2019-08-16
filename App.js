import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './components/TodoList';

const mockTodos = [
  {
    task: 'Task 1',
    completed: false,
  },
  {
    task: 'Task 2',
    completed: false,
  },
  {
    task: 'Task 3',
    completed: false,
  },
  {
    task: 'Task 4',
    completed: false,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList todos={mockTodos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 10,
  },
});
