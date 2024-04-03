import React, { memo, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Services } from 'src/controller/OTP';
import Button2 from 'src/component/Button';
import CustomTextInput from 'src/component/CustomTextInput';
import TypographyText from 'src/component/TypographyText';
import Margin from 'src/component/margin';

interface GetOTPPageProps { }

class GetOTPPageComponent extends React.Component<GetOTPPageProps> {
  state = {
    resultDO: '',
    loading: false,
    otp: '',
    otpDO: '',
  };

  componentDidMount() {
    this.setState({ resultDO: '' });
  }

  hitServices_OTP = (trx: string, token: string): void => {
    this.setState({ loading: true });
    Services(token, trx, 'StressTestServices')
      .then((result: string) => {
        this.setState({
          loading: false,
          resultDO:
            trx === 'getotp' ? 'BERHASIL RES INI OTP PMOB : ' + result : 'BERHASIL RES INI OTP DO : ' + result,
        });
      })
      .catch((error: Error) => {
        this.setState({
          loading: false,
          resultDO:
            trx === 'getotp' ? 'GAGAL RES INI OTP PMOB : ' + error.toString() : 'GAGAL RES INI OTP DO : ' + error.toString(),
        });
      });
  };

  render() {
    const { resultDO, loading, otp, otpDO } = this.state;
    return (
      <View style={styles.container}>
        <TypographyText>Input OTP</TypographyText>
        <CustomTextInput
          placeholder={'Input Challange Code TRX'}
          keyboardType="numeric"
          onChangeText={(text: string) => this.setState({ otp: text })}
          value={otp}
          style={styles.input}
        />
        <Button2 title="SUBMIT OTP PMOBX" onPress={() => this.hitServices_OTP('getotp', otp)} />
        <Margin param={40} />
        <TypographyText>Input OTP DO</TypographyText>
        <CustomTextInput
          placeholder={'Input Challange Code DO'}
          keyboardType="numeric"
          onChangeText={(text: string) => this.setState({ otpDO: text })}
          value={otpDO}
          style={styles.input}
        />
        <Button2 title="SUBMIT OTP DO" onPress={() => this.hitServices_OTP('getotpdo', otpDO)} />
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <TypographyText>{resultDO}</TypographyText>
      </View>
    );
  }
}

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

