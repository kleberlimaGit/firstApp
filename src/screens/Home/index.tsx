import {
    Alert,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";
import { useState } from "react";
export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('');
  
  function handleParticipantAdd() {
    if(participantName.length <= 0){
        return Alert.alert("Input vazio", "Você não pode enviar dados vazios.")
    }

    setParticipants(state => [...state, participantName.toUpperCase()])
    setParticipantName('')
  }

  function handleParticipantRemove(index: number, name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
        {
            text: "Sim",
            onPress:() => {
              setParticipants(participants.filter(p => p !== participants[index]))
            }
        },
        {
            text: "Não",
            style: 'cancel'
        }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Meus Convidados</Text>
      <Text style={styles.eventDate}>Quantidade: {participants.length}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Nome do input"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
        <FlatList data={participants} keyExtractor={(_item, index) => String(index)}
            renderItem={({item, index}) => (
                <Participant
                name={item}
                onRemove={() => handleParticipantRemove(index, item)}
                key={index}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listParticipantsEmpty}>
                    Não há participantes no Evento ainda. Adicione o primeiro camarada.
                </Text>
            )}
        />
    {/* -------------- ScrollView rolagem dos elementos ---------------*/}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((p, index) => {
          return (
            <Participant
              name={p}
              onRemove={() => handleParticipantRemove(index)}
              key={index}
            />
          );
        })}
      </ScrollView> */}
    </View>
  );
}
