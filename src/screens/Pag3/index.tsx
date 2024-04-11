import React, { useState } from "react";
import { ImageBackground, Image, View, Text } from "react-native"
import { styles } from "../../screens/Pag3/styles";
import { IPage } from "../../../App";
import { Botao } from "../components/Botao";
import { styleContainer } from "../../styles/globalstyles";



export function Pag3({ setPage }: IPage) {

    const fundoAmarelo = require('../../assets/fundoAmarelo.png')
    const cartao = require('../../assets/cartao.png')

    return (
        <ImageBackground source={fundoAmarelo} style={styleContainer.container}>

            <View style={styles.cartao}>
                <Image source={require('../../assets/cartao.png')} style={styles.cartaozinho} />

                <View style={styles.TextArea}>
                    <Text style={styles.Text}>
                        Deverá ser feito um pagamento de 50% do valor do item na hora da compra.
                        Não haverá reembolso desses 50% caso haja desistência!
                    </Text>
                </View>
            </View>

            <View style={styles.bolinha}>
                <Botao onPress={() => setPage(1)} cor={false} />
                <Botao onPress={() => setPage(2)} cor={false} />
                <Botao onPress={() => setPage(3)} cor={true} />
                <Botao onPress={() => setPage(4)} cor={false} />
            </View>

        </ImageBackground>
    )
}


