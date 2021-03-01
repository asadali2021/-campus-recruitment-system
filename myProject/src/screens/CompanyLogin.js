import React,{useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {company_signin} from '../store/action/index';
import { connect } from 'react-redux';
const CompanyLogin = (props) => {
  const [compaanylogin, setcompaanylogin] =  useState({
    
    email: '',
    password:'',
    
   
  });
  const fData = (props) => {
   
   let obj = compaanylogin;
   
      
    props.company_signin(obj,props);
       
   
  }
  return (
    <ScrollView>
      <Text style={{fontSize: 36, marginTop: 10, }}> Company Login</Text>
      <View>
        
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15,}}> E-mail</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name='email'
        onChangeText={(text)=>setcompaanylogin({...compaanylogin,email:text})}
      />
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15, }}> Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name='password'
        onChangeText={(text)=>setcompaanylogin({...compaanylogin,password:text})}
      />
      
      <View  style={{
       alignItems: 'center',
       display:'flex',
       flexDirection:'row',
       marginLeft: 55,
       marginTop: 40,
       marginBottom: 50,
  }}>
      <TouchableOpacity  style={{
        height: 60,
        width: 240,
        backgroundColor: '#45aaf2',
        borderColor: '#3867d6',
        borderWidth: 4,
        borderRadius: 40,
      }}
      onPress={()=>fData(props)}>
      <Text style={{fontSize: 24, textAlign:'center', marginTop: 10, color:'#f1f2f6'}}> Company Login</Text>
      </TouchableOpacity>
      
      </View>
      </View>
    </ScrollView>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
})
const mapDispatchToProps = (dispatch) => ({
  company_signin : (obj, props)=> dispatch(company_signin(obj,props)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CompanyLogin);
