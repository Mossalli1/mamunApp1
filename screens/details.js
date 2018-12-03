import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// By ArrayList
// let ManList= [
//   {
//     id : 1,
//     item : 'shirt',
//    image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
//   },
//   {
//     id : 2,
//     item : 'Panjabi',
//    image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
//   },
//   {
//     id : 3,
//     item : 'Pant',
//    image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
//   }
// ]



export default class App extends React.Component {

  //By state with ArrayList
  state = {
      menList : [
        {
          id : 1, item : 'shirt',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        },
        {
          id : 2, item : 'Panjabiwola',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        },
        {
          id : 3, item : 'Fotua',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        },
        {
          id : 3, item : 'Fotua',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        },
        {
          id : 3, item : 'Fotua',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        },
        {
          id : 3, item : 'Fotua',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        }
      ]
  }
  

lapsList(){
  return this.state.menList.map((data,i) =>{
    return(
      <View key={i}>
        
        <View style={styles.elements}>

          <View style={styles.images}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: data.image}}
            />
          </View>
          <View style= {styles.texes}>
            <Text style={styles.text_element_id}>ID : {data.id}</Text>
            <Text style={styles.text_element_item}>{data.item}</Text>
          </View>
          
          
          
            
        </View>
       
      
      </View>
    )
  })
}
  
    
  // lapsList() {
  //   return ManList.map((data,i) => {
  //     return (
  //       <View key={i}><Text>{data.item}</Text></View>
  //     )
  //   })
  // }


  render() {

    return (
      <View style={styles.container}>
      <ScrollView>{this.lapsList()}</ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
  },

  elements: {
    flexWrap : 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems : 'center',
  },

  text_element_id : {
    fontSize: 15,
    textAlign: "center",
    color: "#FFFFFF",
  },

  text_element_item : {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },

  images :{
    height : 110,
    width : 110,
    marginBottom : 5,
  },

  texes :{
    height : 110,
    width : 110,
    marginBottom : 5,
  }

});
