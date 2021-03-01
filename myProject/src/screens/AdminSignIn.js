import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const AdminSignIn = () => {
  return (
    <ScrollView>
      <Text style={{fontSize: 36, marginTop: 10, }}> Admin SignIn</Text>
      <View>
        
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15,}}> Your E-mail</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue="Enter your E-mail"
      />
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15, }}> Your Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
       
        defaultValue="Enter Your Password"
      />
     
      <View  style={{
       alignItems: 'center',
       display:'flex',
       flexDirection:'row',
       marginLeft: 100,
       marginTop: 50,
       marginBottom: 200,
  }}>
      <TouchableOpacity  style={{
        height: 50,
        width: 140,
        backgroundColor: '#45aaf2',
        borderColor: '#3867d6',
        borderWidth: 4,
        borderRadius: 40,
      }}>
      <Text style={{fontSize: 18, textAlign:'center', marginTop: 6, color:'#f1f2f6'}}>Admin Login</Text>
      </TouchableOpacity>
      
      </View>
      </View>
    </ScrollView>
  );
}
export default AdminSignIn;