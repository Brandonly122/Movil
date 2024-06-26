import react from "react";
import { View, Text, Button } from "react-native"
import { Contenedor } from "../../componentes/contenedor/contenedor";

export const Home = ({ navigation }) => {
    return <Contenedor>
        <View>
            <Text>Estoy en pantalla HOME </Text>
            <Button
                title="PERSONAJES"
                onPress={() => navigation.navigate('Personajes')}
            />
            <Button
                title="CONFIGURAR"
                onPress={() => navigation.navigate('Configuracion')}
            />
        </View>
    </Contenedor>

}