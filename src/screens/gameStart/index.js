import React from 'react'
import { View, Text, Button, Header } from 'react-native'
import { styles } from './style';
import { theme } from '../../utils/constants/theme'


const GameStart = () => {
    return (
        <View style={styles.container}>
            <Header header="Adivina el número" color={theme.primaryColor} />
            <Title texto="Empieza a jugar" color={theme.primaryColor} />
            <Card
                texto="Elegí un número"
                btnColor={theme.btnColor}
                color={theme.secondaryColor}
                handleOnChange={handleOnChange}
                value={number}
                autoFocus={true}
                autoComplete='off'
                keyboardType='numeric'
                handleOnClean={handleOnClean}
                handleOnConfirm={handleOnConfirm}
            />
            {confirmedOutput}

        </View>
    )
}

export default GameStart