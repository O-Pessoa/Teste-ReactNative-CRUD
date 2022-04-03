import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Icon name="rocket" size={30} color="#900" />
    </S.Container>
  );
};

export default Home;
