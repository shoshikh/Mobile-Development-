import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CarDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Car Details Screen</Text>
            <Button
                title="Book This Car"
                onPress={() => navigation.navigate('Booking')}
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

export default CarDetailsScreen;
