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
  };

  componentDidMount() {
    this.setState({ result: '' });
  }

  hitServices_ChangeSoftoken = (type: string): void => {
    this.setState({ loading: true });
    Services(type, 'StressTestServices')
      .then((result: any) => {
        this.setState({ loading: false, result: String(result) });
      })
      .catch((error: Error) => {
        this.setState({ loading: false, result: error.toString() });
      });
  };

  render() {
    const { result, loading } = this.state;
    return (
      <View style={styles.container}>
        <TypographyText>CHANGE SOFTOKEN</TypographyText>
        <Margin param={40} />
        <Button2 style={styles.button} title="SOFTOKEN AKTIFKAN" onPress={() => this.hitServices_ChangeSoftoken('Y')} />
        <View>
          <Margin param={40} />
        </View>
        <Button2
          style={styles.button}
          title="SOFTOKEN NONAKTIFKAN"
          onPress={() => this.hitServices_ChangeSoftoken('N')}
        />
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <TypographyText>{result}</TypographyText>
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
});

export const ChangeSoftokenPage = memo(ChangeSoftokenPageComponent);
