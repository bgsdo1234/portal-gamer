import { View, StyleSheet, ScrollView } from 'react-native'
import Noticias from './noticias'
import Jogos from './jogos'
import ProcurarJogadores from './procurarJogadores'

export default function PaginaInicial({ navigation }) {

    return(
        <View style={estilos.container}>

            <ScrollView>
                
                <Noticias 
                style={{flex: 1}}
                />
                
                <Jogos navigation={navigation} 
                style={{flex: 1}}
                />

                <ProcurarJogadores 
                style={{flex: 1}}
                />

            </ScrollView>
        
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
})