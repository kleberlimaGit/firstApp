import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
      },
      eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      },
      eventDate: {
        color: '#6B6B6B',
        fontSize: 16
      },
      input: {
        height: 56,
        flex: 1,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
      },
      buttonText: {
        color: '#FFF',
        fontSize: 24
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
      },
      inputView: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 36,
        marginBottom:42
      },

      listParticipantsEmpty: {
        color:"#fff", 
        fontSize:14,
        textAlign:"center"
      }
});
