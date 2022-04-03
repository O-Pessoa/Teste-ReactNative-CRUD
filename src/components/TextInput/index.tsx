import React from 'react';
import {TextInputProps as TxtInputProps} from 'react-native';
import * as S from './styles';

export type TextInputProps = Omit<TxtInputProps, 'placeholderTextColor'>;

const TextInput: React.FC<TextInputProps> = props => {
  return (
    <S.Container>
      <S.TextInput {...props} />
    </S.Container>
  );
};

export default TextInput;
