import {ActivityIndicator as AI, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)<{secondary: boolean}>`
  background-color: ${({secondary, theme}) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  height: ${({theme}) => theme.spacing[5]}px;
  padding-left: ${({theme}) => theme.spacing[2]}px;
  padding-right: ${({theme}) => theme.spacing[2]}px;
  border-radius: ${({theme}) => theme.spacing[2]}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${props => props.theme.texto.tamanhos.h4}px;
  color: ${({theme}) => theme.colors.backgroundSecondary};
`;

export const ActivityIndicator = styled(AI).attrs(({theme}) => ({
  color: theme.colors.backgroundSecondary,
}))``;
