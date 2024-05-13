import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

function handleInputGoal(enteredText) {
   // console.log(enteredText)
    setEnteredGoalText(enteredText)
}

function addGoalHandler(){
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')

    console.log('addGoalHandler')
}

return(
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.TextInput}
        placeholder="Your Goal"
        onChangeText={handleInputGoal}
        value={enteredGoalText}
        />
    
    <Button 
    title="Add Goal"
    color={'#A3FFD6'}
    onPress={addGoalHandler}
    />    
    </View>
)
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '7BC9FF',
    },
    TextInput:{
        borderWidth: 1,
        borderColor: "#CCCCCC",
        width: '80%',
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    }
})