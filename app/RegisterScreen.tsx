import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ScreenComponent from "@/components/ScreenComponent";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function RegisterScreen() {
  return (
    <ScreenComponent style={styles.screen}>
      <Image style={styles.logo} source={require("./img/Logo.png")} />
      <View style={styles.header}>
        <Text style={styles.greeting}>Crie sua conta!</Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <Image style={styles.img} source={require("./img/ico-user.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="Seu Nome"
          />
        </View>
        <View style={styles.input}>
        <Image style={styles.img} source={require("./img/ico-user.png")} />
        <TextInput
            style={styles.inputText}
            placeholder="email@exemplo.com.br"
          />
        </View>
        <View style={styles.input}>
          <Image style={styles.img} source={require("./img/ico-lock.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="******"
            secureTextEntry
          />
        </View>

        <Button
          color={Colors.highlight}
          text={"Registrar"}
          onPress={() => router.navigate('/LoginScreen')}
          />
      </View>

      <TouchableOpacity style={styles.signInLink}         onPress={() => router.push("/LoginScreen")}
      >
        <Text style={styles.linkText}>
          Já tem uma conta? Faça login
        </Text>
      </TouchableOpacity>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontFamily: "Work Sans",
    fontWeight: "400",
    color: "#000",
    fontSize: 20,
    marginBottom: 5,
  },
  welcomeText: {
    fontFamily: "Work Sans-Medium",
    fontWeight: "500",
    color: "#000",
    fontSize: 18,
  },
  inputsContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  img: {
    width: 24, // Largura do ícone
    height: 24, // Altura do ícone
    marginRight: 10, // Espaço entre a imagem e o TextInput
  },
  inputText: {
    flex: 1,
    fontFamily: "Work Sans",
    fontWeight: "400",
    color: "#000",
    fontSize: 16,
  },
  signInLink: {
    marginTop: 15,
  },
  linkText: {
    fontFamily: "Work Sans",
    fontWeight: "400",
    color: "#3B82F6",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  logo: {
    width: 80,
    height: 105,
    resizeMode: "contain", // Mantenha a proporção da imagem
    marginTop: 20,
  },
});
