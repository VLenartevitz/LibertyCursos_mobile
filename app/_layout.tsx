// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Este Stack ocultará o cabeçalho em todas as telas */}
    </Stack>
  );
}
