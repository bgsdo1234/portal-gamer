import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView, Text, InteractionManager } from 'react-native'
import { Card, Title } from 'react-native-paper'

export default function jogos({ navigation }) {
    
    const [jogos, setJogos] = useState([])

    const getJogos = async () => {
        try{
            const resposta = await fetch(
                'https://641adcd21f5d999a4454d960.mockapi.io/jogos'
            )
            const json = await resposta.json()
            setJogos(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJogos()
    }, [])

    return(
        <View style={{paddingTop: 3}}>

            <ScrollView
            style={estilos.jogo}
            >

                <FlatList 
                data={jogos}
                horizontal={true}
                renderItem={({ item }) => (

                    <Card
                    onPress={() => navigation.navigate('DetalhesJogos', {id: item.id})}
                    
                    style={estilos.card}
                    >
                            
                        <Card.Cover 
                        source={{ uri: item.capadojogo }}
                        style={estilos.capaDoJogo}
                        />

                        <Title
                        style={estilos.tituloDoJogo}
                        >
                        
                            {item.nome}

                        </Title>

                    </Card>
                    
                    )}
                
                />

            </ScrollView>

        </View>
    )
}

const estilos = StyleSheet.create({
    jogo: {
        marginHorizontal: 10,
        marginTop: 40
    },
    card: {
        height: 150,
        width: 75,
        margin: 10,
        borderRadius: 2
    },
    capaDoJogo: {
        height:120,
        width: 75    
    },
    tituloDoJogo: {
        fontSize: 12,
        flexDirection: 'row',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})