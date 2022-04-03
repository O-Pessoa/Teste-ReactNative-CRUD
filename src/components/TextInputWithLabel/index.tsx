import React from 'react';
import TextInput, {TextInputProps} from '../TextInput';

import * as S from './styles';

export type TextInputWithLabelProps = TextInputProps & {label: string};

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  label,
  ...props
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <TextInput {...props} />
    </S.Container>
  );
};

export default TextInputWithLabel;
