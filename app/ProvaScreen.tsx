import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import ScreenComponent from "@/components/ScreenComponent";

export default function ProvaScreen() {
  const [questions, setQuestions] = useState([
    { id: '1', question: "Pergunta 1", answer: "Resposta 1", showAnswer: false },
    { id: '2', question: "Pergunta 2", answer: "Resposta 2", showAnswer: false },
  ]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  // Função para alternar a visibilidade da resposta
  const toggleAnswer = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((item) =>
        item.id === id ? { ...item, showAnswer: !item.showAnswer } : item
      )
    );
  };

  // Função para enviar respostas para a API
  const checkAnswers = async () => {
    const answers = ["A", "B"]; // Respostas simuladas
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/check-answers", { answers });
      console.log("Resposta da API:", response.data); // Exibe o resultado da requisição no console
      setResult(response.data); // Resultado da verificação
    } catch (error) {
      console.error("Erro ao verificar respostas:", error);
    } finally {
      setLoading(false);
    }
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
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.button} onPress={checkAnswers}>
        <Text style={styles.buttonText}>Verificar Respostas</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Respostas corretas:
             {/* {result.correctCount} de {questions.length} */}
          </Text>
          <Text style={styles.resultText}>
            Porcentagem:
             {/* {result.percentage.toFixed(2)}% */}
          </Text>
        </View>
      )}
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
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#333",
  },
});
