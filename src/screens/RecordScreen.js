import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../styles/style';
import { useNavigation } from '@react-navigation/native';

const RecordScreen = ({balance, balance2}) => {
    const nav = useNavigation();

    const handleGoBack = () => {
        nav.goBack();
    };


  return (
    <View style={style.container}>
        <Text style={style.title}>RELATÓRIO</Text>
      <View style={style.recordView}>
        <Text style={style.recordItem}>Nome: Elias Souza Lima</Text>
        <Text style={style.recordItem}>Número da Conta 1: 20222018493</Text>
        <Text style={style.recordItem}>
          Saldo da Conta 1: R$ {balance.toFixed(2)}
        </Text>
      </View>
      <View style={style.recordView}>
        <Text style={style.recordItem}>Nome: Fábio Henrique Santos Bastos</Text>
        <Text style={style.recordItem}>Número da Conta 2: 20222018555</Text>
        <Text style={style.recordItem}>
          Saldo da Conta 2: R$ {balance2.toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity style={style.button} onPress={handleGoBack}>
        <Text style={style.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecordScreen;
