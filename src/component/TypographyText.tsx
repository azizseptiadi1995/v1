import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface TypographyTextProps {
    children: React.ReactNode;
    style?: TextStyle;
}

const TypographyText: React.FC<TypographyTextProps> = ({ children, style }) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'black',

    },
});

export default TypographyText;
