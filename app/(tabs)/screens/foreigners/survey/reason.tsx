//Lý do chính đáng bạn muốn học tiếng Việt
import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Reason = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Lý do chính đáng bạn muốn học tiếng Việt</Text>
        </SafeAreaView>
    );
};