/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import {EventsTabNavigator} from '../eventsTab';
import {ProfileTabNavigator} from '../profileTab';
import React from "react";
import {connect} from 'react-redux';

const routeConfiguration = {
    Events: EventsTabNavigator,
    Profile: ProfileTabNavigator
}

const tabBarConfiguration = {
    navigationOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white'
    }
}

const TabBar = createBottomTabNavigator(routeConfiguration, tabBarConfiguration);

const TabBarNavigation = createAppContainer(TabBar);

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar,
    }
};

export default connect(mapStateToProps)(TabBarNavigation)