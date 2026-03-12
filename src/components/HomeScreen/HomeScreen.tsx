import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styles from './HomeScreen.styles';

export default function HomeScreen() {

  const [count, setCount] = useState(0);

  const handlePress1 = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log("Hello World contador:", newCount);
  };

  const handlePress2 = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log("Segundo botón contador:", newCount);
  };

  return (
    <View style={styles.container}>
      <Button title="Hello World" onPress={handlePress1} />
      <Button title="Botón 2" onPress={handlePress2} />
    </View>
  );
}