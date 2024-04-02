import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import { TextInput } from 'react-native-paper';
import { Services, APIURL } from 'src/controller/UnlinkDevices';

const { width } = Dimensions.get('window');

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text};
`;

const UnlinkDevicesPageComponent = () => {
  const [result, setResult] = React.useState("");
  const [userID, setuserID] = useState('');

  useEffect(() => {
    setResult('');
  }, []);

  function hitServices_UnlinkDevices() {
    try {
      fetch(APIURL(), Services(userID, 'unlinksepaket'))
        .then(response => response.text())
        .then(result => setResult(result))
        .catch(error => setResult(error));
    } catch (e) {
      setResult(`${e} action gagal`);
    }
  }

  return (
    <View style={styles.container}>
      <Title>{'unlinkDevice'}</Title>
      <TextInput
        style={styles.input}
        value={userID}
        onChangeText={text => setuserID(text)}
      />
      <Button title="Submit" onPress={hitServices_UnlinkDevices} />
      <Title>{result}</Title>
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

export const UnlinkDevicesPage = memo(UnlinkDevicesPageComponent);
