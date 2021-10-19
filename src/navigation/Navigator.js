import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SystemData from '../screens/systemData/SystemData';
import SystemsList from '../screens/systemsList/SystemsList';

const RootStackNavigator = createStackNavigator(
    {
        SystemsList: {
            screen: SystemsList,
            navigationOptions: {
                headerBackTitle: null,
                headerShown: false,
            },
        },
        SystemData: {
            screen: SystemData,
            navigationOptions: {
                headerBackTitle: null,
                headerShown: false,
            }
        },
    },
    {
      initialRouteParams: 'SystemsList',
    },
);

export default createAppContainer(RootStackNavigator);
  