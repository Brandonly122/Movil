import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Contenedor } from "../../componentes/contenedor/contenedor";

export const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);

    const getPersonajes = async () => {
        try {
            const response = await fetch(
                "https://rickandmortyapi.com/api/character"
            );
            const json = await response.json();
            setPersonajes(json.results);
            console.log(json.results); // Log the results after setting state

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getPersonajes();
    }, []); // Empty dependency array to run effect only once

    return (
        <Contenedor>
            <FlatList
                data={personajes}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()} // Ensure key is a string
            />
            <View>
                <Text>Estoy en pantalla Personajes</Text>
            </View>
        </Contenedor>
    );
};
