import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const { height } = Dimensions.get('screen');
interface Margin4Props {
    param?: number;
}
const Margin: React.FC<Margin4Props> = ({ param = 4 }) => {
    return <View style={{ height: heightPercentageToDP((param / height) * 100) }} />;
}
const styles = StyleSheet.create({});
export default Margin;
