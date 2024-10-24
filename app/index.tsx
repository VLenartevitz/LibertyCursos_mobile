import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Para usar gradiente
import ScreenComponent from '@/components/ScreenComponent';

export default function Home() {
  return (
    <ScreenComponent >
      <Text></Text>
      <Text></Text>

    </ScreenComponent>
    // <LinearGradient
    //   colors={['rgba(149, 43, 149, 0.2)', 'rgba(120, 120, 255, 0.2)']}
    //   style={styles.frame}
    // >
    //   <View style={styles.div}>
    //     <Text style={styles.textWrapper}>Olá!</Text>
    //     <Text style={styles.p}>Que bom que está aqui!</Text>
    //   </View>

    //   <View style={styles.divWrapper}>
    //     <Text style={styles.textWrapper2}>ou</Text>
    //   </View>

    //   <View style={styles.div2}>
    //     <View style={styles.input}>
    //       {/* <Image style={styles.img} source={require('./img/ico-user.png')} /> */}
    //       <TextInput style={styles.textWrapper3} placeholder="email@exemplo.com.br" />
    //     </View>
    //     <View style={styles.input}>
    //       {/* <Image style={styles.img} source={require('./img/ico-lock.png')} /> */}
    //       <TextInput style={styles.textWrapper3} placeholder="******" secureTextEntry />
    //     </View>

    //     <TouchableOpacity style={styles.button}>
    //       <Text style={styles.textWrapper4}>Entrar</Text>
    //     </TouchableOpacity>

    //     <Text style={styles.textWrapper5}>Esqueci minha senha</Text>
    //   </View>

    //   <TouchableOpacity style={styles.entrarWrapper}>
    //     <Text style={styles.textWrapper4}>Crie sua conta</Text>
    //   </TouchableOpacity>

    //   {/* <Image style={styles.logo} source={require('./img/logo.png')} /> */}
    // </LinearGradient>
  );
}

// const styles = StyleSheet.create({
//   frame: {
//     position: 'relative',
//     width: 320,
//     height: 640,
//     backgroundColor: 'rgba(255, 255, 255, 1.0)',
//   },
//   div: {
//     flexDirection: 'column',
//     width: 256,
//     height: 18,
//     alignItems: 'center',
//     gap: 4,
//     top: 148,
//     position: 'absolute',
//     left: 32,
//   },
//   textWrapper: {
//     marginTop: -1,
//     fontFamily: 'Work Sans', // ou a família desejada
//     fontWeight: '400',
//     color: '#000',
//     fontSize: 14,
//     letterSpacing: 0.5,
//     lineHeight: 18,
//   },
//   p: {
//     marginBottom: -20,
//     fontFamily: 'Work Sans-Medium',
//     fontWeight: '500',
//     color: '#000',
//     fontSize: 18,
//   },
//   divWrapper: {
//     width: 256,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 13,
//     top: 518,
//     position: 'absolute',
//     left: 32,
//   },
//   textWrapper2: {
//     marginTop: -1,
//     fontFamily: 'Work Sans', // Substitua pelas variáveis se necessário
//     fontWeight: '400',
//     color: '#707070',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   div2: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     gap: 16,
//     top: 256,
//     position: 'absolute',
//     left: 32,
//   },
//   input: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: 256,
//     height: 60,
//     gap: 12,
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 32,
//   },
//   img: {
//     width: 24,
//     height: 24,
//   },
//   textWrapper3: {
//     fontFamily: 'Work Sans', // ou a fonte desejada
//     fontWeight: '400',
//     color: '#000',
//     fontSize: 16,
//   },
//   button: {
//     display: 'flex',
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     width: '100%',
//     backgroundColor: '#9327FA', // Ajuste para a variável de cor correta
//     borderRadius: 32,
//   },
//   textWrapper4: {
//     fontFamily: 'Work Sans', // ou a fonte desejada
//     fontWeight: 'bold',
//     color: '#fff',
//     fontSize: 18,
//   },
//   textWrapper5: {
//     fontFamily: 'Lato-Bold',
//     fontWeight: '700',
//     color: '#3B82F6', // Cor azul da marca
//     fontSize: 12,
//     textAlign: 'center',
//     textDecorationLine: 'underline',
//   },
//   entrarWrapper: {
//     display: 'flex',
//     width: 256,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     position: 'absolute',
//     top: 548,
//     left: 32,
//     backgroundColor: '#F02B61', // Ajuste para a variável de cor correta
//     borderRadius: 32,
//   },
//   logo: {
//     position: 'absolute',
//     width: 80,
//     height: 105,
//     top: 20,
//     left: 120,
//   },
// });
