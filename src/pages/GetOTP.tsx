import React, { memo, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Services } from 'src/controller/OTP';
import Button2 from 'src/component/Button';
import CustomTextInput from 'src/component/CustomTextInput';
import TypographyText from 'src/component/TypographyText';
import Margin from 'src/component/margin';
const GetOTPPageComponent = (): JSX.Element => {
  const [resultDO, setResultDO] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpDO, setOtpDO] = useState('');
  useEffect(() => {
    setResultDO('');
  }, []);

  function hitServices_OTP(trx: string, token: string) {
    setLoading(true)
    Services(token, trx, 'StressTestServices')
      .then(result => {
        setLoading(false)
        setResultDO(trx == 'getotp' ? 'BERHASIL RES INI OTP PMOB : ' + result : 'BERHASIL RES INI OTP DO : ' + result)
      })
      .catch(error => {
        setLoading(false)
        setResultDO(trx == 'getotp' ? 'GAGAL RES INI OTP PMOB : ' + error.toString() : 'GAGAL RES INI OTP DO : ' + error.toString())
      });
  }

  return (
    <View style={styles.container}>
      <TypographyText>Input OTP</TypographyText>
      <CustomTextInput placeholder={'Input Challange Code TRX'} keyboardType="numeric" onChangeText={text => setOtp(text)} value={otp} style={styles.input} />
      <Button2 title='SUBMIT OTP PMOBX' onPress={() => hitServices_OTP('getotp', otp)} />
      <Margin param={40} />
      <TypographyText>Input OTP DO</TypographyText>
      <CustomTextInput placeholder={'Input Challange Code DO'} keyboardType="numeric" onChangeText={text => setOtpDO(text)} value={otpDO} style={styles.input} />
      <Button2 title='SUBMIT OTP DO' onPress={() => hitServices_OTP('getotpdo', otpDO)} />
      {loading == true ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : null}
      <TypographyText>{resultDO}</TypographyText>
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
    marginBottom: 20,
    maxHeight: '60%',
    width: '50%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export const GetOTPPage = memo(GetOTPPageComponent);
