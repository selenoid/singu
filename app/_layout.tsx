import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabsol)" options={{ headerShown: false }} />
        <StatusBar style="light" />
      </Stack>
    </>
  );
}
