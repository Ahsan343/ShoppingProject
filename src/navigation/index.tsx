import React from 'react';
import { useSelector } from 'react-redux';
import AuthenticatedStack from './AuthenticatedStack';
import UnAuthenticatedStack from './UnAuthenticatedStack';

const Navigation = () => {
  const { user } = useSelector((state: any) => state.reducer.user);

  return <>{user ? <AuthenticatedStack /> : <UnAuthenticatedStack />}</>;
};

export default Navigation;
