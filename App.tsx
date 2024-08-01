// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import AllExercisesScreen from "./screens/AllExercisesScreen";
import AddExerciseScreen from "./screens/AddExerciseScreen";
import ExerciseHistoryScreen from "./screens/ExerciseHistoryScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { ExerciseProvider } from "./contexts/ExerciseContext";
import { RootStackParamList } from "./types/navigation";
import OneRepMaxFormulaScreen from "./screens/settings/OneRepMaxFormulaScreen";
import RestTimerScreen from "./screens/settings/RestTimerScreen";
import TrainingIntervalScreen from "./screens/settings/TrainingIntervalScreen";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const Home = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="AllExercises"
            component={AllExercisesScreen}
            options={{
                title: "All Exercises",
                tabBarIcon: ({ color, size }) => <Icon name="list" color={color} size={size} />,
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="settings-outline" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
);

const App = () => {
    return (
        <ExerciseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="AddExercise"
                        component={AddExerciseScreen}
                        options={{
                            presentation: "modal",
                            title: "Add Exercise",
                        }}
                    />
                    <Stack.Screen
                        name="ExerciseHistory"
                        component={ExerciseHistoryScreen}
                        options={{ title: "Exercise History" }}
                    />
                    <Stack.Screen
                        name="OneRepMaxFormula"
                        component={OneRepMaxFormulaScreen}
                        options={{ title: "One Rep Max Formula" }}
                    />
                    <Stack.Screen
                        name="RestTimer"
                        component={RestTimerScreen}
                        options={{ title: "Rest Timer" }}
                    />
                    <Stack.Screen
                        name="TrainingInterval"
                        component={TrainingIntervalScreen}
                        options={{ title: "Training Interval" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ExerciseProvider>
    );
};

export default App;
