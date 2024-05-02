import { useState } from 'react';
import {  StyleSheet,   View,  FlatList } from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput';
export default function App() {
const [goals, setGoals] = useState('')

function handleAddGoal(enterGoalText){
  setGoals(( ) => [ ...goals, {text: enterGoalText}])
  }

  function handleDeleteGoal(){
    console.log('DELETE')
  }
  return (
    <View style={styles.container}>
      <GoalInput
      onAddGoal={handleAddGoal}
      />

    <View style={styles.goalsContainer}>
  <FlatList
  data = {goals}
  renderItem = { (itemData) => {
 <GoalItem
itemData={itemData}
OnDeleteItem={handleDeleteGoal}
/>
  }}
keyExtractor = {(item) => {
  return item.id 
}}
/>
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
  goalsContainer:{
  flex: 5
     },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
  }

})
