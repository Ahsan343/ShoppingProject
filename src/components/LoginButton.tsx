import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import RNText from './Text';

interface Props {
  onPress: any;
  clickable: boolean;
  btnStyles: any;
  label: string;
}

const LoginButton = ({ onPress, clickable, btnStyles, label }: Props) => {
  return (
    <TouchableOpacity
      disabled={!clickable}
      onPress={onPress}
      style={[
        btnStyles ? btnStyles : styles.selectBtn,
        clickable
          ? { backgroundColor: '#0080FE' }
          : { backgroundColor: '#D4D6FA' },
      ]}>
      <RNText style={styles.textStyle} label={label} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Lato-Bold',
  },
  selectBtn: {
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default LoginButton;
