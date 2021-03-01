import React, { useState, useEffect } from 'react';
// import firebase from '../../config/firebase';
// const [email, setEmail] = useState(initialState);
// const [password, setPassword] = useState(initialState);
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import database from '@react-native-firebase/database';

const google_signup = (obj, props) => {
    return  (dispatch) => {
        console.log("hellooooo", obj)
        auth()
  .createUserWithEmailAndPassword(obj.email, obj.password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log('user signuppp====>>', user)
    console.log('User account created & signed in!');
    props.navigation.navigate("StudentLogin");
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!')
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!')
      console.log('That email address is invalid!');
    }
    Alert.alert('That email address or password is invalid!')
    // console.error(error);
  });
        

}
// console.log("hellooooo" )

}

const company_signup = (obj, props) => {
  return  (dispatch) => {
      console.log("hellooooo", obj)
      auth()
.createUserWithEmailAndPassword(obj.email, obj.password)
.then((userCredential) => {
  var user = userCredential.user;
  console.log('user signuppp====>>', user)
  console.log('User account created & signed in!');
  props.navigation.navigate("CompanyLogin");
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
    Alert.alert('That email address is already in use!')
    console.log('That email address is already in use!');
  }

  if (error.code === 'auth/invalid-email') {
    Alert.alert('That email address is invalid!')
    console.log('That email address is invalid!');
  }
  Alert.alert('That email address or password is invalid!')
  // console.error(error);
});
      

}
// console.log("hellooooo" )

}
// const google_signup = (obj) => {
//   console.log("hellooooo" )
//     // return  (dispatch) => {
//         // dispatch({type: 'SETDATA'  , data: obj})
// //         firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
// //   .then((userCredential) => {
// //     // Signed in 
// //     var user = userCredential.user;
// //     console.log('user signuppp====>>', user)
// //     // ...
// //   })
// //   .catch((error) => {
// //     var errorCode = error.code;
// //     var errorMessage = error.message;
// //     // ..
// //   });
        

// // }
// // console.log("hellooooo" , obj)

// // }
// }

const Logout = (props) => {
  return  (dispatch) => {
    auth()
    .signOut()
    .then(() => {
      console.log('User signed out!');
      props.navigation.navigate("Select");
    }
      );
      
      

}
// console.log("hellooooo" )

}

const google_signin = (obj,props) => {
        return  (dispatch) => {
          // console.log(obj)
          auth()
  .signInWithEmailAndPassword(obj.email, obj.password)
  .then((userCredential) => {
    // console.log('User signed in!',props);
    var user = userCredential.user;
    console.log('user signinn====>>', user)
 database().ref('post').on('value', (data)=> {
  //  console.log(data.val())
  var data1 = data.val(); 
//  var data1 = Object.keys(data.val());
  // console.log(data1)
   dispatch({type: 'apple', payLoad: {data1,obj}})
  props.navigation.navigate("StudentForm");
})

    
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!')
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert('That email address is invalid!')
    }
    Alert.alert('That email address or password is invalid!')
    // console.error(error);
  });

// console.log("ggggggg",data)
    
    }}

const company_signin = (obj,props) => {
        return  (dispatch) => {
          // console.log(obj)
          auth()
  .signInWithEmailAndPassword(obj.email, obj.password)
  .then((userCredential) => {
    console.log('User signed in!',props);
    var user = userCredential.user;
    // console.log('user signinn====>>', user)
//  database().ref('company').on('value', (data)=> {
  //  console.log(data.val())
  // var data1 = data.val(); 
//  var data1 = Object.keys(data.val());
  // console.log(data1);
  //  dispatch({type: 'apple', payLoad: {data1,obj}})
// })
props.navigation.navigate("Searchstudents");

    
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!')
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert('That email address is invalid!')
    }
    Alert.alert('That email address or password is invalid!')
    // console.error(error);
  });

// console.log("ggggggg",data)
    
    }}
  

export {  
    google_signup,
    company_signup,
    google_signin,
    company_signin,
    Logout
} 