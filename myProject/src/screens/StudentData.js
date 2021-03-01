import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const StudentData = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'G.P.A : 2.8'},
          {key: 'E-mail: abc@gmail.com'},
          {key: 'Semester: Sixth'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default StudentData;