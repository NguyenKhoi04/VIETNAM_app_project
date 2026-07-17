//Lựa chọn phong cách học cho người nước ngoài
import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StyleForeigners = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Lựa chọn phong cách học cho người nước ngoài</Text>
        </SafeAreaView>
    );
};