import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const DesireScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          {/* Nút quay lại */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backIcon}>◀️</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Đâu là lý do chính bạn muốn học tiếng Việt?</Text>

          {/* Danh sách lựa chọn */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Giao tiếp hàng ngày</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Du lịch tại Việt Nam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Học tập / Làm việc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Yêu thích văn hóa Việt Nam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Giao tiếp với gia đình / bạn bè người Việt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Khác</Text>
            </TouchableOpacity>
          </View>

          {/* Nút Tiếp tục */}
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate('Home')} // Thay bằng màn hình chính
          >
            <Text style={styles.continueText}>Hoàn thành</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#2563EB' 
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: { 
    backgroundColor: 'white', 
    borderRadius: 24, 
    padding: 24,
    paddingBottom: 40,
  },
  backButton: { 
    alignSelf: 'flex-start', 
    marginBottom: 20 
  },
  backIcon: { 
    fontSize: 28, 
    color: '#64748B' 
  },
  title: { 
    fontSize: 23, 
    fontWeight: '700', 
    textAlign: 'center', 
    marginBottom: 32,
    lineHeight: 30,
  },
  optionsContainer: {
    marginBottom: 30,
  },
  option: {
    padding: 18,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    marginBottom: 12,
  },
  optionText: { 
    fontSize: 18, 
    color: '#1E3A8A' 
  },
  continueButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    borderRadius: 16,
  },
  continueText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600', 
    textAlign: 'center' 
  },
});

export default DesireScreen;