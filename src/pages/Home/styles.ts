import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const BoxButtonAdd = styled.View`
  position: absolute;
  bottom: ${({theme}) => theme.spacing[2]}px;
  align-self: center;
`;
