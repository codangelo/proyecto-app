import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './style';
import Numbers from '../../components/atoms/number/index'


const GameScreen = (props) => {
    const { userOptions } = props
    const [guess, setGuess] = useState('')

    const randomNumber = (min,max) => {
        setGuess( Math.floor(Math.random() * (max - min) + min) + 1);
    }

    
    return (
        <View style={styles.container}>
            <Text style={styles.subtitulo}>La suposicion del oponente es:</Text>
            <Numbers number={guess} />
            <View style={styles.btnContainer}>
                <Button title="Menor" onPress={() => {}} />
                <Button title="Mayor" onPress={() => {}} />
            </View>


        </View>
    )
}

export default GameScreen

