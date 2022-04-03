import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${({theme}) => theme.spacing[2]}px ${({theme}) => theme.spacing[1]}px;
`;
