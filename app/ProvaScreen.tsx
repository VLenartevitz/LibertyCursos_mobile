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
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar as perguntas da API
  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://192.168.1.100:3000/api/check-answers");
      console.error("foi");
    } catch (error) {
      console.error("Erro ao buscar perguntas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScreenComponent style={styles.screen}>
      <Text style={styles.headerText}>Perguntas Frequentes</Text>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
