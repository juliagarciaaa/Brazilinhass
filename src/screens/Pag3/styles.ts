import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles";

export const styles = StyleSheet.create({

    Image: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    bolinha: {
        padding: 10,
        flexDirection: "row",

    },
    TextArea: {
        width: 350,
        paddingTop: 100,

    },
    Text: {
        color: colors.marromTerra,
        fontFamily: "Comfortaa_400Regular",
        textAlign: "center",
        fontSize: 18,
        padding: 10,

    },

    cartao:{
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 100,
        alignItems: "center",
    },

    cartaozinho:{
        width:150,
        height:150,
    },
}) 


