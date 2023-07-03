import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from '../../styles/style';

const WithdrawScreen = ({balance, setBalance}) => {
  const nav = useNavigation();
  const [valueWithdraw, setValueWithdraw] = useState('');

  const handleGoback = () => {
    nav.goBack();
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(valueWithdraw);

    if (!withdrawAmount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Digite um valor válido')
      return;
    }

    if (withdrawAmount > balance) {
        alert('Saldo Insuficiente')
      return;
    }

    setBalance(balance - withdrawAmount);
    setValueWithdraw('');
    alert(`Depósito de R$ ${withdrawAmount.toFixed(2)} realizado com sucesso!`)
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>SAQUE</Text>
      <TextInput
        style={style.input}
        keyboardType="numeric"
        placeholder="Valor do Saque"
        value={valueWithdraw}
        onChangeText={setValueWithdraw}
      />
      <TouchableOpacity style={style.button} onPress={handleWithdraw}>
        <Text style={style.buttonText}>SACAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleGoback}>
        <Text style={style.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WithdrawScreen;
