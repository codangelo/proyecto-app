import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    formContainer: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      borderBottomWidth: 1,
      marginHorizontal: 20,
    },
    listContainer: {
      padding: 20,
    },
    listTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#228CDB',
    },
    confirmedContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 0.25,
    },
    confirmedText:{
      fontSize: 30,
      color: 'blue',
      fontWeight: 'bold',
      marginBottom: 10,
  
  
    },
   
  });