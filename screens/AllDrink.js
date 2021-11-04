/* eslint-disable react-native/no-inline-styles */
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
const AllDrink = () => {
  const navigation = useNavigation();
  const [allDrink, setAllDrink] = useState('');
  const getAllChocolate = async () => {
    try {
      await firestore()
        .collection('drink')
        .onSnapshot(snapshot => {
          setAllDrink(snapshot.docs.map(doc => doc.data()));
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllChocolate();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={{marginLeft: 15}}>
        <View style={{marginLeft: -12}}>
          {Object.values(allDrink).map((allDrinks, i) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('drink_show', {
                    drink: allDrinks,
                  })
                }
                key={i}>
                <Card
                  containerStyle={{
                    height: 190,
                  }}>
                  <View
                    style={{
                      marginBottom: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      style={styles.categoriesPhoto}
                      source={{uri: allDrinks.imageUrl}}
                    />
                    <View style={{}}>
                      <Card.Title>{allDrinks.title}</Card.Title>
                      <Card.Divider />
                      <Text style={{}}> رس {allDrinks.price}</Text>
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
    marginHorizontal: 0,
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

export default AllDrink;
