import { Platform } from 'react-native';


export const Colors = {
    white: '#ffffff',
    offwhite: '#f4f5f6',
    alphaGray: '#eff0ef',
    lightGray: '#d3d3d3',
    blueGray: '#e6ecf0',
    greenGray: '#ebeeec',
    gray: '#808080',
    darkGray: '#a9a9a9',
    dimGray: '#696969',
    darkCharcoal: '#333333',
    black: '#000000',
    aliceBlue: '#f5fcff',
    lemonYellow: '#fceb4f',
    darkTurquoise: '#00e5c5',
    turquoise: '#25F2C7',
    dangerRed: '#ff453a',
    carminePink: '#eb484c',
};
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export function getUrl(response: string) {
    try {
        let URL = 'http://192.168.7.61:8081/services/BotService/';
        return URL + response;
    } catch (error) {
    }
}











