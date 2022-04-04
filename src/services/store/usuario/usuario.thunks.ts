import {batch} from 'react-redux';
import * as userApi from '~/services/api/usuario';
import {AppThunk} from '..';
import * as userAction from '../usuario/usuario.store';

export const getAll = (): AppThunk<Promise<boolean>> => async dispatch => {
  try {
    const {data} = await userApi.getAll();
    batch(() => {
      for (let user of data) {
        dispatch(
          userAction.update({
            uid: user.uid,
            birthDay: new Date(user.birthDate),
            name: user.name,
            photo: user.photo,
          }),
        );
      }
    });
    return true;
  } catch (error) {
    return false;
  }
};
