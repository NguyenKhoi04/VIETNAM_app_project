import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { API_ENDPOINTS } from '@/src/config/api';

interface ClassInfo {
  lop: number | string;
  ten_chuong_trinh?: string;
}

interface HeaderProps {
  navigation?: any;
  route?: any;
}

const Header = ({ route }: HeaderProps) => {
  const [name, setName] = useState<string>(route?.params?.ho_ten || '');
  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');

  useEffect(() => {
    if (route?.params?.ho_ten) {
      setName(route.params.ho_ten);
    }
  }, [route?.params?.ho_ten]);

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Chào {name ? `con ${name}` : 'con'} đang học {selectedClass}! 👋
        </Text>
        <Text style={styles.headerSubtitle}>
          Hôm nay con muốn luyện kỹ năng gì nào?
        </Text>
      </View>

      <View style={styles.classContainer}>
        <View style={styles.classGrid}>
          {classes.map((cls, index) => (
            <TouchableOpacity
              key={cls.lop ?? index}
              style={[
                styles.classButton,
                selectedClass === `Lớp ${cls.lop}` && styles.classButtonActive,
              ]}
              onPress={() => setSelectedClass(`Lớp ${cls.lop}`)}
            >
              <Text
                style={[
                  styles.classText,
                  selectedClass === `Lớp ${cls.lop}` && styles.classTextActive,
                ]}
              >
                {`Lớp ${cls.lop}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#F8FAFF' },
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
});

export default Header;