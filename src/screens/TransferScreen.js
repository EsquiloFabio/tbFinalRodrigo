import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../../styles/style';

const TransferScreen = ({ balance, setBalance, balance2, setBalance2 }) => {
  const nav = useNavigation();
  const [transferAmount, setTransferAmount] = useState('');
  const [transferToAccount, setTransferToAccount] = useState('');

  const handleGoBack = () => {
    nav.goBack();
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    const isValidAccount = transferToAccount === '20222018555'; 

    const isSameAccount = transferToAccount === '20222018493'; 

    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Digite um valor de transferência válido.');
      return;
    }

    if (!isValidAccount) {
      alert('Conta inválida!');
      return;
    }

    if (isSameAccount) {
      alert('Não é permitido transferir para a mesma conta em que você está logado.');
      return;
    }

    if (amount > balance) {
      alert('Saldo insuficiente. O valor da transferência excede o saldo disponível.');
      return;
    }

    setBalance(balance - amount);
    setBalance2(balance2 + amount);
    setTransferAmount('');
    alert(`Transferência de R$ ${amount.toFixed(2)} realizada com sucesso.`);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>TRANSFERÊNCIA</Text>
      <Text style={style.balanceItem}>Saldo atual: R$ {balance.toFixed(2)}</Text>
      <TextInput
        style={style.input}
        keyboardType="numeric"
        placeholder="Número da Conta de Destino"
        value={transferToAccount}
        onChangeText={setTransferToAccount}
      />
      <TextInput
        style={style.input}
        keyboardType="numeric"
        placeholder="Valor da Transferência"
        value={transferAmount}
        onChangeText={setTransferAmount}
      />
      <TouchableOpacity style={style.button} onPress={handleTransfer}>
        <Text style={style.buttonText}>TRANSFERIR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleGoBack}>
        <Text style={style.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransferScreen;
