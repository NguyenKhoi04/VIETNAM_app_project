//Bạn muốn luyện tập thường xuyên như thế nào
import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Practice = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Việc luyện tập thường xuyên như thế nào</Text>
        </SafeAreaView>
    );
};