
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Banner from './components/Banner';
export default function App() {
  
  //las variables del estado del componente
  const [valor1,setValor1]=useState('');
  const [valor2,setValor2]=useState('');
  const [resultado,setResultado]=useState('');
  return (
    <View style={styles.container}>
    <View style={[styles.container,{flex:1,backgroundColor:'orange'}]}>
      <Banner name="calculadora" ></Banner>
      </View>

      <View style={[styles.container,{flex:5,backgroundColor:'yellowgreen'}]}>
        <Text style={{fontWeight:'bold'}}>CALCULADORA BASICA</Text>
      <Text style={{fontWeight:'bold'}}>Valor 1</Text>
      <TextInput
      placeholder='Ingrese valor 1'
      style={styles.inputs}
      onChangeText={valor1 => setValor1(valor1)}
      value={valor1}
      />
      <Text>Valor 2</Text>
      <TextInput
      placeholder='Ingrese valor 2'
      style={styles.inputs}
      onChangeText={valor2 => setValor2(valor2)}
      value={valor2}
      />
      <Text>Resultado</Text>
      <TextInput
      style={styles.inputs}
      value={resultado}
      
      />
      </View>

      <View style={[styles.container,{flex:1,backgroundColor:'gray'}]}>
      <Text>Pie</Text>
      </View>
    </View>
  );
}

// function Banner(props){
//   return(
//     <Image source={require(`./assets/images/${props.name}.png`)} style={{
//       width:'100%',height:'100%',resizeMode:'stretch'}}></Image>
//   );
// }
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'

  },
  inputs:{
    imputs:{
  color:'blue', borderRadius:5,padding:10,borderWidth:2,borderColor:'green',textAling:'center'
}
  }
  
});
