import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Index from "./Home"
import Journaling from "./Journaling"
import Achievements from "./Achievements"
import HabitBuilder from "./Habit Builder"
import ChatBot from "./Chatbot"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Plus from '@expo/vector-icons/MaterialCommunityIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Ionicons } from "@expo/vector-icons"
import { TabBarIndicator } from "react-native-tab-view"
//Tab Bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
      <Tab.Navigator>
          <Tab.Screen name="ChatBot" component={ChatBot}
          options={{tabBarIcon: ()=> <MaterialCommunityIcons name="robot-excited-outline" size={24} color="black" />}}
          />
          <Tab.Screen name="Journaling" component={Journaling} 
          options={{tabBarIcon: ()=> <Ionicons name="book-outline" size={24} color="black" />}}
          />
          <Tab.Screen name="Home" component={Index} 
          options={{tabBarIcon: ()=> <AntDesign name="home" size={24} color="black" />}}
          />
          <Tab.Screen name="Habit Builder" component={HabitBuilder} 
          options={{tabBarIcon: () => <Plus name="plus-minus-variant" size={24} color="black" />}}
          />
          <Tab.Screen name="Achievements" component={Achievements} 
          options={{tabBarIcon: ()=> <EvilIcons name="trophy" size={24} color="black" />}}
          />
      </Tab.Navigator>
  );
}

export default function Navigation() {
  return <TabGroup />;
}
