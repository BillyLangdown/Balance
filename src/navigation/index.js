import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Browse from "../components/screens/Browse";
import RestaurantDetailsPage from "../components/screens/RestaurantDetails";
import DishDetails from "../components/screens/DishDetails";
import Basket from "../components/screens/Basket";
import BalanceHeader from "../layout/BalanceHeader";

import {
  Foundation,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "../components/screens/Home";
import Diet from "../components/screens/Diet";
import Profile from "../components/screens/Profile";
import {
  withAuthenticator,
  Authenticator,
  useTheme,
  ThemeProvider,
} from "@aws-amplify/ui-react-native";

import getTheme from "../theme";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {
    tokens: { colors },
  } = useTheme();

  const myTheme = getTheme();

  return (
    <ThemeProvider theme={myTheme}>
      <Authenticator.Provider>
        <Authenticator Header={BalanceHeader}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
          </Stack.Navigator>
        </Authenticator>
      </Authenticator.Provider>
    </ThemeProvider>
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
      <BrowseStack.Screen name="Basket" component={Basket} />
    </BrowseStack.Navigator>
  );
};

export default RootNavigator;
