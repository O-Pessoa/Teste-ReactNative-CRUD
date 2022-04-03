import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  margin-bottom: ${({theme}) => theme.spacing[0]}px;
  color: ${({theme}) => theme.colors.text};
`;
