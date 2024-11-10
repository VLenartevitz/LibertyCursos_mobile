import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import ScreenComponent from "@/components/ScreenComponent";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCoursePress = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCourse(null);
  };

  return (
    <ScreenComponent style={styles.screen}>
      <Text style={styles.headerText}>Cursos Disponíveis</Text>
      <ScrollView contentContainerStyle={styles.coursesContainer}>
        {[
          { id: 1, title: "Curso de Desenvolvimento Web", description: "Aprenda a desenvolver apps nativos com React Native" },
          { id: 2, title: "Curso de Flutter", description: "Domine o desenvolvimento de interfaces com Flutter" },
          { id: 3, title: "Curso de Laravel", description: "Construa aplicações web robustas com Laravel" },
        ].map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseCard}
            onPress={() => handleCoursePress(course)}
          >
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal de opções */}
      {selectedCourse && (
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>O que deseja fazer?</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  closeModal();
                  router.navigate('/CourseDetailScreen', { courseId: selectedCourse.id });
                }}
              >
                <Text style={styles.modalButtonText}>Ver Curso</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  closeModal();
                  router.navigate('/ProvaScreen', { courseId: selectedCourse.id });
                }}
              >
                <Text style={styles.modalButtonText}>Realizar Prova</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                <Text style={styles.modalCloseButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    fontFamily: "Work Sans",
    fontWeight: "500",
    fontSize: 24,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  coursesContainer: {
    alignItems: "center",
  },
  courseCard: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseInfo: {
    flex: 1,
    justifyContent: "center",
  },
  courseTitle: {
    fontFamily: "Work Sans",
    fontWeight: "500",
    fontSize: 18,
    color: "#000",
  },
  courseDescription: {
    fontFamily: "Work Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#555",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000",
  },
  modalButton: {
    width: "100%",
    padding: 12,
    backgroundColor: Colors.highlight,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 8,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  modalCloseButton: {
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: "#555",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
