import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '../../Components/BottomTab';
import { sellerTabRoutes } from './SellerTabRoutes';
import SellerBottomTab from '../../Components/SellerBottomTabs';

const Tab = createBottomTabNavigator();
const routes = sellerTabRoutes;
const SellerTabStack = () => {
  return (
    <Tab.Navigator 
    lazy={true}
     
    tabBar={props => <SellerBottomTab {...props} />}>
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
export default SellerTabStack;
