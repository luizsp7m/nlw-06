import React from 'react';

import { TouchableOpacity, Text, ColorValue, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
  color: ColorValue,
  backgroundColor: ColorValue,
}

export function Button({ title, color, backgroundColor, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text
        style={[styles.title, { color }]}
        {...rest}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}