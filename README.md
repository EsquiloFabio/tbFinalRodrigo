# Trabalho Final - React Native

Este repositório contém um código de exemplo que implementa um aplicativo bancário simples utilizando a biblioteca React Native com o React Navigation. O objetivo do aplicativo é permitir que os usuários realizem operações bancárias básicas, como verificação de saldo, saques, depósitos e transferências entre contas.

## Funcionalidades:

 1- LoginScreen: Tela de login onde o usuário pode inserir suas informações de conta para acessar o aplicativo.

 2- HomeScreen: Tela inicial após o login, exibe o nome do usuário e fornece opções para acessar outras funcionalidades.

 3- BalanceScreen: Tela que exibe o saldo atual da conta do usuário.

 4- WithdrawScreen: Tela que permite ao usuário realizar saques da sua conta. O valor inserido deve ser válido e não pode exceder o saldo disponível.

 5- DepositScreen: Tela que permite ao usuário realizar depósitos na sua conta. O valor inserido deve ser válido e positivo.

 6- TransferScreen: Tela que permite ao usuário realizar transferências de valores entre contas. O usuário deve informar o número da conta de destino, sendo necessário validar se a conta existe e se não é a mesma conta em que o usuário está logado. O valor inserido deve ser válido e não pode exceder o saldo disponível.

 7- RecordScreen: Tela que exibe o número e o saldo de duas contas diferentes, como uma demonstração de registros de contas.

 8- LogoutScreen: Tela que exibe a opção de se desconectar da conta, caso for aceita retorna o usuário para tela de login.

## Observações importantes:

O aplicativo utiliza o conceito de navegação por pilha (Stack Navigator) fornecido pelo React Navigation para gerenciar a transição entre as telas.

O saldo da conta é armazenado no estado do componente principal (App) e é passado como prop para as telas que precisam acessá-lo. As telas de saque, depósito e transferência atualizam o saldo chamando a função setBalance.

O código foi escrito com base em requisitos específicos, como a validação da conta de destino e dos valores inseridos. Foi feito um esforço para tratar essas validações, exibindo mensagens de erro apropriadas quando necessário.

O código está com apenas uma conta de login configurada para executar as funcões (N° conta: 20222018493 senha: elias), quando for utiliza-lo atente-se a usar essas credenciais.

Este código de exemplo tem como propósito ilustrar o uso básico do React Native com o React Navigation em um contexto de aplicativo bancário simples. É importante notar que este código não é uma implementação completa de um sistema bancário real e não leva em consideração muitos aspectos importantes, como segurança, persistência de dados e autenticação adequada.

Sinta-se à vontade para explorar o código, executá-lo e fazer alterações conforme necessário para atender às suas necessidades ou para expandir suas funcionalidades.
