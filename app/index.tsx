// app/index.js
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/details">Ir para detalhes</Link>
    </View>
  );
}
