import React, { memo, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { Services } from 'src/controller/UnlinkDevices';
import Button2 from 'src/component/Button';
import CustomTextInput from 'src/component/CustomTextInput';
import TypographyText from 'src/component/TypographyText';
import Margin from 'src/component/margin';
const { width } = Dimensions.get('screen');
const UnlinkDevicesPageComponent = () => {
  const [result, setResult] = useState("");
  const [userID, setuserID] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setResult('');
  }, []);
  function hitServices_UnlinkDevices() {
    setLoading(true)
    Services(userID, 'StressTestServices')
      .then(result => {
        setLoading(false)
        setResult(result);
      })
      .catch(error => {
        setLoading(false)
        setResult(error.toString());
      });
  }
  return (
    <View style={styles.container}>
      <TypographyText>unlinkDevice</TypographyText>
      <Margin param={20} />
      <CustomTextInput placeholder={'Input User ID'} keyboardType={undefined} onChangeText={text => setuserID(text)} value={userID} style={styles.input} />
      <TypographyText>{result}</TypographyText>
      {loading == true ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : null}
      <Button2 title='Unlink Devices' onPress={hitServices_UnlinkDevices} />
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
    maxHeight: '60%',
    borderRadius: 5,
  },
});

export const UnlinkDevicesPage = memo(UnlinkDevicesPageComponent);
