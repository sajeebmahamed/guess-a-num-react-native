import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = ({ userNumber, roundsNumber, onRestart }) => (
    <View style={styles.screen}>
        <Text> The game is over! </Text>
        <Text> Number of rounds: {roundsNumber} </Text>
        <Text> Number was: {userNumber} </Text>
        <Button title="NEW GAME" onPress={onRestart} />
    </View>
);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GameOverScreen;
