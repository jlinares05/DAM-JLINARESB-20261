import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";

type Props = {
  label: string;
  OnPress: () => void;
};

export const CountScreen = ({ label, OnPress }: Props) => {
  return (
    <TouchableOpacity style={stylesCountScreen.button} onPress={OnPress}>
      <Text style={stylesCountScreen.labelText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};