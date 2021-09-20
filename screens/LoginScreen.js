import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const image = {
    uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_103402096_shiny-gold-foil-texture-for-background-abstract.html&psig=AOvVaw2NoNBZSKMpSz0XSkIh-cvk&ust=1629973463354000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDezr36y_ICFQAAAAAdAAAAABAJ',
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/logo2.png')}
        />
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="البريد الإلكتروني"
          placeholderTextColor="#f9ab37"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="                                                       كلمة السر
"
          iconType="lock"
          placeholderTextColor="#f9ab37"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText1}>هل نسيت كلمة السر؟</Text>
        </TouchableOpacity>
        <FormButton
          buttonTitle="تسجيل الدخول"
          onPress={() => login(email, password)}
        />

        {/* {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => fbLogin()}
            />

            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => googleLogin()}
            />
          </View>
        ) : null} */}

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>ليس لديك حساب؟ أنشئ هنا</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  image: {
    flex: 1,

    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#2b2a29',
  },

  tinyLogo: {
    borderRadius: 80,
    marginBottom: 105,
    marginTop: -50,
    marginLeft: 20,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: -30,
    color: '#f9ab37',
    fontFamily: 'Lato-Regular',
  },
  navButtonText1: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: -45,
    paddingLeft: 220,
    color: '#f9ab37',
    fontFamily: 'Lato-Regular',
  },
});
