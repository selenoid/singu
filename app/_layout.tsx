import { useEffect } from 'react';
import App from './App';

export default function RootLayout() {
  useEffect(() => {
    console.log('root layout...')
  }, [])

  return (
    <>
      <App />
    </>
  );
}