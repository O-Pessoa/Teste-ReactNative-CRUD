import React from 'react';
import * as S from './styles';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/routes';

type FormStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Form'>;

const Form: React.FC<FormStackScreenProps> = () => {
  return <S.Container />;
};

export default Form;
