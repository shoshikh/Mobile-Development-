import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import CarDetailsScreen from "./DetailsScreen";
import BookingScreen from "./BookingScreen";


const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        CarDetails: CarDetailsScreen,
        Booking: BookingScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);
