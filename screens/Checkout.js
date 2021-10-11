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
  Pressable,
} from 'react-native';
import {Card} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {selectItems} from '../slice/BasketSlice';
import CheckoutProduct from './CheckoutProduct';
import FooterScreen from './FooterScreen';
const Checkout = ({navigation}) => {
  const items = useSelector(selectItems);

  return (
    <ScrollView style={styles.container} vertical={true}>
      {items.length ? (
        <View style={{}}>
          <ScrollView vertical={true} style={{}}>
            {items.map((item, i) => (
              <CheckoutProduct key={i} chocolate={item} />
            ))}
          </ScrollView>

          <View style={{marginTop: 60}}>
            <Text
              style={{
                margin: 20,
                fontSize: 20,
                color: '#484848',
                fontWeight: 'bold',
                textAlign: 'right',
              }}>
              المجموع :
            </Text>

            <View>
              <Text>All payments list</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 30,
              }}>
              <View
                style={{
                  marginTop: 65,
                  width: 150,
                }}>
             
                <Pressable
                  onPress={() => navigation.navigate('Home')}
                  style={{
                    backgroundColor: '#8b704e',
                    color: 'white',
                    height: 47,
                    width: 160,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}>
                  <Text
                    style={{color: '#ffffff', textAlign: 'center', margin: 10}}>
                    اتمام عملية الشراء
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  marginTop: 65,
                  width: 150,
                }}>
                <Pressable
                  onPress={() => navigation.navigate('Home')}
                  style={{
                    backgroundColor: '#cccccc',
                    color: 'white',
                    height: 47,
                    width: 160,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}>
                  <Text
                    style={{color: 'black', textAlign: 'center', margin: 10}}>
                    مواصلة التسويق
                  </Text>
                </Pressable>
                {/* <Button
                  title="مواصلة التسويق"
                  onPress={() => navigation.navigate('Home')}
                /> */}
              </View>
            </View>
          </View>

          <FooterScreen />
        </View>
      ) : (
        <ScrollView>
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
    </ScrollView>
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
