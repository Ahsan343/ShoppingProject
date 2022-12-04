import { apiClient } from './Api';
import { ENDPOINTS } from './EndPoints';

const getAllProducts = async () => {
  const response = await apiClient.get(ENDPOINTS.products);
  return response.data;
};

export { getAllProducts };
