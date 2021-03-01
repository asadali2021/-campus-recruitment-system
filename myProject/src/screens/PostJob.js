import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';


const PostJob = (props) => {
  const [Post, setPost] = useState({
    jobTitle: '',
      requirement: '',
      salary:'',
      postExpiryDate:'',
  });
  
  const fData = (props) => {
    let uid = database().ref().push().key;
   // this.setState({uid:uid})
   setPost({...Post,key:uid})
   if(Post.key!=null){
    database().ref('post').child(Post.key).set(Post)
    .then(()=>{
       console.log('Job Posted')
       props.navigation.goBack();
       
   })}
   
}
  return (
    <ScrollView>
    
      <Text style={{fontSize: 36, marginTop: 10, }}> Post A Job</Text>
      <View>
        <Text style={{marginTop: 30, fontSize: 18, marginBottom:15,}}> Job Title</Text>
        
     
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        onChangeText={(text) =>setPost({...Post,jobTitle:text})}
        
      />
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15,}}> Requirement</Text>
      <TextInput
      multiline
        style={{
          minHeight: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        onChangeText={(text) =>setPost({...Post,requirement:text})}
        
        
      />
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15, }}> Salary</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        onChangeText={(text) =>setPost({...Post,salary:text})}
        
        
      />
      <Text style={{marginTop: 30, fontSize: 18, marginBottom:15, }}> Expiry Date</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue=""
        onChangeText={(text) =>setPost({...Post,postExpiryDate:text})}
        
        
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
    marginLeft: 80,
width: 165,
backgroundColor: '#45aaf2',
borderColor: '#3867d6',
borderWidth: 4,
borderRadius: 40,
}}
onPress={()=>fData(props)}>
  <Text style={{fontSize: 18, textAlign:'center', marginTop: 6, color:'#f1f2f6'}}> Post</Text>
  </TouchableOpacity>
      
      </View>
      </View>
    </ScrollView>
  );
}
// const mapStateToProps = (state) => ({
//   users: state.users,
// })
// const mapDispatchToProps = (dispatch) => ({
//   company_signup : (obj, props)=> dispatch(company_signup(obj,props)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(CompanySignup);
export default PostJob;
