import { SafeAreaView } from "react-native";
import { Contenedorstyles } from "./contenedor.style";

export const Contenedor = ({ children }) => {

    return (
        <SafeAreaView style={Contenedorstyles.container}>

            {children}
        </SafeAreaView>
    );
};


