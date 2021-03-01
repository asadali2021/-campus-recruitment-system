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

const JobData = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Job Title : Hybrid Application Developer'},
          {key: 'E-mail: 2+ Years Experience'},
          {key: 'Requirement: Application Development'},
          {key: 'Responsibility: UX/UI of CMS'},
          {key: 'Salary: $2500 - $8000/Week'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default JobData;