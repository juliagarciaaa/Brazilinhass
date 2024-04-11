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
        width: 350,

    },
    Text: {
        color: colors.rosaClaro,
        fontFamily: "Comfortaa_400Regular",
        textAlign: "center",
        fontSize: 18,
        padding: 10,

    },

    envio:{
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 100,
        alignItems: "center",
    },

    entrega:{
        width:150,
        height:150,
    },
}) 


