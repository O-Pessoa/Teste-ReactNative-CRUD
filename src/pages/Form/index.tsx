import React from 'react';
import TextInputWithLabel from '~/components/TextInputWithLabel';
import * as S from './styles';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/routes';

type FormStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Form'>;

const Form: React.FC<FormStackScreenProps> = () => {
  return (
    <S.Container>
      <TextInputWithLabel placeholder="31/12/2000" label="Data de nascimento" />
    </S.Container>
  );
};

export default Form;
