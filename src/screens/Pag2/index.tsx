import React, { useState } from "react";
import { ImageBackground, Image, View, Text } from "react-native"
import { styles } from "../../screens/Pag2/styles";
import { IPage } from "../../../App";
import { Botao } from "../components/Botao";
import { styleContainer } from "../../styles/globalstyles";



export function Pag2({ setPage }: IPage) {

    const fundoVerde = require('../../assets/fundoVerde.png')
    const brilho = require('../../assets/brilho.png')

    return (
        <ImageBackground source={fundoVerde} style={styleContainer.container}>

            <View style={styles.brilho}>
                <Image source={require('../../assets/brilho.png')} style={styles.brilhinho} />

                <View style={styles.TextArea}>
                    <Text style={styles.Text1}> Na Brazilinhas oferecemos a oportunidade de selecionar cores exclusivas 
                    para o seu crochê!{'\n'}
                    Fique à vontade para nos enviar suas inspirações se tiver alguma peça específica em mente.
                    </Text>
                </View>
            </View>

            <View style={styles.bolinha}>
                <Botao onPress={() => setPage(1)} cor={false}/>
                <Botao onPress={() => setPage(2)} cor={true}/>
                <Botao onPress={() => setPage(3)} cor={false}/>
                <Botao onPress={() => setPage(4)} cor={false}/>
            </View>

        </ImageBackground>
    )
}


