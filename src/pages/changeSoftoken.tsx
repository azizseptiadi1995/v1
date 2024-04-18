import React, { memo, useEffect } from 'react';
import { Dimensions, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Services } from 'src/controller/ChangeSoftoken';
import Button2 from 'src/component/Button';
import TypographyText from 'src/component/TypographyText';
import Margin from 'src/component/margin';

const { width } = Dimensions.get('window');

interface ChangeSoftokenPageProps { }

class ChangeSoftokenPageComponent extends React.Component<ChangeSoftokenPageProps> {
  state = {
    result: '',
    loading: false,
    status: '',
  };

  componentDidMount() {
    this.setState({ result: '', status: '' });
  }

  hitServices_ChangeSoftoken = (type: string): void => {
    this.setState({ loading: true, status: type });
    Services(type, 'StressTestServices')
      .then((result: any) => {
        this.setState({ loading: false, result: String(result) });
      })
      .catch((error: Error) => {
        this.setState({ loading: false, result: error.toString() });
      });
  };

  render() {
    const { result, loading, status } = this.state;
    return (
      <View style={styles.container}>
        <Margin param={40} />
        <TypographyText style={styles.headerbig}>CHANGE SOFTOKEN</TypographyText>
        <TypographyText style={styles.text}>Lakukan Ubah Transaksi MPIN Atau OTP Pada Aplikasi Permata Mobile X</TypographyText>
        <Margin param={40} />
        <TypographyText style={styles.headerText}>Aktifkan MPIN PermataMobileX</TypographyText>
        <View style={{ width: '100%' }}>
          <Button2 style={styles.button} title="AKTIFKAN MPIN" onPress={() => this.hitServices_ChangeSoftoken('Y')} />
        </View>
        <View>
          <Margin param={40} />
        </View>
        <TypographyText style={styles.headerText}>Aktifkan OTP PermataMobileX</TypographyText>
        <View style={{ width: '100%' }}>
          <Button2
            style={styles.button}
            title=" AKTIFKAN OTP"
            onPress={() => this.hitServices_ChangeSoftoken('N')}
          />
        </View>

        <Margin param={40} />
        <TypographyText>{'Response API :'}</TypographyText>
        <TypographyText style={{ fontWeight: 'bold' }} >{result}</TypographyText>
        <Margin param={40} />
        <TypographyText style={{ color: 'blue', fontSize: 30 }}>{status == 'Y' ? 'MPIN AKTIF' : status == 'N' ? 'OTP AKTIF' : ''}</TypographyText>
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  button: {
    width: '60%',
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
  text: {
    fontSize: 18,
    marginBottom: 10,
    width: '90%',
  },
  headerbig: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerTittle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export const ChangeSoftokenPage = memo(ChangeSoftokenPageComponent);
