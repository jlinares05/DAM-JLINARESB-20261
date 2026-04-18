import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../../themes/themes.ts';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
};

export const Input = ({ placeholder, onChangeText }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType="numeric"
      style={styles.input}
      placeholderTextColor={colors.text.primary}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: spacing.m,
    borderRadius: borderRadius.m,
    marginBottom: spacing.s,
    fontSize: typography.fontSize.m,
    color: colors.text.primary,
  },
});
