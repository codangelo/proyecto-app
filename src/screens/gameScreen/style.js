import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexGrow: 0.25,
        justifyContent: "space-around",
        alignItems: "center",
        elevation: 1,
        marginHorizontal: 30,
        marginVertical: 20,
        borderWidth: 0.1,
        borderColor: '#ccc',
        borderRadius: 10,

    },
    subtitulo: {
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
})