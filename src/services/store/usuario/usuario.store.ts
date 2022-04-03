import {createSlice} from '@reduxjs/toolkit';

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
  reducers: {},
});

export default usuarioSlice.reducer;
