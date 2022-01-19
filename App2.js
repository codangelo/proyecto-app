/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';

import TaskList from './src/components/molecules/taskList/index'
import Title from './src/components/atoms/title/index'
import Header from './src/components/molecules/header/index'
import Card from './src/components/molecules/card/index'

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);


  const onChange = (text) => {
    console.warn({ text });
    setTask(text);
  }

  const addTask = () => {
    setTaskList([...taskList, { id: Math.random() + 1, task }]);
    setTask('');
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }



  return (
    <View style={styles.container}>
      <Header title="To Do List" />
      <Title texto="Crea tu lista de tareas" />
      <Card texto="Elegi tarea" />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Ingrese una tarea'
          onChangeText={(text) => onChange(text)}
          value={task}
        />
        <Button
          color='#653239'
          title='Guardar'
          onPress={() => addTask()}
          disabled={task.trim().length === 0}
        />

      </View>
      < View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista de tareas</Text>
        {taskList.length > 0 ? (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            refreshing={true}
            data={taskList}
            renderItem={({ item }) => <TaskList task={item} deleteTask={deleteTask} />}
          />

        ) : (
            <Text>No hay tareas</Text>
          )}
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  listContainer: {
    padding: 20,
  },
  listTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#228CDB',
  },
});

export default App;
