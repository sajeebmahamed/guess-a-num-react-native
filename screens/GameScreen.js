import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    /* eslint no-param-reassign: 0 */
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndmNum = Math.floor(Math.random() * (min - max)) + min;

    if (rndmNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndmNum;
};

const GameScreen = ({ userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
    return (
        <View style={styles.screen}>
            <Text> Opponents Guess </Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={() => {}} />
                <Button title="Greater" onPress={() => {}} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxHeight: '80%',
    },
});

export default GameScreen;
