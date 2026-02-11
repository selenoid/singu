import { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  placeHolder: string,
  label: string,
  onChange: () => void;
};

export default function InputForm({ label, placeHolder, onChange }: Props) {
  console.log('on change..', onChange)
  const test = false;

  const [val, setVal] = useState('test')


  useEffect(() => {
    console.log('val changed: ', val)
    if (test) {
      setVal(val + '.')
    }
  }, [val, test])

  return (
    <TextInput style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#4f4f4f" />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: '#ccc',
  }
});

/* function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
} */