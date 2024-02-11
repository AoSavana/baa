import React from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


// Define the SplashTwo functional component
const Splash3= () => {

    const navigation = useNavigation(); 

    const handleSubmit = () => {
        navigation.navigate('Splash4');
      };
      const handleSubmit2 = () => {
        navigation.navigate('Login');
      };
      const handleSubmit3 = () => {
        navigation.navigate('SplashTwo');
      };
      const handleSubmit5 = () => {
        navigation.navigate('Splash5');
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
          <View style={styles.dot2} />
          <TouchableOpacity onPress={handleSubmit}> 
          <View style={styles.dot3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit5}> 
          <View style={styles.dot4} />
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>التوافق على أساس المبادئ الإسلامية</Text>
        <Text style={styles.subtitleText}>
        قم بمطابقة المستخدمين على أساس القيم الدينية وأسلوب الحياة.
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
    backgroundColor: '#ECB7B7',
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
    backgroundColor: '#EEEEEE',
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

export default Splash3;