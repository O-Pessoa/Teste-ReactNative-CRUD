import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';

export const selectUsuarios = createSelector(
  (state: RootState) => state.usuario,
  usuarios => Object.values(usuarios),
);

export const selectUsuario = createSelector(
  [(state: RootState) => state.usuario, (state: RootState, uid: string) => uid],
  (usuarios, uid) => usuarios[uid],
);
