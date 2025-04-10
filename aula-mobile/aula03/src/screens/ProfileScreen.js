import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>👤 Meu perfil</Text>
      <Text>Nome: Higor Souza</Text>
      <Button title='Sair' onPress={() => navigation.replace('login')}></Button>
    </View>
  )
}

export default ProfileScreen