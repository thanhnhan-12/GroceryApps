import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const FormAddAccount = () => {

  const [names, setNames] = useState(null);
  const [pass, setPass] = useState(null);
  const [roles, setRoles] = useState([]);

  
 
  return (
    <View>
      <Text>Add Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  commonInputs: {
    marginHorizontal: 20,
    marginBottom: 30,
  },

  commonInput: {
    marginTop: 20,
  },

  label: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
  },

  input: {
    height: 45,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    backgroundColor: '#F2F2F2',
  },

  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },

  btnLogin: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    paddingVertical: '4%',
    marginTop: 25,
    // marginBottom: 0,
  },

  textLogin: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
 
});


export default FormAddAccount