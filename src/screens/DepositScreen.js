import React, {useState, useEffect } from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import style from '../../styles/style';

const DepositScreen = ({ balance, setBalance }) => {
  const nav = useNavigation();
  const [valueDeposit, setValueDeposit] = useState('');

  const handleGoback = () => {
    nav.goBack();
  };

  const handleDeposit = () => {
    const valueDepositFloat = parseFloat(valueDeposit);

    if (!valueDeposit || isNaN(valueDeposit) || valueDeposit <= 0) {
      alert('Digite um valor de depósito válido.');
      return;
    }

    setBalance(balance + valueDepositFloat);
    alert(`Depósito de R$ ${valueDepositFloat.toFixed(2)} realizado com sucesso!`);
    setValueDeposit('');
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>DEPÓSITO</Text>
      <TextInput
        style={style.input}
        keyboardType="numeric"
        placeholder="Valor do Depósito"
        value={valueDeposit}
        onChangeText={setValueDeposit}
      />
      <TouchableOpacity style={style.button} onPress={handleDeposit}>
        <Text style={style.buttonText}>DEPOSITAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={handleGoback}>
        <Text style={style.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DepositScreen;
