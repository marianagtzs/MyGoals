import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
const [enterGoalText, setEnterGoalText] = useState('')
const [goals, setGoals] = useState('')

function handleInputGoal(enterText) {
  console.log(enterGoalText)
}

function handleAddGoal(){
  console.log(enterGoalText)
  setGoals(( ) => [ goals, {text: enterGoalText, key: Math.random().toString()}])
  }


  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
      style={styles.TextInput}
      placeholder = 'Your Goal!' 
      onChangeText = {handleInputGoal} 
      />

     <Button 
      title = 'Add Goal' 
      color = {' #A3FFD6' }
      onPress = {handleAddGoal}
      />
    </View>


<View style = {styles.goalsContainer}>
  <FlatList
  data = {goals}
  renderItem = { (itemData) => {
<View>
<Text style = {styles.goalText}>
  {itemData.item.text}
</Text>
</View>
  }}
  >
  </FlatList> 

</View>
</View>
  );
}

  const styles = StyleSheet.create({

  container: {
    flex: 2,
  paddingTop: 50,
  paddingHorizontal: 20,
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
  },
  btnGoal:{
    borderRadius: 20,
    backgroundColor: '#CCCCCC',
  },
  TextInput:{
    borderWidth: 1,
    borderColor: '#CCCCC',
    width: '80%',
    marginRight: 1,
    padding: 8,
    borderRadius: 5,
     },
     goalsContainer:{
  flex: 5
     },
     goalsItem:{
      margin: 5,
      padding: 8,
      borderRadius:6,
      backgroundColor: '#(8576FF',
      color:'white'
     },
     goalText:{ 
      color: 'white',
     }

});
