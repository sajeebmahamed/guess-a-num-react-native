import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = ({ userNumber, roundsNumber, onRestart }) => (
    /* eslint global-require: 0 */
    <View style={styles.screen}>
        <Text> The game is over! </Text>
        <View style={styles.imageContainer}>
            <Image
                source={require('../assets/images/success.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
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
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default GameOverScreen;
