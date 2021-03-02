import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}> Start A New Game </Text>
                <View style={styles.inputContainer}>
                    <Text> Select A Number </Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
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
        </TouchableWithoutFeedback>
    );
};
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
    input: {
        width: 50,
    },
});

export default StartGameScreen;
