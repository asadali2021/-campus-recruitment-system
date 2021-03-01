import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';
import {company_signup} from '../store/action/index';
const CompanySignup = (props) => {
  const [companyDetail, setcompanydetail] = useState({
    username: '',
      email: '',
      password:'',
      key:null,
  });
  const handleChange = (text) => {
    console.log(text)
    setcompanydetail({email:text})
    console.log(companyDetail)

  }
  const fData = (props) => {
    let uid = database().ref().push().key;
   // this.setState({uid:uid})
   setcompanydetail({...companyDetail,key:uid})
   if(companyDetail.key!=null){
    database().ref('company').child(companyDetail.key).set(companyDetail)
    .then(()=>{
       let obj = {
           email:companyDetail.email,
           password:companyDetail.password,
       }
       props.company_signup(obj, props);
   })}
   
}
  return (
    <ScrollView>
    {
      console.log(companyDetail)
  
      }
      <Text style={{fontSize: 36, marginTop: 10, }}> Company SignUp</Text>
      <View>
        <Text style={{marginTop: 30, fontSize: 18, marginBottom:15,}}> Username</Text>
        
     
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name= 'username'
        onChangeText={(text) =>setcompanydetail({...companyDetail,username:text})}
      />
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15,}}> E-mail</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name= 'email'
        onChangeText={(text) =>setcompanydetail({...companyDetail,email:text})}
      />
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15, }}> Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name= 'password'
        onChangeText={(text) =>setcompanydetail({...companyDetail,password:text})}
      />
      
      <View  style={{
       alignItems: 'center',
       display:'flex',
       flexDirection:'row',
       marginLeft: 5,
       marginTop: 40,
       marginBottom: 50,
  }}>
  <TouchableOpacity  style={{
    height: 50,
    width: 165,
    backgroundColor: '#45aaf2',
    borderColor: '#3867d6',
    borderWidth: 4,
    borderRadius: 40,
  }}
  onPress={()=>props.navigation.navigate('CompanyLogin')}>
  <Text style={{fontSize: 18, textAlign:'center', marginTop: 6, color:'#f1f2f6'}}>Goto Login</Text>
  </TouchableOpacity>
  <TouchableOpacity  style={{
    height: 50,
    marginLeft: 15,
width: 165,
backgroundColor: '#45aaf2',
borderColor: '#3867d6',
borderWidth: 4,
borderRadius: 40,
}}
onPress={()=>fData(props)}>
  <Text style={{fontSize: 18, textAlign:'center', marginTop: 6, color:'#f1f2f6'}}> Signup</Text>
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
  company_signup : (obj, props)=> dispatch(company_signup(obj,props)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CompanySignup);
