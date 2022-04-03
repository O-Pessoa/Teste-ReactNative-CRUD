import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type IUsuario = {
  uid: string;
  name: string;
  birthDay: Date;
  photo: string;
};

type IStateUsuario = {
  [uid: string]: IUsuario;
};

const initialState: IStateUsuario = {};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IUsuario>) => {
      state[action.payload.uid] = action.payload;
    },
    rm: (state, action: PayloadAction<{uid: IUsuario['uid']}>) => {
      delete state[action.payload.uid];
    },
    update: (
      state,
      action: PayloadAction<Partial<IUsuario> & {uid: IUsuario['uid']}>,
    ) => {
      state[action.payload.uid] = {
        ...state[action.payload.uid],
        ...action.payload,
      };
    },
  },
});

export const {add, rm, update} = usuarioSlice.actions;

export default usuarioSlice.reducer;
