import { useEffect } from 'react';
import App from './App';

export default function RootLayout() {

  debugger
  useEffect(()=>{
    console.log('root layout...')
  },[])

  return (
    <App/>
  );
}