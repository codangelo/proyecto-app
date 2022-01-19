import React from 'react';
import {View, Text} from 'react-native'
import { styles } from './style';


const Title = ({texto, color}) =>{
    return(
        <View style={[styles.container, {backgroundColor: color}]}>
            <Text style={styles.text}>{texto}</Text>
        </View>
    )
}

export default Title