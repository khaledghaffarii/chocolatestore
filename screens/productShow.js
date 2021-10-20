/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from '@react-navigation/native';
import GridImageView from 'react-native-grid-image-viewer';
import firestore from '@react-native-firebase/firestore';
import LoginScreen from './LoginScreen';

// import Carousel from 'react-native-snap-carousel';
import Carousel from '../components/Carousel';
import {dummyData} from '../data/Data';
import {SearchBar, Card} from 'react-native-elements';
import FooterScreen from './FooterScreen';
import {useDispatch} from 'react-redux';
import {addToBasket} from '../slice/BasketSlice';

const ProductShow = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const image = route.params.product.imageUrl;
  const calories = route.params.product.Calories;
  const arabicDescription = route.params.product.arabicDescription;
  const price = route.params.product.price;
  const arabicTitle = route.params.product.arabicTitle;
  const weight = route.params.product.weight;
  const code = route.params.product.code;
  const arabicCategory = route.params.product.arabicCategory;
  const englishCategory = route.params.product.englishCategory;
  const [product, setProduct] = useState('');
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      arabicTitle,
      image,
      calories,
      description,
      price,
    };
    dispatch(addToBasket(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        await firestore()
          .collection('allProduct')
          .where('englishCategory', '==', englishCategory)
          .onSnapshot(snapshot => {
            setProduct(snapshot.docs.map(doc => doc.data()));
          });
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View>
        <Image style={styles.categoriesPhoto} source={{uri: image}} />
      </View>
      <View>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', marginLeft: 270}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('all_product', {
                  kandy: product,
                })
              }>
              <Text style={styles.subTitle}> {arabicCategory}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.subTitle}>الرئيسية / </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>{arabicTitle}</Text>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 20,
              margin: 8,
              color: '#cab19f',
            }}>
            {price} ر.س
          </Text>
        </View>
        <View style={styles.ourProduct}></View>
        <View style={styles.other}>
          <Text style={styles.code}>رمز المنتج: {code}</Text>
          <Text style={styles.weight}>الوزن :g {weight}</Text>
          <Text style={styles.calory}> سعرة حرارية : {calories} kal</Text>
          <Text style={styles.description}>{arabicDescription}</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginLeft: 120,
                width: 150,
                marginBottom: 20,
              }}>
              <Button
                onPress={() => {
                  addItemToBasket();
                }}
                title="أضف إلى السلة"
                color="#af8d78"
              />
            </View>
          </View>
        </View>
      </View>

      <FooterScreen />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  ourProduct: {
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#e5e5e5',
    height: 20,
    width: 300,
    marginLeft: 60,
  },
  subTitle: {
    fontSize: 14,
    color: 'grey',
    margin: 8,
  },
  description: {color: '#565f64', marginTop: 20, width: 370, marginBottom: 20},
  calory: {color: '#565f64', marginTop: 5},
  other: {
    margin: 20,
  },
  code: {
    color: '#565f64',
  },
  weight: {color: '#565f64', marginTop: 10},
  header: {
    flexDirection: 'column',
    marginBottom: 55,
  },
  title: {
    textAlign: 'right',
    fontSize: 25,
    color: '#cab19f',
    margin: 10,
    fontWeight: 'bold',
  },
  login: {
    marginTop: 1,
    marginLeft: 330,
    marginBottom: 40,
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesPhoto: {
    width: 400,
    height: 500,
    margin: 5,
  },
  container: {
    backgroundColor: '#fff',

    marginTop: 10,
  },
  recomended: {
    width: 350,
    fontSize: 23,
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
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
    margin: 40,
    marginTop: 20,
    flexDirection: 'row',
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

export default ProductShow;