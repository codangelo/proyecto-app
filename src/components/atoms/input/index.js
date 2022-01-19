import React from 'react';
import {View, TextInput} from 'react-native'
import { styles } from './style';

const Input = ({onChangeText, ...props}) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} {...props} onChangeText={(value) => onChangeText(value)} />
        </View>
    )
}

export default Input; 