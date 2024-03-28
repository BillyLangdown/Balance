import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Browse from "../components/screens/Browse";
import RestaurantDetailsPage from "../components/screens/RestaurantDetails";
import DishDetails from "../components/screens/DishDetails";
import Basket from "../components/screens/Basket";
import Orders from "../components/screens/Orders";
import OrderDetails from "../components/screens/OrderDetails";
import {
  Foundation,
  FontAwesome,
  FontAwesome6,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "../components/screens/Home";
import Diet from "../components/screens/Diet";
import Profile from "../components/screens/Profile";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={Diet}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="leaf" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BrowseStack = createNativeStackNavigator();

const BrowseStackNavigator = () => {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        options={{ headerShown: false }}
        name="BrowseRestaurants"
        component={Browse}
      />
      <BrowseStack.Screen
        options={{ headerShown: false }}
        name="RestaurantDetails"
        component={RestaurantDetailsPage}
      />
      <BrowseStack.Screen name="DishDetails" component={DishDetails} />
    </BrowseStack.Navigator>
  );
};

export default RootNavigator;
