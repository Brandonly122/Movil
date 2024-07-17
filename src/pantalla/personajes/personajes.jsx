import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Contenedor } from "../../componentes/contenedor/contenedor";
import { NativeBaseProvider, Box, HStack, Avatar, VStack, Text } from 'native-base';

export const Personajes = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPersonajes = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPersonajes();
    }, []);

    const Card = ({ url, nombre, descripcion }) => {
        return (
            <Box pl="4" pr="5" py="2">
                <HStack alignItems="center" space={3}>
                    <Avatar size="48px" source={{ uri: url }} />
                    <VStack>
                        <Text color="coolGray.800">{nombre}</Text>
                        <Text color="coolGray.600">{descripcion}</Text>
                    </VStack>
                </HStack>
            </Box>
        );
    };

    return (
        <NativeBaseProvider>
            <Contenedor>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id.toString()} // Ensure key is a string
                        renderItem={({ item }) => (
                            <Card url={item.image} nombre={item.name} descripcion={item.species} />
                        )}
                    />
                )}
            </Contenedor>
        </NativeBaseProvider>
    );
};
