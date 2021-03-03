import React, { useState } from 'react';
import {
    Alert,
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';

const StartGameScreen = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmInputHander = () => {
        const choosenNumber = parseInt(enteredValue, 10);
        /* eslint no-restricted-globals: 0 */
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and  99.', [
                { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
            ]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <View style={styles.inputContainer}>
                <Text> You Selected </Text>
                <NumberContainer> {selectedNumber} </NumberContainer>
                <Button title="Start game" onPress={() => onStartGame(selectedNumber)} />
            </View>
            // <View style={styles.inputContainer}>
            // </View>
        );
    }
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
                            <Button
                                style={styles.button}
                                title="Reset"
                                color={colors.accent}
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                style={styles.button}
                                title="Confirm"
                                color={colors.primary}
                                onPress={confirmInputHander}
                            />
                        </View>
                    </View>
                </View>
                {confirmedOutput}
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
