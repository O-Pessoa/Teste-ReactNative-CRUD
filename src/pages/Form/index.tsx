import React, {useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import TextInputWithLabel from '~/components/TextInputWithLabel';
import * as S from './styles';

import {useAppDispatch} from '~/services/store';
import {formatDate} from '~/utils/format';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/routes';
import * as UserActions from '~/services/store/usuario/usuario.store';
import Button from '~/components/Button';

type FormStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Form'>;

const Form: React.FC<FormStackScreenProps> = ({route}) => {
  const uid = route.params?.uid;

  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [dateString, setDateString] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSetDate = (text: string) => {
    let newText = text
      .replace(/\D/g, '')
      .slice(0, 8)
      .replace(/^(\d{2})$/, '$1')

      .replace(/^(\d{2})(\d{1,2})$/, '$1/$2')
      .replace(/^(\d{2})(\d{1,2})(\d{1,4})$/, '$1/$2/$3');
    setDateString(newText);
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
    if (date) {
      if (uid) {
        dispatch(UserActions.update({birthDay: date, name, photo: '', uid}));
      } else {
        dispatch(
          UserActions.add({
            birthDay: date,
            name,
            photo:
              'https://media-exp1.licdn.com/dms/image/C4E03AQGMs1jPwZNfOA/profile-displayphoto-shrink_200_200/0/1530399179900?e=1654732800&v=beta&t=Ck5WQAEeH8Rk0NFbbYlMez3lbpRcjBfKJLLttR4Cnrg',
            uid: (Math.random() * 1e10).toFixed(),
          }),
        );
      }
    } else {
      if (dateString) {
        Keyboard.dismiss();
      } else {
        Alert.alert('Erro!', 'A data de nascimento está incorreta.');
      }
    }
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
      <Button text="Submit" onPress={handleOnSubmit} />
    </S.Container>
  );
};

export default Form;
