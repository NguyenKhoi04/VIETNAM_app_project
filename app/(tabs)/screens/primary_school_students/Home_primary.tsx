import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  Dimensions, 
  Alert 
} from 'react-native';

const { width } = Dimensions.get('window');
//const API_USERINFO_URL = 'http://192.168.102.12:5000/api/user-info';

const API_USERINFO_URL = 'http://192.168.1.147:5000/api/user-info';

interface ClassInfo {
  lop: string;
}

const HomePrimary = ({ navigation, route }: any) => {
  //const [selectedClass, setSelectedClass] = useState('Lớp 1');
  
  const [name, setName] = useState<string>(route?.params?.ho_ten || '');

  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');

  //const classes = ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5'];

  const features = [
    { title: "Phát âm, ghép vần", desc: "Luyện phát âm chuẩn", emoji: "🗣️", bgColor: "#E0F7FA" },
    { title: "Tập Đọc", desc: "Đọc & hiểu nghĩa", emoji: "📖", bgColor: "#FFF3E0" },
    { title: "Luyện Viết", desc: "Viết chữ cái, viết từ, viết câu", emoji: "✏️", bgColor: "#E8F5E9" },
    { title: "Chính Tả", desc: "Nghe và viết đúng chính tả", emoji: "✍️", bgColor: "#E0F2FE" },
    { title: "Ôn Tập", desc: "Ôn lại kiến thức đã học", emoji: "📚", bgColor: "#CCCCFF" }
  ];

  useEffect(() => {
    if (route?.params?.ho_ten) {
      setName(route.params.ho_ten);
    }


   const fetchClasses = async () => {
    try {
      const response = await fetch('http://192.168.1.147:5000/api/classes');
      const data = await response.json();
      
      // Kiểm tra nếu API trả về đúng định dạng mảng
      if (Array.isArray(data)) {
        setClasses(data);
        if (data.length > 0) {
          setSelectedClass(`Lớp ${data[0].lop}`);
        }
      } else {
        console.error('Dữ liệu API không phải là mảng (có thể backend báo lỗi):', data);
        setClasses([]);
      }
    } catch (error) {
      console.error('Lỗi kết nối tới Server:', error);
      setClasses([]);
    }
  };

  fetchClasses();

  }, [route?.params?.ho_ten]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Chào {name ? `con ${name}` : 'con'} đang học {selectedClass}! 👋
        </Text>
        <Text style={styles.headerSubtitle}>Hôm nay con muốn luyện kỹ năng gì nào?</Text>
      </View>

            {/* Chọn Lớp - Hiển thị 2 hàng */}
      <View style={styles.classContainer}>
        <View style={styles.classGrid}>
          {Array.isArray(classes) && classes.map((cls, index) => (
            <TouchableOpacity
              key={cls.lop ?? index} // Dùng cls.lop làm key
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

      <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Các kỹ năng hôm nay ✨</Text>

        {/* Grid 2x2 đẹp hơn */}
        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.featureCard, { backgroundColor: feature.bgColor }]}
              onPress={() => Alert.alert('Thông báo', `Đang mở: ${feature.title}`)}
              activeOpacity={0.8}
            >
              <View style={styles.emojiContainer}>
                <Text style={styles.featureEmoji}>{feature.emoji}</Text>
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDesc}>{feature.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
            {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => {}}>
          <Text style={styles.footerIcon}>🏠</Text>
          <Text style={styles.footerTextActive}>Trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => {}}>
          <Text style={styles.footerIcon}>📚</Text>
          <Text style={styles.footerText}>Bài học</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => {}}>
          <Text style={styles.footerIcon}>🏆</Text>
          <Text style={styles.footerText}>Thành tích</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => {}}>
          <Text style={styles.footerIcon}>👤</Text>
          <Text style={styles.footerText}>Cá nhân</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFF' },

  header: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: { fontSize: 24, fontWeight: '700', color: 'white' },
  headerSubtitle: { fontSize: 15, color: '#BAE6FD', marginTop: 4 },
  classContainer: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  classGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  classButton: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 30,
    backgroundColor: '#F1F5F9',
    minWidth: 75,
    alignItems: 'center',
  },
  classButtonActive: {
    backgroundColor: '#2563EB',
  },
  classText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#64748B',
  },
  classTextActive: {
    color: 'white',
  },

  mainContent: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 100 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 18,
  },

  /* Grid cải tiến - đẹp và vừa màn hình */
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  featureCard: {
    width: (width - 56) / 2,
    aspectRatio: 1,
    borderRadius: 24,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  emojiContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
  },
  featureEmoji: { fontSize: 34 },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 12.5,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 16,
  },

    /* Footer */
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 4,
  },
  footerIcon: { fontSize: 22, marginBottom: 2 },
  footerText: { fontSize: 12, color: '#64748B', fontWeight: '500' },
  footerTextActive: { fontSize: 12, color: '#2563EB', fontWeight: '700' },
});

export default HomePrimary;