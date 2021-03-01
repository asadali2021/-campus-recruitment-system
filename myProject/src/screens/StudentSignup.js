import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';
import {google_signup} from '../store/action/index';
import {useState} from 'react';
const StudentSignup = (props) => {
  const [studentDetail, setstudentDetail] =  useState({
    gpa : '',
    email: '',
    password:'',
    semester:'',
    key:null,
  });
  const handleChange = (props) => {
    let obj = {
      email: studentDetail.email,
      password: studentDetail.password,
  }
  props.google_signup(obj,props);

  }
  const fData = (props) => {
    let uid = database().ref().push().key;
   // this.setState({uid:uid})
   setstudentDetail({...studentDetail,key:uid})
   if(studentDetail.key!=null){
    
    database().ref('students').child(studentDetail.key).set(studentDetail)
    .then(()=>{
      console.log("done",props)
       
      let obj = {
        email: studentDetail.email,
        password: studentDetail.password,
    }
    props.google_signup(obj,props);
       
   })
  }
}
  return (
    <ScrollView>
    {
      console.log("done2",props)
    }
      <Text style={{fontSize: 36, marginTop: 2, }}> Student SignUp</Text>
      <View>
        <Text style={{marginTop: 20, fontSize: 18, marginBottom:15,}}> Your G.P.A</Text>
        
     
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name= 'gpa'
        onChangeText={(text) =>setstudentDetail({...studentDetail,gpa:text})}
        
      />
      <Text style={{marginTop: 20, fontSize: 18, marginBottom:15,}}> Your E-mail</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name = 'email'
        onChangeText={(text) =>setstudentDetail({...studentDetail,email:text})}
      />
      <Text style={{marginTop: 20, fontSize: 18, marginBottom:15, }}> Your Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name= 'password'
        onChangeText={(text) =>setstudentDetail({...studentDetail,password:text})}
      />
      <Text style={{marginTop: 20, fontSize: 18, marginBottom:15,}}> Your Semester</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        name='semester'
        onChangeText={(text) =>setstudentDetail({...studentDetail,semester:text})}
      /> 
      <View  style={{
       alignItems: 'center',
       display:'flex',
       flexDirection:'row',
       marginLeft: 15,
       marginTop: 40,
       marginBottom: 20,
  }}>
      <TouchableOpacity  style={{
        height: 50,
        width: 155,
        backgroundColor: '#45aaf2',
        borderColor: '#3867d6',
        borderWidth: 4,
        borderRadius: 40,
      }}
      onPress={()=>props.navigation.navigate('StudentLogin')}>
      <Text style={{fontSize: 18, textAlign:'center', marginTop: 6, color:'#f1f2f6'}}>Goto Login</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        height: 50,
        marginLeft: 20,
    width: 155,
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
  google_signup : (obj, props)=> dispatch(google_signup(obj,props)),
})
export default connect(mapStateToProps, mapDispatchToProps)(StudentSignup);

