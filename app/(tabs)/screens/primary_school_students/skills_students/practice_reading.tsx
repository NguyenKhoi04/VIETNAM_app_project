// Kỹ năng tập đọc
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  Dimensions, 
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Footer from '../Footer';
import { API_ENDPOINTS } from '@/src/config/api';

const { width } = Dimensions.get('window');

interface ClassInfo {
  lop: number | string;
  ten_chuong_trinh?: string;
}

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
  const router = useRouter();
  const params = useLocalSearchParams<{ ho_ten?: string }>();

  const [name, setName] = useState<string>(params.ho_ten || '');
  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [tenkynang, setTenkynang] = useState<string>(''); 
  const [features, setFeatures] = useState<Feature[]>([]);

  // 1. Cập nhật họ tên khi param thay đổi
  useEffect(() => {
    if (params.ho_ten) {
      setName(params.ho_ten);
    }
  }, [params.ho_ten]);

  // 2. Lấy danh sách lớp
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.GET_CLASSES);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setClasses(data);
          setSelectedClass(`Lớp ${data[0].lop}`);
        } else {
          setClasses([]);
        }
      } catch (error) {
        console.error('Lỗi lấy danh sách lớp:', error);
      }
    };

    fetchClasses();
  }, []);

  // 3. Lấy danh sách kỹ năng theo lớp
  useEffect(() => {
    if (!selectedClass) return;

    const lopNumber = selectedClass.replace('Lớp ', '').trim();

    const fetchSkillsData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINTS.GET_SKILLS}?lop=${lopNumber}`);
        const data: Feature[] = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setTenkynang(data[0]?.ten_chuong_trinh || data[0]?.ten_ky_nang || '');

          const formattedFeatures = data.map((item, index) => ({
            ...item,
            bgColor: BG_COLORS[index % BG_COLORS.length],
          }));

          setFeatures(formattedFeatures);
        } else {
          setTenkynang('');
          setFeatures([]);
        }
      } catch (error) {
        console.error('Lỗi lấy danh sách kỹ năng:', error);
      }
    };

    fetchSkillsData();
  }, [selectedClass]);

  // Xử lý chuyển trang
  const handleFeaturePress = (feature: Feature) => {
    if (feature.url_link) {
      router.push(feature.url_link as any);
    } else {
      Alert.alert('Thông báo', `Tính năng: ${feature.ten_ky_nang}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Chào {name ? `con ${name}` : 'con'} đang học {selectedClass}! 👋
        </Text>
        <Text style={styles.headerSubtitle}>Hôm nay con muốn luyện kỹ năng gì nào?</Text>
      </View>

      {/* Chọn Lớp */}
      <View style={styles.classContainer}>
        <View style={styles.classGrid}>
          {Array.isArray(classes) && classes.map((cls, index) => (
            <TouchableOpacity
              key={cls.lop ?? index}
              style={[
                styles.classButton,
                selectedClass === `Lớp ${cls.lop}` && styles.classButtonActive
              ]}
              onPress={() => setSelectedClass(`Lớp ${cls.lop}`)}
            >
              <Text style={[
                styles.classText,
                selectedClass === `Lớp ${cls.lop}` && styles.classTextActive
              ]}>
                {`Lớp ${cls.lop}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Banner Kỹ năng */}
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={require('@/assets/images/banner-chuong-trinh.png')}
          style={styles.bannerBackground}
          resizeMode="contain"
        >
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>KỸ NĂNG</Text>
            <Text style={styles.bannerSubtitle}>{tenkynang}</Text>
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent}>
        {/* Phần 4 hình ảnh */}
        <View style={styles.imageGrid}>
          <View style={styles.imageRow}>
            <Image
              source={require('@/assets/images/hsth_tuan1.png')}
              style={styles.imageBox}
              resizeMode="cover"
            />
            <Image
              source={require('@/assets/images/hsth_tuan1.png')}
              style={styles.imageBox}
              resizeMode="cover"
            />
          </View>

          <View style={styles.imageRow}>
            <Image
              source={require('@/assets/images/hsth_tuan1.png')}
              style={styles.imageBox}
              resizeMode="cover"
            />
            <Image
              source={require('@/assets/images/hsth_tuan1.png')}
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  classContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  classGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  classButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
  },
  classButtonActive: {
    backgroundColor: '#3B82F6',
  },
  classText: {
    fontSize: 13,
    color: '#374151',
  },
  classTextActive: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  bannerContainer: {
    width: '100%',
    height: 100,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerBackground: {
    width: width - 32,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTextContainer: {
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D97706',
  },
  bannerSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
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
    gap: 8,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  imageBox: {
    flex: 1,
    height: 80,
    borderRadius: 8,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 12,
  },
  featureCard: {
    width: (width - 44) / 2,
    padding: 14,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  emojiContainer: {
    marginBottom: 6,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111827',
  },
  featureDesc: {
    fontSize: 12,
    color: '#4B5563',
    marginTop: 4,
  },
});