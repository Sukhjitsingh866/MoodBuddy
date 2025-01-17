import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Index from "./Home"
import Journaling from "./Journaling"
import Achievements from "./Achievements"
import HabitBuilder from "./Habit Builder"
import ChatBot from "./Chatbot"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Plus from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from "@expo/vector-icons"

//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
      <Tab.Navigator
      screenOptions={{tabBarActiveTintColor:"#1DA1F2", headerShown: false}} //this headerShown is to hide the header index but its not working, 
      // instead its hiding the good working ones. if you figure out how to hide the header index, please let me know. 
      >
          <Tab.Screen 
            name="ChatBot" 
            component={ChatBot}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <MaterialCommunityIcons 
                  name={focused ? "robot-excited" : "robot-excited-outline"} 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />
          <Tab.Screen 
            name="Journaling" 
            component={Journaling}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons 
                  name={focused ? "book" : "book-outline"} 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />
          <Tab.Screen 
            name="Home" 
            component={Index}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons 
                  name={focused ? "home" : "home-outline"} 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />
          <Tab.Screen 
            name="Habit Builder" 
            component={HabitBuilder}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <Plus 
                  name={focused ? "plus-minus" : "plus-minus-variant"} 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />
          <Tab.Screen 
            name="Achievements" 
            component={Achievements}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons 
                  name={focused ? "trophy" : "trophy-outline"} 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />
      </Tab.Navigator>
  );
}

export default function Navigation() {
  return <TabGroup />;
}
