/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import {Card} from 'react-native-elements';
import FooterScreen from './FooterScreen';

const AllProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const imageUrl = route.params.product.imageUrl;
  // const calories = route.params.product.Calories;
  // const arabicDescription = route.params.product.arabicDescription;
  // const price = route.params.product.price;
  // const arabicTitle = route.params.product.arabicTitle;
  // const weight = route.params.product.weight;
  // const code = route.params.product.code;
  // const arabicCategory = route.params.product.arabicCategory;
  // const englishCategory = route.params.product.englishCategory;
  const salty = route.params.salty;
  const hotDrink = route.params.hotDrink;
  const coldDrink = route.params.coldDrink;
  const sandwich = route.params.sandwich;
  const croissant = route.params.croissant;
  const kandy = route.params.kandy;
  const cake = route.params.cake;
  const chocolate = route.params.chocolate;
  console.log(route.params.product);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={{margin: 15}}>
        {salty ? (
          <View style={{marginLeft: -12}}>
            {Object.values(salty).map((saltys, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: saltys,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: saltys.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{saltys.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {saltys.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        {chocolate ? (
          <View style={{marginLeft: -12}}>
            {Object.values(chocolate).map((chocolates, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: chocolates,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: chocolates.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{chocolates.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {chocolates.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        {cake ? (
          <View style={{marginLeft: -12}}>
            {Object.values(cake).map((cakes, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: cakes,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: cakes.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{cakes.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {cakes.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        {kandy ? (
          <View style={{marginLeft: -12}}>
            {Object.values(kandy).map((kandys, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: kandys,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: kandys.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{kandys.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {kandys.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        {sandwich ? (
          <View style={{marginLeft: -12}}>
            {Object.values(sandwich).map((sandwichs, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: sandwichs,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: sandwichs.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{sandwichs.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {sandwichs.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        {croissant ? (
          <View style={{marginLeft: -12}}>
            {Object.values(croissant).map((croissants, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: croissants,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: croissants.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{croissants.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {croissants.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        {hotDrink ? (
          <View style={{marginLeft: -12}}>
            {Object.values(hotDrink).map((hotDrinks, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: hotDrinks,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: hotDrinks.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{hotDrinks.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {hotDrinks.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
        {coldDrink ? (
          <View style={{marginLeft: -12}}>
            {Object.values(coldDrink).map((coldDrinks, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('productShow', {
                      product: coldDrinks,
                    })
                  }
                  key={i}>
                  <Card
                    containerStyle={{
                      height: 190,
                    }}>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={styles.categoriesPhoto}
                        source={{uri: coldDrinks.imageUrl}}
                      />
                      <View style={{width: 180}}>
                        <Card.Title>{coldDrinks.arabicTitle}</Card.Title>
                        <Card.Divider />
                        <Text style={{}}> رس {coldDrinks.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 50,
                        marginTop: -32,
                        marginLeft: 220,
                        width: 100,
                      }}>
                      <Button title="أضف إلى السلة" color="#af8d78" />
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
      <FooterScreen />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  login: {
    marginTop: 1,
    marginLeft: 330,
    marginBottom: 40,
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesPhoto: {
    width: 140,
    height: 140,
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 1,
    marginVertical: 10,
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
export default AllProduct;
