import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Image source={require('./assets/vector-2.png')} style={styles.logo} /> */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Digite Aqui...</Text>
          {/* <Image source={require('./assets/vector.png')} style={styles.searchIcon} /> */}
        </View>
      </View>

      {/* Objetivo do Curso */}
      <View style={styles.objetivo}>
        <Text style={styles.objetivoTitle}>Objetivo do Curso</Text>
        <Text style={styles.objetivoDescription}>
          - Ao final do curso, a aluna terá pleno conhecimento sobre a estrutura HTML e CSS e terá a habilidade de
          criar sites responsivos que funcionam em versões diferentes para celulares e computadores com 100% de compatibilidade.
        </Text>
      </View>

      {/* Course Information */}
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>Arduino - Passo a Passo</Text>
        <Text style={styles.courseDescription}>
          Este curso abrangente de HTML e CSS é projetado para iniciantes e aspirantes a desenvolvedores web que
          desejam adquirir habilidades fundamentais na criação e estilização de páginas da web.
        </Text>
        <Text style={styles.courseDuration}>Duração do Curso: 20 Horas</Text>
        <Text style={styles.coursePrice}>R$ 99,90</Text>
        <Text style={styles.courseReviews}>(1230 avaliações)</Text>
      </View>

      {/* Stars Rating */}
      <View style={styles.stars}>
        {/* <Image source={require('./assets/image-32.png')} style={styles.star} /> */}
        {/* <Image source={require('./assets/image-34.png')} style={styles.star} /> */}
        {/* <Image source={require('./assets/image-35.png')} style={styles.star} /> */}
        {/* <Image source={require('./assets/image-36.png')} style={styles.star} /> */}
        {/* <Image source={require('./assets/image-37.png')} style={styles.star} /> */}
        <Text style={styles.rating}>5</Text>
      </View>

      {/* Instructor Info */}
      <View style={styles.instructorInfo}>
        {/* <Image source={require('./assets/image-23-1.png')} style={styles.instructorImage} /> */}
        <Text style={styles.instructorName}>Professor Tiago Henrique</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Liberty Cursos, Inc.</Text>
        <Text style={styles.footerLink}>Quem somos</Text>
        <Text style={styles.footerLink}>Fale com Agente</Text>
        <Text style={styles.footerLink}>Tá com duvida?</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#d826d8',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 92,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f280',
    borderRadius: 20,
    padding: 10,
  },
  searchText: {
    color: '#f2f2f2',
    fontSize: 20,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  objetivo: {
    padding: 20,
    alignItems: 'center',
  },
  objetivoTitle: {
    fontSize: 30,
    color: '#952b95',
    fontWeight: '600',
  },
  objetivoDescription: {
    fontSize: 18,
    color: '#7878ff',
    textAlign: 'center',
    marginTop: 10,
  },
  courseInfo: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 24,
    color: '#952b95',
    fontWeight: '800',
  },
  courseDescription: {
    fontSize: 16,
    color: '#7878ff',
    marginTop: 10,
  },
  courseDuration: {
    fontSize: 18,
    color: '#7878ff',
    marginTop: 10,
  },
  coursePrice: {
    fontSize: 30,
    color: '#952b95',
    fontWeight: '900',
    marginTop: 10,
  },
  courseReviews: {
    fontSize: 16,
    color: '#7878ff',
    marginTop: 10,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  star: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  rating: {
    fontSize: 30,
    color: '#fff400',
    marginLeft: 10,
  },
  instructorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  instructorImage: {
    width: 100,
    height: 100,
  },
  instructorName: {
    fontSize: 24,
    color: '#952b95',
    marginLeft: 20,
  },
  footer: {
    backgroundColor: '#7878ff',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#952b95',
    fontSize: 18,
    marginBottom: 10,
  },
  footerLink: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 5,
  },
});
