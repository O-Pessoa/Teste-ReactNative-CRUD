import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin: ${({theme}) => theme.spacing[0]}px;
  padding: ${({theme}) => theme.spacing[0]}px;
  border-radius: ${({theme}) => theme.spacing[0]}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const BoxPhoto = styled.View`
  flex: 1;
`;

export const BoxInline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxTexts = styled.View`
  flex: 2;
`;

export const TextName = styled.Text.attrs({numberOfLines: 1})`
  color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const TextUid = styled.Text.attrs({numberOfLines: 1})`
  color: ${({theme}) => theme.colors.text};
  opacity: 0.3;
  flex: 1;
`;

export const TextBirthDay = styled.Text.attrs({numberOfLines: 1})`
  color: ${({theme}) => theme.colors.text};
  opacity: 0.5;
  flex: 1;
`;

export const Photo = styled.Image`
  flex: 1;
  aspect-ratio: 1;
  margin: ${({theme}) => theme.spacing[0]}px;
`;

export const ButtonDelete = styled(TouchableOpacity)`
  padding: ${({theme}) => theme.spacing[0]}px;
`;

export const ButtonEdit = styled(TouchableOpacity)`
  padding: ${({theme}) => theme.spacing[0]}px;
`;

export const IconDelete = styled(MaterialCommunityIcons).attrs(({theme}) => ({
  name: 'trash-can-outline',
  size: theme.texto.tamanhos.h4,
  color: '#dc2f02',
}))``;

export const IconEdit = styled(MaterialCommunityIcons).attrs(({theme}) => ({
  name: 'pencil',
  size: theme.texto.tamanhos.h4,
  color: '#1a759f',
}))``;
