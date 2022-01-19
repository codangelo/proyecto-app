import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from './style';
import Input from '../../atoms/input/index';

const Card = ({texto, color, btnColor, handleOnChange, value, autoFocus, autoComplete, keyboardType, handleOnConfirm, handleOnClean}) =>{
    return(
        <View style={[styles.container, {backgroundColor: color}]}>
            <Text style={styles.text}>{texto}</Text>
            <Input onChangeText={handleOnChange} value={value} autoFocus={autoFocus} autoComplete={autoComplete} keyboardType={keyboardType}/>
            <View style={styles.botones}>
                <Button title="Limpiar" color={btnColor} onPress={() => handleOnClean()}/>
                <Button title="Confirmar" color={btnColor} onPress={() => handleOnConfirm()}/>

            </View>
        </View>
    )
}

export default Card;