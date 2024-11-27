import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import SalonReservationScreen from './src/screens/SalonReservationScreen';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <HomeScreen />
            {/* Anda bisa menambahkan navigasi atau layar lainnya di sini */}
            <SalonReservationScreen />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
