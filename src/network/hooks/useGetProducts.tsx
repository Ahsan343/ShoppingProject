import { useQuery } from '@tanstack/react-query';
import { reactQueryKeys } from '../../utils/Constants';
import { getAllProducts } from '../Services';

export const useGetProducts = () => {
  const { isLoading, data, refetch } = useQuery<any, Error>(
    [reactQueryKeys.product],
    async () => {
      return await getAllProducts();
    }
  );

  return { isLoading, data, refetch };
};
