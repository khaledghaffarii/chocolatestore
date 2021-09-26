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
import {Card} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {selectItems} from '../slice/BasketSlice';
import CheckoutProduct from './CheckoutProduct';
import FooterScreen from './FooterScreen';
const Checkout = ({navigation}) => {
  const items = useSelector(selectItems);

  return (
    <View>
      {items.length ? (
        <ScrollView style={{}}>
          <Card
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              elevation: 10,
              height: 400,

              borderColor: '#f9ab37',
              borderWidth: 0,
            }}>
            <ScrollView horizontal={true} style={styles.container}>
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  calories={item.calories}
                  description={item.description}
                  price={item.price}
                  Products={item.products}
               
                />
              ))}
            </ScrollView>
          </Card>

          <Card
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              elevation: 10,
              height: 220,
              borderWidth: 0,
            }}>
            <ScrollView style={styles.container}>
              <View>
                <View style={{marginLeft: 250}}>
                  <Card.Title> المجموع : </Card.Title>
                </View>
                <View>
                  <Text>All payments list</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                  }}>
                  <View
                    style={{
                      marginTop: 65,
                      width: 150,
                    }}>
                    <Button title="اتمام عملية الشراء" color="#333333" />
                  </View>
                  <View
                    style={{
                      marginTop: 65,
                      width: 150,
                    }}>
                    <Button
                      title="مواصلة التسويق"
                      onPress={() => navigation.navigate('Home')}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </Card>
          <FooterScreen />
        </ScrollView>
      ) : (
        <ScrollView style={styles.container}>
          <Card
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              elevation: 10,
              height: 200,
              borderWidth: 0,
              marginTop: 100,
            }}>
            <View>
              <View style={{marginLeft: 250}}>
                <Card.Title> المجموع : </Card.Title>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                }}>
                <View
                  style={{
                    width: 150,
                  }}>
                  <Button title="السلة فارغة " disabled />
                </View>
                <View
                  style={{
                    width: 150,
                  }}>
                  <Button
                    title="مواصلة التسويق"
                    onPress={() => navigation.navigate('Home')}
                  />
                </View>
              </View>
            </View>
          </Card>
          <FooterScreen />
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  login: {
    marginTop: 5,
    marginLeft: 270,
    marginBottom: 40,
    fontSize: 17,
    color: '#f9ab37',
    fontWeight: 'bold',
    width: 100,
  },
  categoriesPhoto: {
    width: 120,
    height: 120,
    marginLeft: 12,
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    backgroundColor: '#ffff',
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
    marginLeft: -180,
    color: '#f9ab37',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 280,
    height: 120,
    marginTop: 10,
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
export default Checkout;
