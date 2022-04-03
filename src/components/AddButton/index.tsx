import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as S from './styles';

export type AddButtonProps = TouchableOpacityProps;

const AddButton: React.FC<AddButtonProps> = props => {
  return (
    <S.Container {...props}>
      <S.AddIcon />
    </S.Container>
  );
};

export default AddButton;
