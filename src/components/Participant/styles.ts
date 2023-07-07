import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: '#1f1e25',
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft: 20,
        marginBottom: 10

    },
    name: {
        color:'#fff',
        flex: 1, 
        fontSize: 20
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        color: '#FFF',
        fontSize: 24
      },
})