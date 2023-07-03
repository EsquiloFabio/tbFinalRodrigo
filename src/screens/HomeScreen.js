import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import style from '../../styles/style';

function HomeScreen() {
    const nav = useNavigation();
    const route = useRoute();


    const loginData = route.params && route.params?.loginData;

    React.useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav]);

    return(
        <View style={style.container}>
            <Text style={style.title}>BANCO</Text>
            {loginData && <Text style={style.userInfo} >Usuário Conectado: {loginData.account}</Text>}

            <TouchableOpacity style={style.menuItem} onPress={() => nav.navigate('Saldo')}>
                <Text style={style.menuItemText}>SALDO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.menuItem} onPress={() => nav.navigate('Saque')}>
                <Text style={style.menuItemText}>SAQUE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.menuItem} onPress={() => nav.navigate('Deposito')}>
                <Text style={style.menuItemText}>DEPÓSITO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.menuItem} onPress={() => nav.navigate('Relatório')}>
                <Text style={style.menuItemText}>RELATÓRIO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.menuItem} onPress={() => nav.navigate('Transferência')}>
                <Text style={style.menuItemText}>TRANSFERÊNCIA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.menuItem} onPress={() => nav.navigate('Desconectar')}>
                <Text style={style.menuItemText}>DESCONECTAR</Text>
            </TouchableOpacity>
            <Text>Desenvolvido por Elias e Fábio</Text>
        </View>
    )

}

export default HomeScreen;