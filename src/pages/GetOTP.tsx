import React, { memo, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Services } from 'src/controller/OTP';
import Button2 from 'src/component/Button';
import CustomTextInput from 'src/component/CustomTextInput';
import TypographyText from 'src/component/TypographyText';
import Margin from 'src/component/margin';

interface GetOTPPageProps { }

class GetOTPPageComponent extends React.Component<GetOTPPageProps> {
  state = {
    resultDO: '',
    resultPMOBX: '',
    loading: false,
    otp: '',
    otpDO: '',
  };

  componentDidMount() {
    this.setState({ resultDO: '', resultPMOBX: '' });
  }

  hitServices_OTP = (trxDO: string, tokenDO: string, trxPMOB: string, tokenPMOB: string): void => {
    this.setState({ loading: true });

    if (tokenPMOB.length === 0) {
      this.setState({ loading: false, resultPMOBX: 'No Challenge Code PMOBX' });
    }

    if (tokenDO.length === 0) {
      this.setState({ loading: false, resultDO: 'No Challenge Code DO' });
    }

    if (tokenDO.length > 0) {
      Services(tokenDO, trxDO, 'StressTestServices')
        .then((result: string) => {
          this.setState({ loading: false, resultDO: 'BERHASIL RES INI OTP PMOB : ' + result });
        })
        .catch((error: Error) => {
          this.setState({ loading: false, resultDO: 'GAGAL RES INI OTP PMOB : ' + error.toString() });
        });
    }

    if (tokenPMOB.length > 0) {
      Services(tokenPMOB, trxPMOB, 'StressTestServices')
        .then((result: string) => {
          this.setState({ loading: false, resultPMOBX: 'BERHASIL RES INI OTP PMOB : ' + result });
        })
        .catch((error: Error) => {
          this.setState({ loading: false, resultPMOBX: 'GAGAL RES INI OTP PMOB : ' + error.toString() });
        });
    }
  };

  render() {
    const { resultDO, resultPMOBX, loading, otp, otpDO } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Margin param={40} />
          <TypographyText style={styles.headerbig}>Generate OTP</TypographyText>
          <TypographyText style={styles.text}>Lakukan Input Challenge Code dan klik Submit untuk mendapatkan hasil OTP DO ataupun PermataMobileX</TypographyText>
          <Margin param={60} />
          <TypographyText style={styles.headerText}>Input OTP Permata Mobile X</TypographyText>
          <View style={styles.inputContainer}>
            <Image source={require('../../../V2/assets/otp.png')} style={styles.inputImage} />
            <CustomTextInput
              placeholder={'Input Challenge Code TRX'}
              keyboardType="numeric"
              onChangeText={(text: string) => this.setState({ otp: text, resultPMOBX: '', resultDO: '' })}
              value={otp}
              style={styles.input}
            />
          </View>
        </View>
        <Margin param={20} />
        <View style={styles.section}>
          <TypographyText style={styles.headerText}>Input OTP DO</TypographyText>
          <View style={styles.inputContainer}>
            <Image source={require('../../../V2/assets/otp.png')} style={styles.inputImage} />
            <CustomTextInput
              placeholder={'Input Challenge Code DO'}
              keyboardType="numeric"
              onChangeText={(text: string) => this.setState({ otpDO: text })}
              value={otpDO}
              style={styles.input}
            />
          </View>
          <Margin param={40} />
          <View style={{ width: '90%' }}>
            <Button2 title="SUBMIT OTP" onPress={() => this.hitServices_OTP('getotpdo', otpDO, 'getotp', otp)} />
          </View>
        </View>
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <TypographyText style={styles.result}>{'Hasil OTP PermataMobileX : ' + resultPMOBX}</TypographyText>
        <TypographyText style={styles.result}>{'Hasil OTP DO : ' + resultDO}</TypographyText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: '5%',
  },
  section: {
    marginBottom: 0,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    width: '90%',
  },
  headerbig: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export const GetOTPPage = memo(GetOTPPageComponent);
