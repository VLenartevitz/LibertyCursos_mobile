import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Instale o pacote @expo/vector-icons, caso ainda não tenha
import { router } from "expo-router";

const HomeScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Digite Aqui...</Text>
        </View>
        <Text style={styles.loginText}>Login</Text>

        {/* Menu Hambúrguer */}
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <MaterialIcons name="menu" size={24} color="#007AFF" />
        </TouchableOpacity>

        {/* Modal do Menu */}
        <Modal
          transparent
          visible={menuVisible}
          animationType="slide"
          onRequestClose={toggleMenu}
        >
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <View style={styles.menu}>
            <Text style={styles.menuItem} onPress={() => console.log('Perfil')}>Perfil</Text>
            <Text style={styles.menuItem} onPress={() => router.navigate('/CursoScreen')}>Cursos</Text>
            <Text style={styles.menuItem} onPress={() => console.log('Configurações')}>Configurações</Text>
            <Text style={styles.menuItem} onPress={() => console.log('Sair')}>Sair</Text>
          </View>
        </Modal>
      </View>

      {/* Offers Section */}
      <View style={styles.offersSection}>
        <Text style={styles.offersTitle}>OFERTAS</Text>
        <View style={styles.offerCard}>
          <Text style={styles.offerTitle}>Desenvolvimento Web com React</Text>
          <Text style={styles.offerDescription}>Aprenda React JS na prática criando aplicações completas!</Text>
          <Text style={styles.offerPrice}>R$27,90</Text>
          <Text style={styles.offerDiscount}>R$169,90 | Desconto 84%</Text>
        </View>
      </View>

      {/* Recommended Courses */}
      <View style={styles.recommendedSection}>
        <Text style={styles.sectionTitle}>Cursos Recomendados</Text>
        <View style={styles.courseCard}>
          <Text style={styles.courseTitle}>Java COMPLETO 2023</Text>
          <Text style={styles.coursePrice}>200,00 R$</Text>
        </View>
      </View>

      {/* Footer Information */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Liberty Cursos, Inc.</Text>
        <View style={styles.footerLinks}>
          <Text>Quem somos</Text>
          <Text>Fale com Agente</Text>
          <Text>Tá com dúvida?</Text>
          <Text>Contato</Text>
          <Text>Trabalhe Conosco</Text>
          <Text>Termos</Text>
          <Text>Política de privacidade</Text>
          <Text>Configurações de cookie</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchText: {
    color: '#888',
  },
  loginText: {
    fontSize: 16,
    color: '#333',
  },
  menuButton: {
    padding: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#007AFF',
  },
  footer: {
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  offersSection: {
    marginTop: 20,
  },
  offersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerCard: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  offerPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e60000',
    marginTop: 5,
  },
  offerDiscount: {
    fontSize: 12,
    color: '#555',
  },
  recommendedSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseCard: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  coursePrice: {
    fontSize: 14,
    color: '#e60000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
