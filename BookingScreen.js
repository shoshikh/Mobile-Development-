import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Booking Screen</Text>
            <Button
                title="Confirm Booking"
                onPress={() => alert('Booking Confirmed')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BookingScreen;
