import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../../styles/style';

const LoginScreen = () => {
  const nav = useNavigation();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const validLogin =
      (account === '20222018493' && password === 'elias') ||
      (account === '20222018555' && password === 'fabio');

    if (validLogin) {
      const loginData = { account, password };
      nav.navigate('Home', { loginData });
    }
    if (!validLogin) {
        alert('Dados Inválidos!')
      }
  };

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, [nav]);

  return (
    <View style={style.container}>
      <Text style={style.title}>BANCO</Text>
      <Text style={style.recordItem}>Elias: 20222018493 | Fábio: 20222018555</Text>
      <TextInput
        style={style.input}
        placeholder="Digite o número da conta"
        value={account}
        onChangeText={setAccount}
      />
      <TextInput
        style={style.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;