import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '~/services/store';
import {selectUsuarios} from '~/services/store/usuario/usuario.selectors';
import AddButton from '~/components/AddButton';
import * as S from './styles';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/routes';
import {FlatList, ListRenderItem} from 'react-native';
import UserItem from '~/components/UserItem';
import * as userThunks from '~/services/store/usuario/usuario.thunks';

type HomeStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeStackScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const usuarios = useAppSelector(selectUsuarios);
  const [loading, setLoading] = useState(false);

  const loadingData = useCallback(async () => {
    setLoading(true);
    await dispatch(userThunks.getAll());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  const deleteUser = (uid: string) => dispatch(userThunks.deleteUser(uid));
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
        onRefresh={loadingData}
        refreshing={loading}
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
