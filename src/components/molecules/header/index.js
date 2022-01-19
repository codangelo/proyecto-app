import React from 'react';
import {View, Text} from 'react-native'
import { styles } from './style';


const Header = ({header, color}) =>{
    return(
        <View style={[styles.container, {backgroundColor: color}]}>
            <Text style={styles.text}>{header}</Text>
        </View>
    )
}

export default Header