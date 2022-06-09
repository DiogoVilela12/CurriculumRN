import React from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  function handleSM(rede_social) {
    switch (rede_social) {
      case 'lk':
        Alert.alert('https://www.linkedin.com/in/diogovilela012/');
        break;
      case 'gh':
        Alert.alert('https://github.com/DiogoVilela12');
        break;
      case 'ig':
        Alert.alert('https://www.instagram.com/s2diggy/');
        break;
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image
          style={style.imagePerfil}
          source={require('./assets/images/Diogo.jpg')}
        />
        <Text style={style.nomePerfil}>Diogo Vilela</Text>
        <Text style={style.cargoPerfil}>Desenvolvedor Full-Stack</Text>
        <View style={style.containerSM}>
          <TouchableOpacity onPress={() => handleSM('gh')}>
            <Image
              style={style.iconStyle}
              source={require('./assets/icons/gh.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSM('lk')}>
            <Image
              style={style.iconStyle}
              source={require('./assets/icons/lk.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSM('ig')}>
            <Image
              style={style.iconStyle}
              source={require('./assets/icons/ig.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.areaBox}>
        <Text style={style.tituloBox}>Titulo</Text>
        <Text style={style.descricaoBox}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
      <View style={style.areaBox}>
        <Text style={style.tituloBox}>Titulo</Text>
        <Text style={style.descricaoBox}>
          Lorem Ipsum is simply dummy text of the printing and typesetting more
          more the recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    margin: 20,
    alignItems: 'center',
    backgroundcolor: 'lightgray',
    flex: 1,
  },
  imagePerfil: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 150,
  },
  nomePerfil: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  cargoPerfil: {
    fontSize: 20,
    textAlign: 'center',
  },
  containerSM: {
    margin: 5,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconStyle: {
    margin: 10,
    height: 50,
    width: 50,
  },
  areaBox: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'lightgray',
    marginBottom: 15,
  },
  tituloBox: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  descricaoBox: {
    fontSize: 15,
    color: 'black',
  },
});

export default App;
