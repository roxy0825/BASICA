
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import Banner from './components/Banner';
export default function App() {
  
  //las variables del estado del componente
  const [valor1,setValor1]=useState('');
  const [valor2,setValor2]=useState('');
  const [resultado,setResultado]=useState(0);
  const[esValido,setEsValido]=useState(false);
  const[mensaje,setMensaje]=useState('');
  //metodos o funciones
  let calcular = (operador)=>{
    if(valor1 != "" && valor2 != ""){
      setEsValido(true)
      let resulta =0;
      switch(operador){
        case"+":
        resulta = parseFloat(valor1)+ parseFloat(valor2);
        break;
        case"-":
        resulta = parseFloat(valor1)- parseFloat(valor2);
        break;
        case"*":
        resulta = parseFloat(valor1)* parseFloat(valor2);
        break;
        case"/":
        resulta = parseFloat(valor1)/ parseFloat(valor2);
        break;
      }
      //cambiar el contenido de la variable de estado con la info de resulta
      setResultado(resulta);
      setMensaje("calculo realizado correctamente...")
    }
    else{
      setEsValido(false);
      setMensaje("debe ingresar los dos numero...")
    }
  };
  return (
    <View style={styles.container}>
    <View style={[styles.container,{flex:3,backgroundColor:'orange'}]}>
      <Banner name="calculadora2" ></Banner>
      </View>

      <View style={[styles.container,{flex:5,backgroundColor:'#8b7eb7'}]}>
        <Text style={{fontWeight:'bold'}}>CALCULADORA BASICA</Text>
      <Text style={{fontWeight:'bold'}}>Valor 1</Text>
      <TextInput
      placeholder=''
      style={styles.inputs}
      onChangeText={valor1 => setValor1(valor1)}
      value={valor1}
      />
      <Text style={{fontWeight:'bold'}}>Valor 2</Text>
      <TextInput
      placeholder=''
      
      style={styles.inputs}
      onChangeText={valor2 => setValor2(valor2)}
      value={valor2}
      />
    
      
      <Text>RESULTADO</Text>
      <Text style={[styles.inputs,{width:200,height:40,alignItems:'center',justifyContent:'center'}]}>{resultado.toFixed(1)}</Text>
      <View style={[styles.container,{marginTop:20,flexDirection:'row'}]}>
      
      
      <TouchableOpacity
      style={[{backgroundColor:'green'},styles.buttons]}
      onPress={()=>calcular("+")}
      >
        <Text style={styles.textButtons}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[{backgroundColor:'red'},styles.buttons]}
      onPress={()=>calcular("-")}>
        
        <Text style={styles.textButtons}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[{backgroundColor:'red'},styles.buttons]}
      onPress={()=>calcular("*")}>
      
        <Text style={styles.textButtons}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[{backgroundColor:'red'},styles.buttons]}
      onPress={()=>calcular("/")}>
       
        <Text style={styles.textButtons}>/</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
      style={[{backgroundColor:'black',marginTop:20},styles.buttons]}
      >
        
        <Text style={styles.textButtons}>C</Text>
      </TouchableOpacity>
      <Text style={{color:esValido ? "green":'red'}}>{mensaje}</Text>
      </View>
      

      <View style={[styles.container,{flex:1,backgroundColor:'#21244a',width:"100%"}]}>
      <Text>Pie</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'

  },
  
   
   
    inputs:{
  color:'blue', borderRadius:5,padding:10,borderWidth:2,borderColor:'black',textAling:'center'

  },
  buttons:{
    borderRadius:10,padding:10,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5
  },
  textButtons:{
    color:'white',
    fontWeight:'bold'
  }
  
});
