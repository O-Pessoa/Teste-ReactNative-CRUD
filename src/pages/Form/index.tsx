import React, {useEffect, useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import TextInputWithLabel from '~/components/TextInputWithLabel';
import * as S from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {useAppDispatch, useAppSelector} from '~/services/store';
import {formatDate} from '~/utils/format';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/routes';
import * as UserActions from '~/services/store/usuario/usuario.store';
import Button from '~/components/Button';
import {selectUsuario} from '~/services/store/usuario/usuario.selectors';

type FormStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Form'>;

const Form: React.FC<FormStackScreenProps> = ({route, navigation}) => {
  const uid = route.params?.uid;

  const dispatch = useAppDispatch();
  const usuario = useAppSelector(state => selectUsuario(state, uid || ''));

  const [name, setName] = useState('');
  const [dateString, setDateString] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [photo, setPhoto] = useState<{base64?: string; uri?: string}>({});

  useEffect(() => {
    if (usuario) {
      setName(usuario.name);
      setDateString(formatDate(usuario.birthDay));
      setDate(usuario.birthDay);
      setPhoto({uri: usuario.photo});
    }
  }, [usuario]);

  const handleSetDate = (text: string) => {
    let newText = text
      .replace(/\D/g, '')
      .slice(0, 8)
      .replace(/^(\d{2})$/, '$1')

      .replace(/^(\d{2})(\d{1,2})$/, '$1/$2')
      .replace(/^(\d{2})(\d{1,2})(\d{1,4})$/, '$1/$2/$3');
    setDateString(newText);
    if (newText.length === 10) {
      const matchDate = newText.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
      if (matchDate) {
        const day = parseInt(matchDate[1], 10);
        const month = parseInt(matchDate[2], 10) - 1;
        const year = parseInt(matchDate[3], 10);

        const newDate = new Date(year, month, day);
        setDate(newDate);
      }
    }
  };

  const handelOnEndEditingDate = () => {
    const matchDate = dateString.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
    if (matchDate) {
      const day = parseInt(matchDate[1], 10);
      const month = parseInt(matchDate[2], 10) - 1;
      const year = parseInt(matchDate[3], 10);

      const newDate = new Date(year, month, day);
      setDate(newDate);
      setDateString(formatDate(newDate));
    } else {
      setDate(undefined);
      setDateString('');
    }
  };

  const handleOnSubmit = () => {
    if (!photo.uri) {
      Alert.alert('Erro!', 'É necessário uma foto.');
      return;
    }
    if (date) {
      if (uid) {
        dispatch(
          UserActions.update({
            birthDay: date,
            name,
            photo: photo.uri,
            uid,
          }),
        );
        navigation.goBack();
      } else {
        dispatch(
          UserActions.add({
            birthDay: date,
            name,
            photo: photo.uri,
            uid: (Math.random() * 1e10).toFixed(),
          }),
        );
        navigation.goBack();
      }
    } else {
      if (dateString) {
        Keyboard.dismiss();
      } else {
        Alert.alert('Erro!', 'A data de nascimento está incorreta.');
      }
    }
  };

  const handleLaunchImageLibrary = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, obj => {
      if (obj.assets && obj.assets.length > 0) {
        setPhoto({uri: obj.assets[0].uri, base64: obj.assets[0].base64});
      }
    });
  };

  return (
    <S.Container>
      {uid && <S.TextUid>Código: {uid}</S.TextUid>}
      <S.BoxTextInput>
        <TextInputWithLabel
          placeholder="José da Silva"
          label="Nome"
          value={name}
          onChangeText={setName}
        />
      </S.BoxTextInput>
      <S.BoxTextInput>
        <TextInputWithLabel
          placeholder="31/12/2000"
          label="Data de nascimento"
          keyboardType="numeric"
          value={dateString}
          onChangeText={handleSetDate}
          onEndEditing={handelOnEndEditingDate}
        />
      </S.BoxTextInput>
      {photo.uri && (
        <S.BoxPhoto>
          <S.Photo source={{uri: photo.uri}} />
        </S.BoxPhoto>
      )}
      <S.BoxButtons>
        <S.BoxButton>
          <Button text="Selecionar Foto" onPress={handleLaunchImageLibrary} />
        </S.BoxButton>
        <S.BoxButton>
          <Button text="Submit" onPress={handleOnSubmit} />
        </S.BoxButton>
      </S.BoxButtons>
    </S.Container>
  );
};

export default Form;
