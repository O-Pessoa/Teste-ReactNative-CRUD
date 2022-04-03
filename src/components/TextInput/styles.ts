import {TextInput as TxtInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: ${({theme}) => theme.spacing[0]}px;
  border-color: ${({theme}) => theme.colors.secondary};
  border-width: 3px;
  padding: ${({theme}) => theme.spacing[0]}px;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
`;

export const TextInput = styled(TxtInput).attrs({
  placeholderTextColor: 'rgba(0,0,0,0.5)',
})`
  padding: 0px;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
`;
