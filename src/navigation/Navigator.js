import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator } from "@react-navigation/stack";
import SystemsList from '../screens/systemsList/SystemsList';

const RootStackNavigator = createStackNavigator(
    {
        StartScreen: {
            screen: SystemsList,
            navigationOptions: {
                headerBackTitle: null,
                headerShown: false,
            },
        },
    },
    {
      initialRouteParams: 'SystemsList',
    },
);

export default createAppContainer(RootStackNavigator);
  