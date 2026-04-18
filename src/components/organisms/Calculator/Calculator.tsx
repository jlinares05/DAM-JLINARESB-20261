import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputGroup } from '../../molecules/InputGroup';
import { Button } from '../../atoms/Button';
import { spacing, typography } from '../../../themes/themes.ts';

export const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const sumar = () => setResult(Number(num1) + Number(num2));
  const restar = () => setResult(Number(num1) - Number(num2));
  const multiplicar = () => setResult(Number(num1) * Number(num2));
  const dividir = () => setResult(Number(num1) / Number(num2));

  useEffect(() => {
    console.log('Resultado actualizado:', result);
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <InputGroup setNum1={setNum1} setNum2={setNum2} />

      <Button label="Sumar" onPress={sumar} />
      <Button label="Restar" onPress={restar} />
      <Button label="Multiplicar" onPress={multiplicar} />
      <Button label="Dividir" onPress={dividir} />

      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.l,
  },
  title: {
    fontSize: typography.fontSize.l,
    marginBottom: spacing.m,
  },
  result: {
    marginTop: spacing.m,
    fontSize: typography.fontSize.m,
  },
});
