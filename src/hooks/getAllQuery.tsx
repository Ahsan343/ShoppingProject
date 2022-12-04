import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = '';

const getData = async () => {
  const response = await axios.get(url);
  return response.data();
};

export const UsegetData = () => {
  const { isLoading, data } = useQuery(['data'], getData);
  return { data, isLoading };
};
