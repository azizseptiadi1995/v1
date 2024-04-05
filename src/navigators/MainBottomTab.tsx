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
import { ChartPage } from 'src/pages/Chart';

const { Navigator, Screen } = createBottomTabNavigator<MainBottomTabParamList>();

export type MainBottomTabParamList = {
  Home: undefined;
  Settings: undefined;
  UnlinkDevice: undefined;
  OTP: undefined;
  ChangeSoftoken: undefined;
  Chart: undefined;
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
          color: theme.colors.text,
          fontSize: 16,
        },
      }}
    >
      <Screen
        name="UnlinkDevice"
        component={UnlinkDevicesPage}
        options={{
          tabBarLabel: t('unlinkDevice'),
          tabBarIcon: ({ color, size }) => (
            <Icon type="antdesign" name="mobile1" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="OTP"
        component={GetOTPPage}
        options={{
          tabBarLabel: t('OTP'),
          tabBarIcon: ({ color, size }) => (
            <Icon type="antdesign" name="message1" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="ChangeSoftoken"
        component={ChangeSoftokenPage}
        options={{
          tabBarLabel: t('changeSoftoken'),
          tabBarIcon: ({ color, size }) => (
            <Icon type="antdesign" name="export2" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Chart"
        component={ChartPage}
        options={{
          tabBarLabel: 'Chart',
          tabBarIcon: ({ color, size }) => (
            <Icon type="antdesign" name="barchart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
