import react from "react";
import { View, Text, Button } from "react-native"
import { Contenedor } from "../../componentes/contenedor/contenedor";
import { useEffect } from "react";

const getMovies = async () => {
    try {
        const response = await fetch(
            'https://reactnative.dev/movies.json',
        );
        const json = await response.json();
        return json.movies;
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    getMovies();
}, []);


export const Personajes = () => {
    return <Contenedor>
        <View>
            <Text>Estoy en pantalla Personajes </Text>

        </View>
    </Contenedor>
}