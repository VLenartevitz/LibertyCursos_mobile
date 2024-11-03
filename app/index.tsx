import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/LoginScreen"); // Navega para a tela de login
    }, 3000); // Tempo em milissegundos (3 segundos)

    return () => clearTimeout(timer); // Limpa o temporizador ao desmontar
  }, [router]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./img/Logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
