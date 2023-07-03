import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import BalanceScreen from './src/screens/BalanceScreen';
import WithdrawScreen from './src/screens/WithdrawScreen';
import DepositScreen from './src/screens/DepositScreen';
import TransferScreen from './src/screens/TransferScreen';
import RecordScreen from './src/screens/RecordScreen';
import LogoutScreen from './src/screens/LogoutScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [balance, setBalance] = useState(0.0);
  const [balance2, setBalance2] = useState(0.0)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Saldo">
          {props => <BalanceScreen {...props} balance={balance} />}
        </Stack.Screen>
        <Stack.Screen name="Saque">
          {props => ( <WithdrawScreen {...props} balance={balance} setBalance={setBalance} /> )}
        </Stack.Screen>
        <Stack.Screen name="Deposito">
          {props => ( <DepositScreen {...props} balance={balance} setBalance={setBalance} /> )}
        </Stack.Screen>
        <Stack.Screen name="Relatório">
          {props => ( <RecordScreen {...props} balance={balance} balance2={balance2} /> )}
        </Stack.Screen>
        <Stack.Screen name="Transferência">
          {(props) => (
            <TransferScreen
              {...props}
              balance={balance}
              setBalance={setBalance}
              balance2={balance2}
              setBalance2={setBalance2} /> )}
        </Stack.Screen>
        <Stack.Screen name="Desconectar" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
