import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { BASE_URL } from '../../../config'; // Import BASE_URL từ config.ts


const { width } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }: any) => {
 
  const [serverStatus, setServerStatus] = useState<string>('Đang kiểm tra kết nối...');
  const [isServerReady, setIsServerReady] = useState<boolean>(false);
  // Kiểm tra kết nối tới Backend MySQL
  useEffect(() => {
    fetch(`${BASE_URL}/api/status`)
      .then((res) => res.json())
      .then((data) => {
        setServerStatus(data.message || 'Kết nối máy chủ thành công');
        setIsServerReady(true);
      })
      .catch((error) => {
        console.error('Lỗi kết nối Backend:', error);
        setServerStatus('Chưa kết nối được với Server Backend');
        setIsServerReady(false);
      });
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
           source={require('../../../assets/images/welcome-illustration.png')} // Thay bằng ảnh minh họa của bạn
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Luyện Viết Chính Tả</Text>
        <Text style={styles.title}>và Tập Đọc Tiếng Việt</Text>
        
        <Text style={styles.subtitle}>
          Cải thiện kỹ năng tiếng Việt qua các bài tập vui nhộn và hiệu quả
        </Text>

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.primaryButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.secondaryButtonText}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  illustrationContainer: {
    marginBottom: 40,
  },
  illustration: {
    width: width * 0.75,
    height: 280,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
    lineHeight: 24,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2563EB',
  },
  secondaryButtonText: {
    color: '#2563EB',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default WelcomeScreen;