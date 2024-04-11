import React, { useState } from "react";
import { ImageBackground, Image, View, Text } from "react-native"
import { styles } from "../../screens/Pag4/styles";
import { IPage } from "../../../App";
import { Botao } from "../components/Botao";
import { styleContainer } from "../../styles/globalstyles";



export function Pag4({ setPage }: IPage) {

    const fundoMarrom = require('../../assets/fundoMarrom.png')
    const brilho = require('../../assets/envio.png')

    return (
        <ImageBackground source={fundoMarrom} style={styleContainer.container}>

            <View style={styles.envio}>
                <Image source={require('../../assets/envio.png')} style={styles.entrega} />

                <View style={styles.TextArea}>
                    <Text style={styles.Text}> O prazo de confecção e envio do item varia de acordo com o modelo,
                        o tamanho desejado + o envio dos correios. Aqui na Brazilinhas enviamos para todo o Brasil :)
                    </Text>
                </View>
                <View>
                     
                </View>
            </View>

            <View style={styles.bolinha}>
                <Botao onPress={() => setPage(1)} cor={false} />
                <Botao onPress={() => setPage(2)} cor={false} />
                <Botao onPress={() => setPage(3)} cor={false} />
                <Botao onPress={() => setPage(4)} cor={true} />
            </View>

        </ImageBackground>
    )
}


