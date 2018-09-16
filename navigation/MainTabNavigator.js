/* eslint react/prop-types: 0 */
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import CONSTANTS from '../constants';
import TodosScreen from '../screens/TodosScreen';

const commonNavigationOptions = ({ navigation }) => ({
    header: null,
    title: navigation.state.routeName,
});

const routeOptions = {
    screen: TodosScreen,
    navigationOptions: commonNavigationOptions,
};

// different routes for all, active and completed todos
const TabNav = TabNavigator(
    // route configurations
    {
        [CONSTANTS.ALL]: routeOptions,
        [CONSTANTS.ACTIVE]: routeOptions,
        [CONSTANTS.COMPLETED]: routeOptions,
    },
    {
        // tab navigator config
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case CONSTANTS.ALL:
                        iconName = 'inbox';
                        break;
                    case CONSTANTS.ACTIVE:
                        iconName = 'star';
                        break;
                    case CONSTANTS.COMPLETED:
                        iconName = 'check-circle';
                }
                return (
                    <MaterialIcons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                );
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#06a456',
        },
    },
);

export default TabNav;
