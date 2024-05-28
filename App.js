import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, Button, Text } from 'react-native';

const App = () => {
  const images = [
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VRWk1_OUfxj69qft5q8GTL9MTD9uos9FHg&s' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5cGlzHZ4EMN9h6FRnPXNFhRLy1Osx6UH6Q&s' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUIFZ4k0YVa5rOckSHclqHZEHOLqsDsDCIw&s' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <SafeAreaView style={styles.container}>
       

      <View>
      <Text style={styles.title}>Galería de Imágenes</Text>

        <Image
          source={images[currentImageIndex]}
          style={styles.image}
        />
        <Button
          title="Cambiar Imagen"
          onPress={changeImage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default App;