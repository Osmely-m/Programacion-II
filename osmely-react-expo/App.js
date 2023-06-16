import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  };

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Compartir no está disponible en tu dispositivo');
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una imagen</Text>
      <Text style={styles.titlee}>Presionando la imagen</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : 'https://picsum.photos/200/200'
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      {selectedImage ? (
        <TouchableOpacity onPress={openShareDialog} style={styles.button}>
          <Text style={styles.buttonText}>Compartir imagen</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('Acerca de')}
        style={styles.aboutButton}
      >
        <Text style={styles.aboutButtonText}>Acerca de</Text>
      </TouchableOpacity>
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>
      <Text style={styles.subtitle}>Esta aplicación fue creada por Osmely Martinez</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Acerca de" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  titlee: {
    fontSize: 15,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 15,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 15
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  aboutButton: {
    marginTop: 15
  },
  aboutButtonText: {
    fontSize: 15,
    color: 'blue'
  }
});

export default App;