import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabRoutes } from './TabRoutes';
import BottomTab from '../../Components/BottomTab';

const Tab = createBottomTabNavigator();
const routes = tabRoutes;
const TabStack = () => {
  return (
    <Tab.Navigator 
    lazy={true}
     
    tabBar={props => <BottomTab {...props} />}>
        {routes.map(data => {
        return (
          <Tab.Screen
            options={{headerShown: false}}
            name={data?.name}
            component={data?.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}
export default TabStack;
