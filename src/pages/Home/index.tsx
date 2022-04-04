import React from 'react';
import {useAppDispatch, useAppSelector} from '~/services/store';
import {selectUsuarios} from '~/services/store/usuario/usuario.selectors';
import AddButton from '~/components/AddButton';
import * as S from './styles';

import * as UserActions from '~/services/store/usuario/usuario.store';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/routes';
import {FlatList, ListRenderItem} from 'react-native';
import UserItem from '~/components/UserItem';

type HomeStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeStackScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const usuarios = useAppSelector(selectUsuarios);

  const deleteUser = (uid: string) => dispatch(UserActions.rm({uid}));
  const navigateToEdit = (uid: string) => navigation.navigate('Form', {uid});
  const goToForm = () => navigation.navigate('Form');
  const renderItem: ListRenderItem<typeof usuarios[number]> = ({item}) => (
    <UserItem
      {...item}
      onClickDelete={() => {
        deleteUser(item.uid);
      }}
      onClickEdit={() => {
        navigateToEdit(item.uid);
      }}
    />
  );
  return (
    <S.Container>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingBottom: 100}}
      />
      <S.BoxButtonAdd>
        <AddButton onPress={goToForm} />
      </S.BoxButtonAdd>
    </S.Container>
  );
};

export default Home;
