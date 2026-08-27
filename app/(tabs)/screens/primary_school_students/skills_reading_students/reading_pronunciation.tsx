//Phát âm tập đọc
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
  Pressable,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Header from '../Header';
import Footer from '../Footer';

const { width } = Dimensions.get('window');

export default function PracticeReadingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    ho_ten?: string;
    ten_ky_nang?: string;
  }>();

  const [name, setName] = useState(params.ho_ten || '');
  const [tenKyNang, setTenKyNang] = useState(params.ten_ky_nang || 'Tập Đọc');
  const [tenBaiHoc] = useState('ba    bà    ca    cá');

  useEffect(() => {
    if (params.ho_ten) setName(params.ho_ten);
    if (params.ten_ky_nang) setTenKyNang(params.ten_ky_nang);
  }, [params.ho_ten, params.ten_ky_nang]);

  const playSound = (text: string) => {
    console.log('Phát âm:', text);
    // TODO: gắn expo-av
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={null} route={{ params: { ho_ten: name } }} />

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={require('@/assets/images/banner-chuong-trinh.png')}
          style={styles.bannerBackground}
          resizeMode="contain"
        >
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Bài học</Text>
            <Text style={styles.bannerSubtitle}>{tenBaiHoc}</Text>
          </View>
        </ImageBackground>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ===== Dòng chữ cái a b c ===== */}
        <View style={styles.letterRow}>
          {['a', 'b', 'c'].map((letter) => (
            <Pressable
              key={letter}
              style={({ pressed }) => [
                styles.letterItem,
                pressed && styles.pressed,
              ]}
              onPress={() => playSound(letter)}
            >
              <Text style={styles.letterText}>{letter}</Text>
              <Text style={styles.speaker}>🔊</Text>
            </Pressable>
          ))}
        </View>

        {/* ===== Hàng số 3 | bảng ba | loa ===== */}
        <Pressable
          style={({ pressed }) => [styles.rowItem, pressed && styles.pressed]}
          onPress={() => playSound('ba')}
        >
          <Text style={styles.bigNumber}>3</Text>

          <View style={styles.syllableBox}>
            <View style={styles.topRow}>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>b</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>a</Text>
              </View>
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.syllableText}>ba</Text>
            </View>
          </View>

          <Text style={styles.speaker}>🔊</Text>
        </Pressable>

        {/* ===== Hàng hình bà | bảng bà | loa ===== */}
        <Pressable
          style={({ pressed }) => [styles.rowItem, pressed && styles.pressed]}
          onPress={() => playSound('bà')}
        >
          <Image
            source={require('@/assets/images/hinh_ba.png')}
            style={styles.wordImage}
            resizeMode="contain"
          />

          <View style={styles.syllableBox}>
            <View style={styles.topRow}>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>b</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>a</Text>
              </View>
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.syllableText}>bà</Text>
            </View>
          </View>

          <Text style={styles.speaker}>🔊</Text>
        </Pressable>

        {/* ===== Hàng hình ca | bảng ca | loa ===== */}
        <Pressable
          style={({ pressed }) => [styles.rowItem, pressed && styles.pressed]}
          onPress={() => playSound('ca')}
        >
          <Image
            source={require('@/assets/images/hinh_ca.png')}
            style={styles.wordImage}
            resizeMode="contain"
          />

          <View style={styles.syllableBox}>
            <View style={styles.topRow}>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>c</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>a</Text>
              </View>
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.syllableText}>ca</Text>
            </View>
          </View>

          <Text style={styles.speaker}>🔊</Text>
        </Pressable>

        {/* ===== Hàng hình cá | bảng cá | loa ===== */}
        <Pressable
          style={({ pressed }) => [styles.rowItem, pressed && styles.pressed]}
          onPress={() => playSound('cá')}
        >
          <Image
            source={require('@/assets/images/con_ca.png')}
            style={styles.wordImage}
            resizeMode="contain"
          />

          <View style={styles.syllableBox}>
            <View style={styles.topRow}>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>c</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallLetter}>á</Text>
              </View>
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.syllableText}>cá</Text>
            </View>
          </View>

          <Text style={styles.speaker}>🔊</Text>
        </Pressable>

        {/* ===== Luyện tập cuối ===== */}
        <View style={styles.practiceRow}>
          <Pressable
            style={({ pressed }) => [styles.practiceBox, pressed && styles.pressed]}
            onPress={() => playSound('A, bà')}
          >
            <Text style={styles.practiceText}>A, bà</Text>
            <Text style={styles.speaker}>🔊</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.practiceBox, pressed && styles.pressed]}
            onPress={() => playSound('A, cá')}
          >
            <Text style={styles.practiceText}>A, cá</Text>
            <Text style={styles.speaker}>🔊</Text>
          </Pressable>
        </View>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  /* Chữ a b c - chữ bên trái loa */
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 28,
  },
  letterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 12,
  },
  letterText: {
    fontSize: 42,
    fontWeight: '700',
    color: '#1E3A8A',
  },
  speaker: {
    fontSize: 24,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  /* Hàng chung: số/hình | bảng | loa */
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 12,
  },
  bigNumber: {
    fontSize: 56,
    fontWeight: '800',
    color: '#E11D48',
    width: 60,
    textAlign: 'center',
  },
  wordImage: {
    width: 80,
    height: 80,
  },

  /* Bảng vần */
  syllableBox: {
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
  },
  smallBox: {
    width: 40,
    height: 34,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  smallLetter: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E40AF',
  },
  bottomBox: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  syllableText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },

  /* Luyện tập cuối */
  practiceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  practiceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#64748B',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    width: '47%',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
  },
  practiceText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E3A8A',
  },
});