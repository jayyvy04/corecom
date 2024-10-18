import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyActivityIndicator from './MyActivityIndicator'
import MyButton from './MyButton'
import MyFlatList from './MyFlatList'
import MyImage from './MyImage'
import MyImageBackground from './MyImageBackground'
import MyKeyboardAvoidingView from './MyKeyboardAvoidingView'
import MyModal from './MyModal'
import MyImage from './MyImage'
import MyImage from './MyImage'
import MyImage from './MyImage'
import MyImage from './MyImage'
import MyImage from './MyImage'
import MyImage from './MyImage'
import MyImage from './MyImage'
import MyImage from './MyImage'
import MyImage from './MyImage'

export default function App() {
  return (
    <View style={styles.container}>
      <MyActivityIndicator/>
      <MyButton/>
      <MyFlatList/>
      <MyImage/>
      <MyImageBackground/>
      <MyKeyboardAvoidingView/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
      <MyImage/>
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
