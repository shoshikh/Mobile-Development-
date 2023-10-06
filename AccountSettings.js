import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const AccountSettings = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tif, setTif] = useState('');
    const [language, setLanguage] = useState('English');

    const handleSubmit = () => {
        // Handle the submit action
        Alert.alert('Information submitted');
    };

    const handleChangeCode = () => {
        // Handle the change code action
    };

    const handleDeleteAccount = () => {
        // Handle the delete account action
        Alert.alert('Account deleted');
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Name</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                onChangeText={setName}
                value={name}
            />

            <Text>Email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                onChangeText={setEmail}
                value={email}
            />

            <Text>TIF</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                onChangeText={setTif}
                value={tif}
            />

            <Text>Language</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                onChangeText={setLanguage}
                value={language}
            />

            <Button title="Submit" onPress={handleSubmit} />

            <Button title="Change Code" onPress={handleChangeCode} style={{ marginTop: 20 }} />

            <Button title="Delete My Account" onPress={handleDeleteAccount} style={{ marginTop: 20 }} />
        </View>
    );
};

export default AccountSettings;
