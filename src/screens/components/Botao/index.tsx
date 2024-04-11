import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {styles} from "./style"
export interface IBSlider extends TouchableOpacityProps {
    onPress: () => void
    cor: boolean
}

export function Botao ({onPress, cor}: IBSlider){
    return(
        <TouchableOpacity style= {cor ? styles.bola : styles.bolaCor} onPress={onPress}/>
    )

}