import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutUs from '../screens/AboutUs';
import ContactComponent from '../screens/ContactComponent';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const Home = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

Home.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

Home.path = '';

const AboutUsComponent = createStackNavigator(
    {
        Links: AboutUs,
    },
    config
);

AboutUsComponent.navigationOptions = {
    tabBarLabel: 'About Us',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    ),
};

AboutUsComponent.path = '';

const ContactUs = createStackNavigator(
    {
        Settings: ContactComponent,
    },
    config
);

ContactUs.navigationOptions = {
    tabBarLabel: 'Contact Us',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};

ContactUs.path = '';

const tabNavigator = createDrawerNavigator({
    Home,
    AboutUs,
    ContactUs,
});

tabNavigator.path = '';

export default tabNavigator;
