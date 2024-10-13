import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mainRoutes } from "./MainRoutes";
import TabStack from "../TabStack/TabStack";

const Main = createNativeStackNavigator();

const MainStack = () => {
    const routes = mainRoutes;
    return (
        <Main.Navigator
            options={{ headerShown: false }}
            initialRouteName={'TabStack'}>
            <Main.Screen
                options={{ headerShown: false }}
                name={"TabStack"}
                component={TabStack}
            />
            {routes.map(data => {
                return (
                    <Main.Screen
                        options={{ headerShown: false }}
                        name={data?.name}
                        component={data?.component}
                    />
                );
            })}
        </Main.Navigator>
    );
};

export default MainStack;