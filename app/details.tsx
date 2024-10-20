// app/details.js
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function details() {
  return (
    <View>
      <Text>Detalhes da página</Text>
      <Link href="/">Voltar para Home</Link>
    </View>
  );
}
