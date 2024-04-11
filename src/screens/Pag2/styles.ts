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
        paddingTop: 100,
        width: 400,

    },
    Text1: {
        color: colors.amarelo,
        fontFamily: "Comfortaa_400Regular",
        textAlign: "center",
        fontSize: 18,
        padding: 10,

    },


    brilho: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 100,
        alignItems: "center",

    },

    brilhinho:{
        width:150,
        height:150,
    },
}) 


