import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Routes, Route } from 'react-router-native';
import Doctors from './components/Doctors';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from React Native</Text>
      <Text>Another text</Text>
      <StatusBar style="auto" />
      <NativeRouter>
        <Link to='/home'><Text>Home</Text></Link>
        <Link to='/doctors'><Text>Doctors</Text></Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
        </Routes>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
