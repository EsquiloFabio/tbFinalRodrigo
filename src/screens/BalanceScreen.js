import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import style from '../../styles/style';

const BalanceScreen = ({ balance }) => {
    const nav = useNavigation();

    const handleGoback = () => {
        nav.goBack();
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>SALDO</Text>
            <Text style={style.balanceItem}>R$ {balance.toFixed(2)}</Text>
            <TouchableOpacity style={style.button} onPress={handleGoback}>
                <Text style={style.buttonText}>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BalanceScreen;