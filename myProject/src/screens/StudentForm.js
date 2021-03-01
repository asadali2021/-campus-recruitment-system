// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Logout } from '../store/action/index';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import { ListItem, } from 'react-native-elements'

const SearchStudents = (props) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [example, setexample] = useState(
      {
        doom: props.postdetail[0],
        hello: Object.keys(props.postdetail[0]),
        helperArray : Object.entries(props.postdetail[0]),
        userfiltered : Object.entries(props.postdetail[0]),
        // emailLogin : props.loginUser,
        findEmail : Object.entries(props.postdetail[0])
      }
  );
  
  const searchUser = (textToSearch)=>{
    setexample({
        ...example,
        // findEmail : this.state.helperArray.filter(i=> i[1].email.toLowerCase().includes(this.state.emailLogin.toLowerCase())),
        userfiltered : example.helperArray.filter(i=> i[1].jobTitle.toLowerCase().includes(textToSearch.toLowerCase())),
        
    })
}
//   setMasterDataSource(props.postdetail);
//         setMasterDataSource(props.postdetail);

//   useEffect((props) => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(props.postdetail);
//         setMasterDataSource(props.postdetail);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = masterDataSource.filter(
//         function (item) {
//           const itemData = item.title
//             ? item.title.toUpperCase()
//             : ''.toUpperCase();
//           const textData = text.toUpperCase();
//           return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({item}) => {
//     return (
//       // Flat List Item
    
//       <Text
//         style={styles.itemStyle}
//         onPress={() => getItem(item)}>
//         {item.id}
//         {'.'}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
//   };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>{
        console.log('postdetail', props.postdetail)
    }
      <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row' , marginTop: 10,}}>
      
      <TouchableOpacity style={{
        backgroundColor:'#1e90ff', 
        width:'100%',
        height:40,
        borderRadius:30,
        
         
          }}
          onPress={()=> props.Logout(props)}>
      <Text style={{marginTop:10,fontSize: 15, marginLeft:140, color:'#dfe4ea',}}> Logout</Text>
      </TouchableOpacity>
      </View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text=>{searchUser(text)}}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Students Here"
        />
       { example.userfiltered.map((v,i)=>{
            return ( 
      
    
        <ListItem noIndent key={i}  onPress={()=>props.navigation.navigate("JobData",{obj : example.userfiltered[i][1]})} >
          <ListItem.Content>
            <ListItem.Title>{example.userfiltered[i][1].jobTitle} {example.userfiltered[i][1].salary} {example.userfiltered[i][1].postExpiryDate}</ListItem.Title>
          </ListItem.Content>
          
        
          
        </ListItem>
 ) })}
    
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
const mapStateToProps = (state) => ({
  users: state.users,
  postdetail: state.postdetail,
})
const mapDispatchToProps = (dispatch) => ({
  Logout : (props)=> dispatch(Logout(props)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchStudents);

