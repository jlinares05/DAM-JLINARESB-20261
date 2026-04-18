import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../../themes/themes.ts';

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: borderRadius.m,
    marginBottom: spacing.s,
    alignItems: 'center',
  },
  text: {
    color: colors.text.inverse,
    fontSize: typography.fontSize.m,
  },
});
