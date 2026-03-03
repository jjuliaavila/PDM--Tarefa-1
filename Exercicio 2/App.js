import { ScrollView,StyleSheet, Image } from 'react-native';

const blueVelvet = require('./assets/Blue_Velvet.jpg');
const deadPoets = require('./assets/Dead Poets Society.webp');
const pulpFiction = require('./assets/pulp.webp');
const theShining = require('./assets/the shining.webp');
const donnieDarko = require('./assets/Donnie Darko.jpg');
const theSilence = require('./assets/The Silence of the Lambs.jpg');

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <Image source={blueVelvet} style={styles.posters}/>
      <Image source={deadPoets} style={styles.posters}/>
      <Image source={pulpFiction} style={styles.posters}/>
      <Image source={theShining} style={styles.posters}/>
      <Image source={donnieDarko} style={styles.posters}/>
      <Image source={theSilence} style={styles.posters}/>
    </ScrollView>  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#000',
  },
  posters: {
    width: 300,
    height: 450,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
