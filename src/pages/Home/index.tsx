import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddButton from '~/components/AddButton';
import * as S from './styles';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/routes';

type HomeStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeStackScreenProps> = ({navigation}) => {
  const goToForm = () => navigation.navigate('Form');

  return (
    <S.Container>
      <S.BoxButtonAdd>
        <AddButton onPress={goToForm} />
      </S.BoxButtonAdd>
      <Icon name="rocket" size={30} color="#900" />
    </S.Container>
  );
};

export default Home;
