import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../../styles/style';

const LogoutScreen = () => {
    const nav = useNavigation();

    const handleLogout = () => {
        nav.navigate('Login');
    }

    const handleGoback = () => {
        nav.goBack();
      };

      return (
        <View style={style.container}>
          <Text style={style.title}>Desconectar</Text>
          <Text style={style.recordItem}>Tem certeza de que deseja desconectar?</Text>
          <TouchableOpacity style={style.button} onPress={handleLogout}>
            <Text style={style.buttonText}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={handleGoback}>
            <Text style={style.buttonText}>NÂO</Text>
          </TouchableOpacity>
        </View>
      );

};

export default LogoutScreen;