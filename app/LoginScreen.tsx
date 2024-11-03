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

export default function Login() {
  return (
    <ScreenComponent style={styles.screen}>
      <Image style={styles.logo} source={require("./img/Logo.png")} />
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá!</Text>
        <Text style={styles.welcomeText}>Que bom que está aqui!</Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <Image style={styles.img} source={require("./img/ico-lock.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="email@exemplo.com.br"
          />
        </View>
        <View style={styles.input}>
          <Image style={styles.img} source={require("./img/ico-user.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="******"
            secureTextEntry
          />
        </View>

        <Button
          color={Colors.highlight}
          text={"Entrar"}
          onPress={undefined}
        ></Button>

        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </View>

      <Button
        color={Colors.secondary}
        text={"Crie sua conta"}
        onPress={() => router.push("/RegisterScreen")}
      ></Button>
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
  signInButton: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.highlight,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "Work Sans",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
  },
  forgotPassword: {
    fontFamily: "Lato-Bold",
    fontWeight: "700",
    color: "#3B82F6",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
  },
  signUpButton: {
    width: "90%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    borderRadius: 30,
    marginVertical: 10,
  },
  logo: {
    width: 80,
    height: 105,
    resizeMode: "contain", // Mantenha a proporção da imagem
    marginTop: 20,
  },
});
