import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const[peso, setPeso] = useState<number>(0);
  const[altura, setAltura] = useState<number>(0);
  const[imc, setImc] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>('white'); 


  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    setImc(imc);
    if (imc < 18.5) {
      setBackgroundColor('green');
    }
    else if (imc >= 18.5 && imc < 24.9) {
      setBackgroundColor('blue');
    }
    else if (imc >= 25 && imc < 29.9) {
      setBackgroundColor('yellow');
    }
    else if (imc >= 30 && imc < 34.9) {
      setBackgroundColor('orange');
    }
    else if (imc >= 35 && imc < 39.9) {
      setBackgroundColor('red');
    }
    else if (imc >= 40) {
      setBackgroundColor('purple'); 
    }
    else {
      alert('IMC inválido');
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerIMC}>
        <View style={styles.flex}>
          <Text style={styles.text}>Seu IMC:</Text>
          <View style={[styles.resultIMC, { backgroundColor }]}>
            <Text style={styles.text}>{imc.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <TextInput placeholder='Digite seu peso'
            keyboardType={'numeric'}
            onChangeText={(peso) => setPeso(Number(peso))}
            style={styles.textInput}>
          </TextInput>
          <TextInput placeholder='Digite sua altura'
            keyboardType={'numeric'}
            onChangeText={(altura) => setAltura(Number(altura))}
            style={styles.textInput}>
          </TextInput>
        </View>
        <View>
          <Button title='Calcular IMC' onPress={() => {
            calcularIMC();
          }}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'gray',
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
  },
  containerIMC: {
    height: '55%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 20,
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    gap: 20,
  },
  flex:{
    display: 'flex',
    gap: 20,
  },
  resultIMC:{
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 200,
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput:{
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 10,
    padding: 10,
  }
});
