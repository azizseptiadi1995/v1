import React, { memo, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from 'react-native';
import { Services } from 'src/controller/UnlinkDevices';
import Button2 from 'src/component/Button';
import CustomTextInput from 'src/component/CustomTextInput';
import TypographyText from 'src/component/TypographyText';
import Margin from 'src/component/margin';

const { width } = Dimensions.get('screen');

interface UnlinkDevicesPageProps { }

class UnlinkDevicesPageComponent extends React.Component<UnlinkDevicesPageProps> {
  state = {
    result: '',
    userID: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ result: '' });
  }

  hitServices_UnlinkDevices = () => {
    const { userID } = this.state;
    if (userID) {
      this.setState({ loading: true });
      Services(userID, 'StressTestServices')
        .then((result: string) => {
          this.setState({ loading: false, result });
        })
        .catch((error: Error) => {
          this.setState({ loading: false, result: error.toString() });
        });
      return
    }
    this.setState({ loading: false, result: '-' });
  };


  render() {
    const { result, userID, loading } = this.state;
    return (
      <View style={styles.container}>
        <Margin param={40} />
        <TypographyText style={styles.headerbig}>Unlink Device</TypographyText>
        <TypographyText style={styles.text}>Lakukan Input User ID yang ingin di lakukan UNLINK DEVICE pada aplikasi PermataMobileX</TypographyText>
        <Margin param={40} />
        <TypographyText style={styles.headerTittle}>User ID</TypographyText>
        <Margin param={10} />
        <View style={styles.inputContainer}>
          <Image source={require('../../../V2/assets/iphone.png')} style={styles.inputImage} />
          <CustomTextInput
            placeholder={'Input User ID'}
            keyboardType={'default'}
            onChangeText={(text: string) => this.setState({ userID: text, result: '' })}
            value={userID}
            style={styles.input}
          />
        </View>
        <View style={{ width: '100%' }}>
          <Button2 title="Unlink Devices" onPress={this.hitServices_UnlinkDevices} />
        </View>
        <Margin param={10} />
        <TypographyText>{'Response API:' + result}</TypographyText>
        <Margin param={10} />
        <TypographyText style={{ color: 'blue', fontSize: 20 }}>{result == '-' ? 'mohon input user ID ' : result ? 'Anda berhasil Unlink Device User ID :' + userID : ''}</TypographyText>
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
  input: {
    width: width * 0.8,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
    maxHeight: '60%',
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
    width: 40,
    height: 40,
    marginRight: 5,
    top: '-3%'
  },
});

export const UnlinkDevicesPage = memo(UnlinkDevicesPageComponent);
