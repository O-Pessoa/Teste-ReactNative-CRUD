import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  padding: ${({theme}) => theme.spacing[0]}px;
  align-self: flex-start;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(MaterialIcons).attrs(({theme}) => ({
  size: theme.texto.tamanhos.h1 * 1.2,
  color: theme.colors.backgroundSecondary,
  name: 'add',
}))``;
