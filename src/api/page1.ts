import axiosInstance from '@/services/axiosConfig';


export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users: ' + error);
  }
};
