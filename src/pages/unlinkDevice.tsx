import React, { memo, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
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
    this.setState({ loading: true });
    Services(userID, 'StressTestServices')
      .then((result: string) => {
        this.setState({ loading: false, result });
      })
      .catch((error: Error) => {
        this.setState({ loading: false, result: error.toString() });
      });
  };

  render() {
    const { result, userID, loading } = this.state;
    return (
      <View style={styles.container}>
        <TypographyText>unlinkDevice</TypographyText>
        <Margin param={20} />
        <CustomTextInput
          placeholder={'Input User ID'}
          keyboardType={'default'}
          onChangeText={(text: string) => this.setState({ userID: text })}
          value={userID}
          style={styles.input}
        />
        <TypographyText>{result}</TypographyText>
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <Button2 title="Unlink Devices" onPress={this.hitServices_UnlinkDevices} />
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
    width: width * 0.8,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
    maxHeight: '60%',
    borderRadius: 5,
  },
});

export const UnlinkDevicesPage = memo(UnlinkDevicesPageComponent);
