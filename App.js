import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/welcome';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import ContinueScreen from './screens/Authentication/continue';
import { Text } from 'react-native';
import EstateRegister from './screens/Authentication/EstateRegister';
import EstateLogin from './screens/Authentication/EstateLogin';
import VerifyPhoneNumber from './screens/Authentication/verifyPhonenumber';
import { createContext, useState } from 'react';
import { FormProvider } from './Context/FormContext';

const Stack = createStackNavigator();
export const appContext = createContext()

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    'Bold' : require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    'Light' : require("./assets/fonts/SpaceGrotesk-Light.ttf"),
  });

  if (!fontsLoaded && !fontError) {
      return null;
  }  

  return (
    <FormProvider>
      <PaperProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{title: false, headerTransparent: true,  headerTintColor: '#FFFFFF',}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Continue" component={ContinueScreen} options={{headerBackTitle: ' ',}}/>
          <Stack.Screen name="EstateLogin" component={EstateLogin} options={{headerBackTitle: ' ',}}/>
          <Stack.Screen 
            name="EstateRegister" 
            component={EstateRegister} 
            options={{
              headerBackTitle: ' ',
              headerRight: () => (
                <Text style={{ marginRight: 10, color: 'white', fontSize: 16, fontFamily: 'Light' }}>Step 1 out of 3</Text>
              ),
            }}
          />
          <Stack.Screen 
            name="VerifyPhoneNumber" 
            component={VerifyPhoneNumber} 
            options={{
              headerBackTitle: ' ',
              headerRight: () => (
                <Text style={{ marginRight: 10, color: 'white', fontSize: 16, fontFamily: 'Light' }}>Step 2 out of 3</Text>
              ),
            }}
          />
        </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </FormProvider>
  );
} 

// const [user, setUser] = React.useState(null);

// // Function to determine initial route
// const getInitialRoute = () => {
//   if (user && user.completedOnboarding && user.signedUp) {
//     return 'Home';
//   } else if (user && !user.completedOnboarding) {
//     return 'Onboarding';
//   } else {
//     return 'Signup';
//   }
// };