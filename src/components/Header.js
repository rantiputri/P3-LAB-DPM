import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>RR Salon</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F06292', 
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 2, 
        borderBottomColor: '#E57373', 
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Header;
