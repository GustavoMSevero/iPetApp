import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home } from "../Home";

const Tab = createMaterialTopTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { flex: 1, padding: 0 },
      }}
    >
      <Tab.Screen name="Veterinária" component={Home} />
      <Tab.Screen name="Rações" component={Home} />
      <Tab.Screen name="Meu Pet" component={Home} />
    </Tab.Navigator>
  );
}
