import { colors } from "../../../styles/globalstyles"
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    bola:{
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: colors.rosaClaro,
        margin: 10,

    },

    bolaCor:{
        width: 25,
        height: 25,
        margin: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.rosaClaro,
        backgroundColor: colors.tranparente,
    }
})

