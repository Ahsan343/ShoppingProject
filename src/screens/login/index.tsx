import React, { useEffect, useState } from 'react';
import { Keyboard, SafeAreaView, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/UserSlice';
import Input from '../../components/Input';
import LoginButton from '../../components/LoginButton';
import RNText from '../../components/Text';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usernameFocus, setUsernameFocus] = React.useState('');
  const [clickableBtn, setClickableBtn] = React.useState(false);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onChangePassword = (val: any) => {
    if (password != '') {
      setClickableBtn(true);
    } else {
      setClickableBtn(false);
    }
    setPassword(val);
  };

  const onFoucedFN = (val: any) => {
    if (val == 'user') {
      setUsernameFocus('user');
    } else if (val == 'pass') {
      setUsernameFocus('pass');
    } else {
      setUsernameFocus('');
    }
  };

  const onChangeUserName = (val: any) => {
    setUserName(val);
  };

  const login = () => {
    let validated = validate(userName);
    if (validated) {
      let obj = {
        email: userName,
      };
      dispatch(setUser(obj));
    }
  };

  const validate = (text: any) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.innerView}>
        <Input
          placeholder={'Email'}
          value={userName}
          onChange={onChangeUserName}
          focused={usernameFocus == 'user' ? true : false}
          onFocus={onFoucedFN}
        />
        <Input
          password={true}
          placeholder={'Password'}
          value={password}
          onChange={onChangePassword}
          focused={usernameFocus == 'pass' ? true : false}
          onFocus={onFoucedFN}
        />
        <LoginButton label="Login" clickable={clickableBtn} onPress={login} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: '#F9F9F9', justifyContent: 'center' },
  innerView: { padding: 20 },
});

export default LoginScreen;
