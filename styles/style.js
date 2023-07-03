import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
},
menuItem: {
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
},
menuItemText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
},
balanceItem : {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
},
recordView : {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: 'gray',
    width: '90%',
},
recordItem : {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
},
});