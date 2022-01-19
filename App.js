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
import Number from './src/components/atoms/number/index'
import GameScreen from './src/screens/gameScreen/index'
import GameStart from './src/screens/gameStart';



const App = () => {
  /*   const [task, setTask] = useState('');
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
    } */

  const [number, setNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [start, setStart] = useState(false);
  const [userNumber, setUserNumber] = useState('')

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);

  }

  let content = <GameStart onStartGame={handleStartGame}/>

  if(useNumber) {
    content = <GameScreen/>
  }



  const handleOnChange = (input) => {
    console.warn(input);
    setNumber(input);
  }

  const handleOnClean = () => {
    setNumber('')
  }

  const handleOnConfirm = () => {
    const choseNumber = parseInt(number);
    if (choseNumber === NaN || choseNumber < 0 || choseNumber > 99) return

    setConfirmed(true)
    setSelectedNumber(choseNumber)
    setNumber('')
  }

  const handleStart = () =>{
    setStart(true)
  }

  const confirmedOutput = confirmed ? (
    <View style={styles.confirmedContainer}>
      <Text style={styles.confirmedText}>El número elegido es:</Text>
      <Number number={selectedNumber} />
      <Button color='#E88873' title="Empezar juego" onPress={() => handleStart()}/>
    </View>) : null;

  return (
    <View style={styles.container}>
      {content}
    </View>

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
  confirmedContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.25,
  },
  confirmedText:{
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 10,


  },
 
});

export default App;
