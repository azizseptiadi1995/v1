import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({ title, style, textStyle, ...props }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} {...props}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;
