import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type KeyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'visible-password';

interface CustomTextInputProps extends TextInputProps {
    keyboardType?: KeyboardType;
}
const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, onChangeText, value, style, keyboardType }) => {
    return (
        <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            style={[styles.input, style]}
            keyboardType={keyboardType}
        />
    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
});

export default CustomTextInput;
