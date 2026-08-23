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
  ImageBackground
} from 'react-native';
 

 const Footer = () => {
  return (
    <View style={styles.footer}>
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
    </View>
  );
}

      const styles = StyleSheet.create({
        
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

export default Footer;