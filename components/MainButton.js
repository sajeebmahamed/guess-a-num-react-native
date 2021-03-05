import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';

const MainButton = ({ onPress, children }) => (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}> {children} </Text>
        </View>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
    },
});

export default MainButton;
