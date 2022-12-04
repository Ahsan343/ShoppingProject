import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputTextProps {
  onChange: any;
  value: any;
  placeholder?: any;
  password?: any;
  focused?: any;
  onFocus?: any;
}

const Input: React.FC<InputTextProps> = props => {
  const {
    onChange,
    value,
    placeholder,
    password = false,
    focused = false,
    onFocus,
  } = props;

  return (
    <TextInput
      placeholder={placeholder}
      style={[
        styles.input,
        focused ? { borderWidth: 2, borderColor: '#6C5DD3' } : {},
      ]}
      onChangeText={onChange}
      // onFocus={() => onFocus(password ? 'pass' : 'user')}
      // onBlur={() => onFocus('')}
      value={value}
      secureTextEntry={password}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Input;
