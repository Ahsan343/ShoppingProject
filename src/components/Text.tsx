import React from 'react';
import { Text } from 'react-native';

interface Props {
  style: any;
  label: string;
}

const RNText = (props: Props) => {
  const { style, label } = props;
  return (
    <Text style={style ?? {}} selectable>
      {label}
    </Text>
  );
};

export default RNText;
