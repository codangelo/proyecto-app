import React, { useState } from 'react';
import { styles } from './styles';
import { View, TouchableOpacity, Text } from 'react-native'

const TaskList = ({ task, deleteTask }) => {

    const [completed, setCompleted] = useState(false);

    const status = () => {

        setCompleted(!completed)
    }

    return (
        <View>
            <Text style={completed ? styles.comp : styles.norm}>{task.task}</Text>
            <TouchableOpacity onPress={() => deleteTask(task.id)}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => status()}>
                <Text style={styles.button}>Done</Text>
            </TouchableOpacity>
        </View>
    )

}

export default TaskList;
