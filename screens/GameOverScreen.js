import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The game is over!</Text>
            <Text>Number of rounds: {props.rounds}</Text>
            <Text>Number was: {props.number}</Text>
            <Button title="New game" color={Colors.accent} onPress={props.newGame} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;