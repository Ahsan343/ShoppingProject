import React from 'react';
import { View } from 'react-native';

export const ListSeparatorComponent: React.FC<{
  height: any;
}> = ({ height }) => {
  return <View style={height} />;
};
