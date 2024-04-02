import React, { memo, useEffect } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import { Services, APIURL } from 'src/controller/ChangeSoftoken';
const { width } = Dimensions.get('window');
const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text};
`;
const ChangeSoftokenPageComponent = (): JSX.Element => {
  const [result, setResult] = React.useState("");
  useEffect(() => {
    setResult('')
  }, []);
  function hitServices_ChangeSoftoken(type: string) {
    fetch(APIURL(), Services(type))
      .then(response => response.text())
      .then(result => setResult('SOFTOKEN ' + type + ' ' + result))
      .catch(error => setResult(error));
  }
  useEffect
  return (
    <View style={styles.container}>
      <Title>{'CHANGE SOFTOKEN'}</Title>
      <Button title="SOFTOKEN Y" onPress={() => hitServices_ChangeSoftoken('Y')} />
      <View>
        <Title>{''}</Title>
      </View>
      <Button title="SOFTOKEN N" onPress={() => hitServices_ChangeSoftoken('N')} />
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

export const ChangeSoftokenPage = memo(ChangeSoftokenPageComponent);
