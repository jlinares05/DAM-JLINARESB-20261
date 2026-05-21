import React from "react";
import { MainTemplate } from "../../components/templates";
import { RegisterProductForm, ProductData } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";

const RegisterProductPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleCreate = (data: ProductData) => {
        console.log('Crear producto:', data);
        // TODO: guardar en DB
        navigation.navigate('Dashboard');
    };

    return (
        <MainTemplate title="REGISTRAR PRODUCTO" subtitle="Create a new product listing">
            <RegisterProductForm
                onSubmit={handleCreate}
                onBack={() => navigation.navigate('Dashboard')}
            />
        </MainTemplate>
    );
};

export default RegisterProductPage;