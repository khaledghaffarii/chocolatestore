import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function LoginButton() {
  const navigation = useNavigation();
  return (
    <View style={{marginRight:5}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}>
        <Text style={styles.login}> الدخول</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  login: {
    marginTop: 0,
    marginLeft: 250,
    marginBottom: 0,
    fontSize: 17,
    color: 'rgb(27,25,70)',
    fontWeight: 'bold',
    width: 100,
  },
  categoriesPhoto: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    marginHorizontal: 0,
  },
  recomended: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -225,
    color: '#f9ab37',
    fontWeight: 'bold',
  },
  recomended1: {
    width: 350,
    fontSize: 23,
    marginTop: 0,
    marginLeft: -210,
    color: '#f9ab37',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginLeft: 75,
  },
  buttons: {
    width: 100,
    height: 12,
    marginLeft: 75,
  },
  grid: {
    margin: 0,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  grid2: {
    margin: 0,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 30,
  },

  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
});
export default LoginButton;
