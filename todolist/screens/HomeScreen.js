import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Task from '../components/Task'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { webWeights, iOSColors } from 'react-native-typography'

const HomeScreen = ({ navigation }) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        var temp = {'task':task}
        var itemsCopy2 = [...taskItems,temp]
        setTaskItems(itemsCopy2)
        setTask(null);
    }
  
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    } 
  
    return (
      <View style={styles.container}>
  
        <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Your Tasks </Text>
        
        <Text style={styles.itemDescription}>You have
          <Text style={styles.itemDescriptionStrong}> {taskItems.length} </Text>
          tasks left! {"\n\n"}
        </Text>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return (
              <TouchableOpacity key={index} onLongPress={() => completeTask(index)}> 
                          <Task text={item['task']} />
              </TouchableOpacity>
            )})
  
          }
        </ScrollView>
        </View>
        <StatusBar style="auto" />
        <KeyboardAvoidingView 
        behavior={Platform.OS==="ios"?"padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Task Name'} value={task} onChangeText={text => setTask(text)}></TextInput>
   
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
  
    },
    tasksWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
  
    },
    itemDescription: {
      fontSize: 15,
      letterSpacing: 1.5,
      paddingVertical: 10,
      paddingHorizontal: 10,
      ...webWeights.semibold,
    },
    itemDescriptionStrong: {
      fontSize: 18,
      letterSpacing: 1.5,
      paddingVertical: 8,
      paddingHorizontal: 10,
      textDecorationLine: 'underline',
      ...webWeights.heavy,
    },
    info: {
      textDecorationLine:'underline',
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 20,
    },
    writeTaskWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input:{
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper:{
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText:{},
    addWrapperInfo:{
      width: 20,
      height: 20,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    borderPad:{
      paddingLeft: 5,
    }
  });

  export default HomeScreen;