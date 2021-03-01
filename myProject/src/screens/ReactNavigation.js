// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentSignup from './StudentSignup';
import AdminSignIn from './AdminSignIn';
import Select from './Select';
import CompanySignup from './CompanySignup';
import Searchstudents from './Searchstudents';
import Searchjobs from './Searchjobs';
import Listofstudents from './Listofstudents';
import StudentData from './StudentData';
import JobData from './JobData';
import StudentLogin from './StudentLogin';
import CompanyLogin from './CompanyLogin';
import PostJob from './PostJob';
import StudentForm from './StudentForm';


const Stack = createStackNavigator();

function ReactNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Select" component={Select} options={{
          headerTitle:"Recruitement"
        }}/>
        <Stack.Screen name="AdminSignIn" component={AdminSignIn} />
        <Stack.Screen name="CompanySignup" component={CompanySignup} />
        <Stack.Screen name="Searchjobs" component={Searchjobs} />
        <Stack.Screen name="StudentSignup" component={StudentSignup} />
        <Stack.Screen name="Searchstudents" component={Searchstudents} />
        <Stack.Screen name="JobData" component={JobData} />
        <Stack.Screen name="StudentData" component={StudentData} />
        <Stack.Screen name="Listofstudents" component={Listofstudents} />
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="PostJob" component={PostJob}/>
        <Stack.Screen name="StudentForm" component={StudentForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ReactNavigation;