import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import { TextInput } from 'react-native-paper';
import { Services, APIURL } from 'src/controller/OTP';

const { width } = Dimensions.get('window');

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text};
`;

const GetOTPPageComponent = (): JSX.Element => {
  const [resultDO, setResultDO] = useState('');
  const [otp, setOtp] = useState('');
  const [otpDO, setOtpDO] = useState('');

  useEffect(() => {
    setResultDO('');
  }, []);

  function hitServices_OTP(trx: string, token: string) {
    try {
      fetch(APIURL(), Services(token, trx))
        .then(response => response.text())
        .then(result => setResultDO(result))
        .catch(error => setResultDO(error));
    } catch (e) {
      setResultDO(`${e} action gagal`);
    }
  }

  return (
    <View style={styles.container}>
      <Title>{'Input OTP'}</Title>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={otp}
        onChangeText={text => setOtp(text)}
      />
      <Button title="Submit" onPress={() => hitServices_OTP('getotp', otp)} />

      <Title>{'Input OTP DO'}</Title>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={otpDO}
        onChangeText={text => setOtpDO(text)}
      />
      <Button title="Submit" onPress={() => hitServices_OTP('getotpdo', otpDO)} />

      <Title>{resultDO}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: width * 0.8,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export const GetOTPPage = memo(GetOTPPageComponent);
