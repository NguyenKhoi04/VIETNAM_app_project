//Trang chủ cho học sinh tiểu học
// Home_primary.tsx
import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');

const HomePrimary = () => {
  const [selectedClass, setSelectedClass] = useState('Lớp 1');

  const classes = ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5'];

  const features = [
    {
      title: "Phát âm, ghép vần", 
      desc: "Luyện phát âm chuẩn", 
      emoji: "🗣️", 
      bgColor: "#E0F7FA"
    },
    { 
      title: "Tập Đọc", 
      desc: "Đọc & hiểu nghĩa", 
      emoji: "📖", 
      bgColor: "#FFF3E0" 
    },
    { 
      title: "Luyện Viết", 
      desc: "Viết chữ cái, viết từ, viết câu", 
      emoji: "✏️",
      bgColor: "#E8F5E9"
    },
    { 
      title: "Chính Tả", 
      desc: "Nghe và viết đúng chính tả", 
      emoji: "✍️", 
      bgColor: "#E0F2FE" 
    },
    { 
      title: "Ôn Tập", 
      desc: "Ôn lại kiến thức đã học", 
      emoji: "📚",
      bgColor: "#CCCCFF"}
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chào con đang học {selectedClass}! 👋</Text>
        <Text style={styles.headerSubtitle}>Hôm nay con muốn luyện kỹ năng gì nào?</Text>
      </View>

            {/* Chọn Lớp - Hiển thị 2 hàng */}
      <View style={styles.classContainer}>
        <View style={styles.classGrid}>
          {classes.map((cls, index) => (
            <TouchableOpacity
              key={cls}
              style={[
                styles.classButton,
                selectedClass === cls && styles.classButtonActive
              ]}
              onPress={() => setSelectedClass(cls)}
            >
              <Text style={[
                styles.classText,
                selectedClass === cls && styles.classTextActive
              ]}>
                {cls}
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
              onPress={() => alert(`Đang mở: ${feature.title}`)}
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
  headerTitle: { fontSize: 28, fontWeight: '700', color: 'white' },
  headerSubtitle: { fontSize: 16, color: '#BAE6FD', marginTop: 4 },

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
    paddingHorizontal: 24,
    paddingVertical: 11,
    borderRadius: 30,
    backgroundColor: '#F1F5F9',
    minWidth: 80,
    alignItems: 'center',
  },
  classButtonActive: {
    backgroundColor: '#2563EB',
  },
  classText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748B',
  },
  classTextActive: {
    color: 'white',
  },

  mainContent: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 100 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 20,
  },

  /* Grid cải tiến - đẹp và vừa màn hình */
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  featureCard: {
    width: (width - 56) / 2,     // Vừa khít 2 cột
    aspectRatio: 1,              // Làm thẻ vuông đẹp
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  emojiContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  featureEmoji: { fontSize: 42 },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 6,
  },
  featureDesc: {
    fontSize: 13.5,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },

    /* Footer */
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
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
    paddingVertical: 6,
  },
  footerIcon: {
    fontSize: 26,
    marginBottom: 4,
  },
  footerText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
  footerTextActive: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '700',
  },
});

export default HomePrimary;