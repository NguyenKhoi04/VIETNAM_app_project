import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');

// Link Localtunnel của bạn
const API_STATUS_URL = 'http://localhost:5000/api/status';

export default function WelcomeScreen({ navigation }: any) {
  const [status, setStatus] = useState<string>('Đang kiểm tra kết nối Backend...');
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
  fetch(API_STATUS_URL)
    .then((res) => res.json())
    .then((data) => {
      setStatus(data.message || 'Kết nối MySQL thành công!');
      setIsConnected(true);
    })
    .catch((error) => {
      // ĐỂ XEM LỖI CỤ THỂ, BẠN CÓ THỂ PRINT CÁI error NÀY RA
      console.error('Lỗi kết nối chi tiết:', error);
      setStatus('Không thể kết nối đến Backend');
      setIsConnected(false);
    });
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../../../assets/images/welcome-illustration.png')} 
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Luyện Viết Chính Tả</Text>
        <Text style={styles.title}>và Tập Đọc Tiếng Việt</Text>
        
        <Text style={styles.subtitle}>
          Cải thiện kỹ năng tiếng Việt qua các bài tập vui nhộn và hiệu quả
        </Text>

        {/* Nút Đăng Nhập */}
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.primaryButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        {/* Nút Đăng Ký */}
        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.secondaryButtonText}>Đăng Ký</Text>
        </TouchableOpacity> 
      </View>
     
      {/* Hiển thị trạng thái kết nối Database/Backend */}
        <View style={styles.statusBadge}>
          <Text style={[styles.statusText, { color: isConnected ? '#16a34a' : '#dc2626' }]}>
            ● {status}
          </Text>
        </View>

    </SafeAreaView>
  );
}

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
    marginBottom: 24,
  },
  illustration: {
    width: width * 0.75,
    height: 240,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 20,
    lineHeight: 22,
  },
  statusBadge: {
    backgroundColor: '#EEF2F6',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 24,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2563EB',
  },
  secondaryButtonText: {
    color: '#2563EB',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});