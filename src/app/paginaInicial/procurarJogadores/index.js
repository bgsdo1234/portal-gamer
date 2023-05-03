import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Card, Title, Button } from 'react-native-paper'


export default function App() {
 return (
   <View style={styles.container}>
    
     <Card
     style={styles.card}
     >

      <Card.Cover 
      source={require('../../../../assets/ProcurarJogador1.png')}
      />
        
      <Button
      mode="contained"
      buttonColor='black'
      style={styles.btnProcurar}
      >Procurar
      </Button>
      
     </Card>

   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   backgroundColor: '#fff',
   justifyContent: 'center',
   marginTop: 50,
   flex: 1
 },
 card: {
   paddingBottom: 20,
   marginHorizontal: 10
 },
 btnProcurar: {
   marginTop: 10,
   borderWidth: 1,
   borderColor: 'red'
 }
});

