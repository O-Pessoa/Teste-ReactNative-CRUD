import React from 'react';
import {formatDate} from '~/utils/format';
import * as S from './styles';

export type UserItemProps = {
  photo: string;
  name: string;
  uid: string;
  birthDay: Date;
  onClickEdit: () => void;
  onClickDelete: () => void;
};

const UserItem: React.FC<UserItemProps> = ({
  name,
  uid,
  birthDay,
  photo,
  onClickDelete,
  onClickEdit,
}) => {
  return (
    <S.Container>
      <S.BoxPhoto>
        <S.Photo source={{uri: photo}} />
      </S.BoxPhoto>
      <S.BoxTexts>
        <S.BoxInline>
          <S.TextName>{name}</S.TextName>
        </S.BoxInline>
        <S.BoxInline>
          <S.TextBirthDay>{formatDate(birthDay)}</S.TextBirthDay>
          <S.ButtonEdit onPress={onClickEdit}>
            <S.IconEdit />
          </S.ButtonEdit>
        </S.BoxInline>
        <S.BoxInline>
          <S.TextUid>{uid}</S.TextUid>
          <S.ButtonDelete onPress={onClickDelete}>
            <S.IconDelete />
          </S.ButtonDelete>
        </S.BoxInline>
      </S.BoxTexts>
    </S.Container>
  );
};

export default UserItem;
