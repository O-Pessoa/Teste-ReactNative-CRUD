import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type IUsuario = {
  codigo: string;
  nome: string;
  nascimento: Date;
  foto: string;
};

type IStateUsuario = {
  [codigo: string]: IUsuario;
};

const initialState: IStateUsuario = {};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IUsuario>) => {
      state[action.payload.codigo] = action.payload;
    },
    rm: (state, action: PayloadAction<{codigo: IUsuario['codigo']}>) => {
      delete state[action.payload.codigo];
    },
    update: (
      state,
      action: PayloadAction<Partial<IUsuario> & {codigo: IUsuario['codigo']}>,
    ) => {
      state[action.payload.codigo] = {
        ...state[action.payload.codigo],
        ...action.payload,
      };
    },
  },
});

export const {add, rm, update} = usuarioSlice.actions;

export default usuarioSlice.reducer;
