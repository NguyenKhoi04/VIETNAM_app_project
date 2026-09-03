//Danh mục đọc

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useRouter, useLocalSearchParams } from 'expo-router';
import Header, { ClassInfo } from '../Header';
import Footer from '../Footer';
import { API_ENDPOINTS } from '@/src/config/api';

const { width } = Dimensions.get('window');



interface Feature {
  id_ky_nang: number;
  ma_ky_nang: string;
  ten_ky_nang: string;
  mo_ta: string;
  icon: string;
  lop: number;
  url_link?: string;
  ten_chuong_trinh?: string;
  bgColor?: string;
}

const BG_COLORS = ['#E0F7FA', '#FFF3E0', '#E8F5E9', '#E0F2FE', '#CCCCFF'];

export default function PracticeReadingScreen() {

  const params = useLocalSearchParams<{
    ho_ten?: string;
    ten_ky_nang?: string;
  }>();

  const [name, setName] = useState<string>(params.ho_ten || '');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const router = useRouter();
  const navigation = router; // Sử dụng router như navigation
  const [classes, setClasses] = useState<ClassInfo[]>([]);
  
  // Ưu tiên lấy tên kỹ năng từ params, fallback "Tập Đọc"
  const [tenKyNang, setTenKyNang] = useState<string>(
    params.ten_ky_nang || 'Tập Đọc'
  );

  useEffect(() => {
    if (params.ho_ten) setName(params.ho_ten);
    if (params.ten_ky_nang) setTenKyNang(params.ten_ky_nang);
  }, [params.ho_ten, params.ten_ky_nang]);

   const handleNavigate = (url?: string, tenKyNang?: string) => {
    if (!url) {
      Alert.alert('Thông báo', `Tính năng "${tenKyNang}" đang được phát triển!`);
      return;
    }

    const path = url.startsWith('/') ? url : `/${url}`;

    router.push({
      pathname: path as any,
      params: {
        ho_ten: name,
        ten_ky_nang: tenKyNang || '',
      },
    });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Header
      name={name}
      classes={classes}
      selectedClass={selectedClass}
      setSelectedClass={setSelectedClass}
      navigation={navigation}
      route={router}
    />

      {/* Banner Kỹ năng - ĐÃ SỬA */}
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={require('@/assets/images/banner-chuong-trinh.png')}
          style={styles.bannerBackground}
          resizeMode="contain"
        >
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>KỸ NĂNG</Text>
            <Text style={styles.bannerSubtitle}>{tenKyNang}</Text>
          </View>
        </ImageBackground>
      </View>

      
      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.imageRow}>
          {/* Grid 4 hình */}
          <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                router.push(
                  '/(tabs)/screens/primary_school_students/skills_reading_class3students/reading_topic1_class3details' as any
                )
              }
            >
              <Image
                source={require('@/assets/images/chude1.png')}
                style={styles.imageBox}
                resizeMode="cover"
              />
            </TouchableOpacity>
      
          </View>
        
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  /* Banner Chương trình */
  bannerContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 8,
    marginBottom: 5,
  },

  bannerBackground: {
    width: '100%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bannerTextContainer: {
    alignItems: 'center',
    marginTop: -25,
  },

  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E53E3E',
    letterSpacing: 0.5,
  },

  bannerSubtitle: {
    fontSize: 14,
    color: '#2B6CB0',
    marginTop: 2,
    textTransform: 'uppercase',
  },

  mainContent: {
    flex: 1,
  },

    sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 16,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  imageGrid: {
  marginVertical: 12,
  gap: 12,                    // khoảng cách giữa 2 hàng
},
imageRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 12,                    // khoảng cách giữa 2 ảnh trong 1 hàng
},
imageBox: {
  width: (width - 16 * 2 - 12) / 2,   // tính đúng 2 cột
  height: (width - 16 * 2 - 12) / 2,  // vuông
  borderRadius: 12,
  backgroundColor: '#E5E7EB',
},
});