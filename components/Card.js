import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children, style }) => (
    <View style={{ ...styles.card, ...style }}> {children} </View>
);

// function Card({ children, style }) {
//     return <View style={{ ...styles.card, ...style }}> {children} </View>;
// }

const styles = StyleSheet.create({
    card: {
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
});

export default Card;
