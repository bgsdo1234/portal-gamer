import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView  } from 'react-native'
import { Card } from 'react-native-paper'

export default function noticias(){
    
    const [noticias, setNoticias] = useState('')

    const getNoticias = async () => {
        try{
            const resposta = await fetch(
                "https://639b4ea231877e43d6891936.mockapi.io/games"
            )
            const json = await resposta.json()
            setNoticias(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNoticias()
    }, [])

    return(

        <View>

            <ScrollView
            style={estilos.noticias}
            >

                <FlatList 
                data={noticias}
                horizontal={true}
                renderItem={({ item }) => (

                    <Card
                    style={estilos.card}
                    >
                            
                        <Card.Cover 
                        source={{ uri: item.CapaDoJogo }}
                        style={estilos.capaDoJogo}
                        />

                    </Card>
                    
                    )}
                
                />

            </ScrollView>

        </View>
    )
}

const estilos = StyleSheet.create({
    noticias: {
        marginTop: 40,
        marginHorizontal: 10
    },
    card: {
        height: 180,
        width: 300,
        margin: 10,
        borderRadius: 2
    },
    capaDoJogo: {
        height:180,
        width: 300
    }
})