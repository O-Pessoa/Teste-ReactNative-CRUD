import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as S from './styles';

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  loading?: boolean;
  secondary?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  loading = false,
  secondary = false,
  ...props
}) => {
  return (
    <S.Container
      {...props}
      disabled={props?.disabled || loading}
      secondary={secondary}>
      {loading ? <S.ActivityIndicator /> : <S.ButtonText>{text}</S.ButtonText>}
    </S.Container>
  );
};

export default Button;
