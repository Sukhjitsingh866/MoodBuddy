import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Index from "./Home"
import Journaling from "./Journaling"
import Achievements from "./Achievements"
import HabitBuilder from "./Habit Builder"
import ChatBot from "./Chatbot"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Plus from '@expo/vector-icons/MaterialCommunityIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ChatBot" component={ChatBot}
            options={{tabBarIcon: () => <MaterialCommunityIcons name="robot-happy-outline" size={24} color="black" />}}
            />
            <Tab.Screen name="Journaling" component={Journaling}
            options={{tabBarIcon: ()=> <SimpleLineIcons name="notebook" size={24} color="black" />}}
            />
            <Tab.Screen name="Home" component={Index}
            options={{tabBarIcon:()=> <AntDesign name="home" size={24} color="black" />}}
            />
            <Tab.Screen name="Habit Builder" component={HabitBuilder}
            options={{tabBarIcon: ()=> <Plus name="checkbox-marked-circle-plus-outline" size={24} color="black" />}}
            />
            <Tab.Screen name="Achievements" component={Achievements}
            options={{tabBarIcon: ()=> <EvilIcons name="trophy" size={24} color="black" />}}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return(
        <TabGroup/>
    )
}