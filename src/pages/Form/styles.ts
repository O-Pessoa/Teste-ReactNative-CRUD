import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${({theme}) => theme.spacing[2]}px ${({theme}) => theme.spacing[1]}px;
`;

export const BoxTextInput = styled.View`
  margin-bottom: ${({theme}) => theme.spacing[2]}px;
`;

export const TextUid = styled.Text`
  color: ${({theme}) => theme.colors.text};
  margin-bottom: ${({theme}) => theme.spacing[1]}px;
  opacity: 0.5;
`;

export const BoxPhoto = styled.View`
  margin: ${({theme}) => theme.spacing[1]}px;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.Image`
  width: 170px;
  aspect-ratio: 1;
`;

export const BoxButtons = styled.View``;

export const BoxButton = styled.View`
  margin-top: ${({theme}) => theme.spacing[0]}px;
`;
