import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-easy-icon';
import { useTheme } from 'styled-components';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from 'src/navigators/AppStack';
import { UnlinkDevicesPage } from 'src/pages/unlinkDevice';
import { GetOTPPage } from 'src/pages/GetOTP';
import { ChangeSoftokenPage } from 'src/pages/changeSoftoken';

const { Navigator, Screen } = createBottomTabNavigator<MainBottomTabParamList>();

export type MainBottomTabParamList = {
  home: undefined;
  settings: undefined;
};

export type MainBottomTabNavigationProp<RouteName extends keyof MainBottomTabParamList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<MainBottomTabParamList, RouteName>,
    NativeStackNavigationProp<AppStackParamList>
  >;

export type MainBottomTabNavigations = {
  [RouteName in keyof MainBottomTabParamList]: MainBottomTabNavigationProp<RouteName>;
};

export type MainBottomTabRoutes = {
  [RouteName in keyof MainBottomTabParamList]: RouteProp<MainBottomTabParamList, RouteName>;
};

export const MainBottomTab = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.background,
        },
        tabBarLabelStyle: {
          textDecorationLine: 'underline',
          color: 'red',
        },
      }}
    >
      <Screen
        name="unlinkDevice"
        component={UnlinkDevicesPage}
        options={{
          tabBarLabel: t('unlinkDevice'),
          tabBarIcon: ({ color, size }) => (
            <Icon type="antdesign" name="unlinkDevice" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="OTP"
        component={GetOTPPage}
        options={{
          tabBarLabel: t('OTP'),
          tabBarIcon: ({ color, size }) => (
            <Icon type="antdesign" name="GetOTPPage" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="ChangeSoftokenPage"
        component={ChangeSoftokenPage}
        options={{
          tabBarLabel: 'ChangeSoftokenPage',
          tabBarIcon: ({ color, size }) => (
            <Icon type="antdesign" name="ChangeSoftokenPage" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
