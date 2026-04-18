import React from 'react';
import { Input } from '../../atoms/Input';

type Props = {
  setNum1: (text: string) => void;
  setNum2: (text: string) => void;
};

export const InputGroup = ({ setNum1, setNum2 }: Props) => {
  return (
    <>
      <Input placeholder="Número 1" onChangeText={setNum1} />
      <Input placeholder="Número 2" onChangeText={setNum2} />
    </>
  );
};
