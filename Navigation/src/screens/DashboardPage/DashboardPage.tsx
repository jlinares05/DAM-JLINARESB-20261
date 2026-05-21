import React, { useState } from 'react';
import { View } from 'react-native';
import { MainTemplate } from '../../components/templates';
import { ProductList, Product } from '../../components/organisms';
import { Button } from '../../components/atoms';
import { SearchBar } from '../../components/molecules';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Routes';
import styles from './DashboardPageStyles';

const MOCK_PRODUCTS: Product[] = [
    { id: 1, nombre: 'Camisa Azul', sku: 'CA001', stock: 25, ganancia: 10.00 },
    { id: 2, nombre: 'Pantalón', sku: 'PA001', stock: 25, ganancia: 12.50 },
    { id: 3, nombre: 'Buzo rojo', sku: 'BU001', stock: 25, ganancia: 14.80 },
    { id: 4, nombre: 'Chaqueta negra', sku: 'CH001', stock: 25, ganancia: 11.20 },
];

const DashboardPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [search, setSearch] = useState('');

    const filtered = MOCK_PRODUCTS.filter(p =>
        p.nombre.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <MainTemplate title="Bienvenido, Jhon Doe" scrollable={false}>
            <View style={styles.actions}>
                <Button
                    title="NUEVO PRODUCTO"
                    onSubmit={() => navigation.navigate('RegisterProduct')}
                />
            </View>
            <SearchBar value={search} onChangeText={setSearch} />
            <View style={styles.sectionLabel} />
            <ProductList
                products={filtered}
                onVender={p => console.log('Vender:', p)}
            />
        </MainTemplate>
    );
};

export default DashboardPage;