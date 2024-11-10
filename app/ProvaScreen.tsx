import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import ScreenComponent from "@/components/ScreenComponent";

export default function FAQScreen() {
  // Dados de exemplo com perguntas e respostas
  const [questions, setQuestions] = useState([
    { id: '1', question: "O que é React Native?", answer: "React Native é um framework para desenvolvimento de aplicativos móveis usando JavaScript e React." },
    { id: '2', question: "O que é Expo?", answer: "Expo é uma ferramenta que simplifica o desenvolvimento de aplicativos React Native, oferecendo um ambiente de desenvolvimento completo." },
    { id: '3', question: "Como instalar pacotes no projeto?", answer: "Você pode instalar pacotes usando o npm ou yarn. Por exemplo: npm install pacote ou yarn add pacote." },
  ]);

  // Função para alternar a visibilidade da resposta
  const toggleAnswer = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((item) =>
        item.id === id ? { ...item, showAnswer: !item.showAnswer } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.questionContainer}>
      <TouchableOpacity onPress={() => toggleAnswer(item.id)}>
        <Text style={styles.questionText}>{item.question}</Text>
      </TouchableOpacity>
      {item.showAnswer && <Text style={styles.answerText}>{item.answer}</Text>}
    </View>
  );

  return (
    <ScreenComponent style={styles.screen}>
      <Text style={styles.headerText}>Perguntas Frequentes</Text>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  questionContainer: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  answerText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});
