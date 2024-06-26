import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./src/pantalla/home/home.jsx";
import { Personajes } from './src/pantalla/personajes/personajes.jsx';
import { Configuracion } from './src/pantalla/confifuracion/configuracion.jsx';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Personajes" component={Personajes} />
        <Stack.Screen name="Configuracion" component={Configuracion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


