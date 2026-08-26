import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Sử dụng thư viện chuẩn
import { useRouter, useLocalSearchParams } from 'expo-router';
import Header from '../Header';
import Footer from '../Footer';

const { width } = Dimensions.get('window');

const ReadingWeekDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{
    ho_ten?: string;
    ten_ky_nang?: string;
  }>();

  const [name, setName] = useState<string>(params.ho_ten || '');
  const [tenKyNang, setTenKyNang] = useState<string>(
    params.ten_ky_nang || 'Tập Đọc'
  );

  useEffect(() => {
    if (params.ho_ten) setName(params.ho_ten);
    if (params.ten_ky_nang) setTenKyNang(params.ten_ky_nang);
  }, [params.ho_ten, params.ten_ky_nang]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={null} route={{ params: { ho_ten: name } }} />

      {/* Banner Kỹ năng */}
      {/* <View style={styles.bannerContainer}>
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
      </View> */}

      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Grid hình ảnh bài học */}
        <View style={styles.imageGrid}>
          <View style={styles.imageRow}>
            <Image
              source={require('@/assets/images/hsth_abc.png')}
              style={styles.imageBox}
              resizeMode="cover"
            />
            <Image
              source={require('@/assets/images/hsth_IK.png')}
              style={styles.imageBox}
              resizeMode="cover"
            />
          </View>

          <View style={styles.imageRow}>
            <Image
              source={require('@/assets/images/hsth_RS.png')}
              style={styles.imageBox}
              resizeMode="cover"
            />
          </View>
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  imageGrid: {
    marginVertical: 12,
    gap: 12,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  imageBox: {
    width: (width - 16 * 2 - 12) / 2,
    height: (width - 16 * 2 - 12) / 2,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
});

export default ReadingWeekDetails;