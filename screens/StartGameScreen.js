import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../constants/colors';

const StartGameScreen = () => (
    <View style={styles.screen}>
        <Text style={styles.title}> Start A New Game </Text>
        <View style={styles.inputContainer}>
            <Text> Select A Number </Text>
            <TextInput />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button style={styles.button} title="Reset" color={colors.accent} />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button} title="Confirm" color={colors.primary} />
                </View>
            </View>
        </View>
    </View>
);
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxHeight: '80%',
        alignItems: 'center',
        // ios shadow style start
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // ios shadow style end
        // adroid shadow style start
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        // adroid shadow style start
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
});

export default StartGameScreen;
