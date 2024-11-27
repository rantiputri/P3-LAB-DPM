// Contoh fungsi untuk memanggil API
const bookReservation = async (name, date, time) => {
    try {
        const response = await fetch('https://api.example.com/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, date, time }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export { bookReservation };
