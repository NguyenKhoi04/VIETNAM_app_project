// Lựa chọn 1 trong 4 kỹ năng: Nghe, Nói, Đọc, Viết
import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelectSkill() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Lựa chọn 1 trong 4 kỹ năng: Nghe, Nói, Đọc, Viết</Text>
        </SafeAreaView>
    );
};