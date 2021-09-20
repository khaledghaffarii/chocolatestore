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

const AllKandy = () => {
  const navigation = useNavigation();
  const [allKandy, setAllKandy] = useState('');
  const getAllChocolate = async () => {
    try {
      await firestore()
        .collection('candies')
        .onSnapshot(snapshot => {
          setAllKandy(snapshot.docs.map(doc => doc.data()));
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
          {Object.values(allKandy).map((allKandys, i) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('drink_show', {
                    drink: allKandys,
                  })
                }
                key={i}>
                <Card
                  containerStyle={{
                    elevation: 10,
                    height: 190,
                    marginBottom: 15,
                    borderRadius: 20,
                    borderColor: '#0000',
                    borderWidth: 9,
                  }}>
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      style={styles.categoriesPhoto}
                      source={{uri: allKandys.imageUrl}}
                    />
                    <View
                      style={{
                        flex: 1,
                        marginLeft: 30,
                        padding: 10,
                      }}>
                      <Text style={{width: 100,textAlign: 'center',paddingRight:10}}>
                        {allKandys.title}
                      </Text>
                      <Card.Divider />
                      <Text style={{}}> SAR {allKandys.price}</Text>
                      <Text style={{marginBottom: 12}}>
                        KAL {allKandys.calories}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 50,
                      marginTop: -32,
                      marginLeft: 220,
                      width: 100,
                    }}>
                    <Button title="أضف إلى السلة" />
                  </View>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
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
    width: 200,
    height: 140,
    borderRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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

export default AllKandy;
