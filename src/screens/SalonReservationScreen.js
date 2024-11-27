import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import Button from '../components/Button';

const SalonReservationScreen = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleReservation = () => {
        if (name && date && time) {
            Alert.alert('Reservasi Berhasil', `Selamat, ${name}! Reservasi Anda pada tanggal ${date} pukul ${time} telah berhasil.`);
        } else {
            Alert.alert('Reservasi Gagal', 'Harap lengkapi semua kolom!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reservasi Salon</Text>

            <TextInput
                style={styles.input}
                placeholder="Nama Lengkap"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#E6A3B5"
            />

            <TextInput
                style={styles.input}
                placeholder="Tanggal (dd/mm/yyyy)"
                value={date}
                onChangeText={setDate}
                placeholderTextColor="#E6A3B5"
            />

            <TextInput
                style={styles.input}
                placeholder="Waktu (hh:mm)"
                value={time}
                onChangeText={setTime}
                placeholderTextColor="#E6A3B5"
            />

            <Button title="Reservasi" onPress={handleReservation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 4, // Mengambil seluruh ruang layar
        justifyContent: 'flex-start', // Posisikan konten di atas layar
        alignItems: 'center', // Pusatkan secara horizontal
        backgroundColor: '#FCE4EC', // Warna latar belakang
        paddingTop: 0, // Memberikan jarak dari bagian atas layar
        paddingHorizontal: 30, // Jarak kiri dan kanan
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        color: '#F06292',
        marginBottom: 20, // Jarak bawah setelah judul
    },
    input: {
        width: '90%', // Lebar input sedikit berkurang agar ada ruang
        height: 50,
        borderColor: '#F48FB1',
        borderWidth: 2,
        marginBottom: 15, // Jarak antar input
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
    },
});

export default SalonReservationScreen;
