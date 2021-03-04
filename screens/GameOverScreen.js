import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameOverScreen = () => (
    <View style={styles.screen}>
        <Text> The game is over! </Text>
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
