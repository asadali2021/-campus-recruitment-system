import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const Select = (props) => {

  return (
    <ScrollView>
      <Text style={{fontSize: 36, marginTop: 10, textAlign: 'center' }}> Please Select Any One </Text>
      <View>
       
        
     
     
      <View  style={{
       alignItems: 'center',
       display:'flex',
       flexDirection:'column',
       marginLeft: 10,
       marginTop: 50,
       marginBottom: 52,
      }}>
      <TouchableOpacity  style={{
        height: 100,
        marginTop: 5,
        borderRadius: 40,
    width: 240,
    backgroundColor: '#45aaf2',
    borderColor: '#3867d6',
    borderWidth: 4,
    
    }}
    onPress={()=>props.navigation.navigate('AdminSignIn')}>
      <Text style={{fontSize: 30, textAlign:'center', marginTop: 22, color:'#f1f2f6'}}>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        height: 100,
        marginTop: 30,
        borderRadius: 40,
    width: 240,
    backgroundColor: '#45aaf2',
    borderColor: '#3867d6',
    borderWidth: 4
    }}
    onPress={()=>props.navigation.navigate('CompanySignup')}>
      <Text style={{fontSize: 30, textAlign:'center', marginTop: 22, color:'#f1f2f6'}}>Company</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        height: 100,
        width: 240,
        marginTop: 30,
        backgroundColor: '#45aaf2',
        borderColor: '#3867d6',
        borderWidth: 4,
        borderRadius: 40,
      }}
      onPress={()=>props.navigation.navigate('StudentSignup')}>
      <Text style={{fontSize: 30, textAlign:'center', marginTop: 22, color:'#f1f2f6'}}>Student</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}
export default Select;