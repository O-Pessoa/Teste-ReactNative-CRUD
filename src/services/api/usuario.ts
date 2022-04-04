import axiosInstance from '../axiosInstance';

type IUserAPI = {
  uid: string;
  name: string;
  birthDate: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
};

export const getAll = async () => {
  try {
    return await axiosInstance.get<Array<IUserAPI>>('/user');
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (uid: string) => {
  try {
    return await axiosInstance.delete<boolean>(`/user/${uid}`);
  } catch (error) {
    throw error;
  }
};

export const addUser = async (name: string, birthDate: Date, photo: string) => {
  try {
    return await axiosInstance.post<IUserAPI>('/user', {
      name,
      birthDate: birthDate.toISOString(),
      photo,
    });
  } catch (error) {
    throw error;
  }
};
