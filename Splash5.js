import React from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import useNavigation



const Splash5 = () => {

    const navigation = useNavigation(); 

    const handleSubmit = () => {
        navigation.navigate('Login');
      };
    const handleSubmit2 = () => {
        navigation.navigate('Login');
      };
      const handleSubmit3 = () => {
        navigation.navigate('SplashTwo');
      };
      const handleSubmit4 = () => {
        navigation.navigate('Splash3');
      };
      const handleSubmit5 = () => {
        navigation.navigate('Splash4');
      };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ECB7B7" barStyle="light-content" />
      <TouchableOpacity onPress={handleSubmit2}>
      <Text style={styles.skipText}>تخطي</Text>
      </TouchableOpacity>
      <View style={styles.whiteBackground}>
        <View style={styles.dotsContainer}>
        <TouchableOpacity onPress={handleSubmit3}>
          <View style={styles.dot} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit4}>
          <View style={styles.dot2} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit5}>
          <View style={styles.dot3} />
          </TouchableOpacity>
          <View style={styles.dot4} />
        </View>
        <Text style={styles.welcomeText}>ابحث عن شريك حياتك المسلم</Text>
        <Text style={styles.subtitleText}>
        ستطابقك خوارزميتنا الذكية مع شريكك المسلم
        </Text>
        <View style={styles.buttonBackground}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.buttonText}>متابعة</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECB7B7',
  },
  skipText: {
    position: 'absolute',
    left: 30,
    top: 46,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Cairo',
    fontWeight: '400',
  },
  whiteBackground: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    top: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    marginTop: -85,
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: '#EEEEEE',
    borderRadius: 9999,
  },
  dot2: {
    width: 12,
    height: 12,
    backgroundColor: '#EEEEEE',
    borderRadius: 9999,
  },
  dot3: {
    width: 12,
    height: 12,
    backgroundColor: '#EEEEEE',
    borderRadius: 9999,
  }, 
  dot4: {
    width: 12,
    height: 12,
    backgroundColor: '#ECB7B7',
    borderRadius: 9999,
  },
  welcomeText: {
    color: '#4B5867',
    fontSize: 28,
    fontFamily: 'Cairo',
    fontWeight: '700',
    lineHeight: 34,
    marginTop: 80,
  },
  subtitleText: {
    color: '#AAAAAA',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '500',
    lineHeight: 20,
    flexWrap: 'wrap',
    marginTop: 60,
  },
  buttonBackground: {
    width: '70%',
    height: 60,
    backgroundColor: '#ECB7B7',
    borderRadius: 30,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Cairo',
    fontWeight: '600',
    lineHeight: 28,
  },
});

export default Splash5;