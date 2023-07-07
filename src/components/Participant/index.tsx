import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Name {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: Name) {
  return (
    <View style={styles.container}>
        {/* -------------- View QUASE UMA DIV ---------------*/}
      <Text style={styles.name}>{name}</Text>
      {/* -------------- TouchableOpacity BOTÃO DO APP ---------------*/}
      <TouchableOpacity style={styles.button} onPress={onRemove}> 
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
