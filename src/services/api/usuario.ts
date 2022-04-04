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
