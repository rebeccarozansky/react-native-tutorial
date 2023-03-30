import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task'
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './navigation/stacks';

export default function App() {

  return(
    <NavigationContainer>
    <Stacks />
    </NavigationContainer>

  )
}