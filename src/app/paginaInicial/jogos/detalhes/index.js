import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Avatar, Title, Appbar } from 'react-native-paper';

export default function DetalhesJogos({route}) {
    
    const id = route?.params?.id

    const [jogo, setJogo] = useState({})

    const getJogo = async (userId) => {
        try {

            const resposta = await fetch(
                'https://641adcd21f5d999a4454d960.mockapi.io/jogos/' + userId
            )

            const json = await resposta.json()
            setJogo(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJogo(id)
    }, [id])

    return (
        <View>
            {id != undefined? (

                <View>

                    <View>

                        {/* <Appbar.Header>

                            <Appbar.BackAction onPress={() => {}} />
                            <Appbar.Action icon="magnify" onPress={() => {}} />
                            <Appbar.Action  icon="dots-vertical" onPress={() => {}} />

                        </Appbar.Header>  */}

                    </View>

                    <View>

                        <View style={estilos.cardIcon}>

                            <Avatar.Image size={35} source={{ uri: jogo.logo }} />

                            <Title style={{marginLeft: 10}}>{jogo.nome}</Title>

                        </View>

                        <View style={estilos.cardSobreJogo}>

                            <View style={{alignItems: 'center'}}>

                                <Text>Gênero</Text>
                                <Text style={{color: 'gray'}}>{jogo.genero}</Text>
                                
                            </View>

                            <View style={estilos.linhaVertical}></View>

                        </View>

                    </View>
                        

                    <Card.Cover source={{ uri: jogo.imagem }} /> 

                </View>

            ) : (

                <View>

                    <Text>Cadê o id</Text>

                </View>
            )}
        </View>
    )
}

const estilos = StyleSheet.create ({
    
    iconMagnify: {
        float: 'right'
    },
    cardIcon: {
        alignItems: 'end',
        flexDirection: 'row',
        padding: 25
    },
    cardSobreJogo: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingBottom: 25
    },
    linhaVertical: {
        height: 30,
        borderRightWidth: 0.5,
        paddingHorizontal: 12
    }
})