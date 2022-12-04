import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import RNText from './Text';
import CarSVg from '../assets/images/cart2.svg';

interface props {
  headerLable: string;
}

const MainHeader = ({ headerLable }: props) => {
  return (
    <View style={styles.headerView}>
      <Image
        style={styles.logoStyle}
        source={require('../assets/images/logo.png')}
      />
      <RNText style={styles.starTextStyle} label={headerLable} />
      <CarSVg width={30} height={30} />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
  },
  starTextStyle: {
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  headerView: {
    height: 50,
    backgroundColor: '#F9F9F9',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCDD3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
