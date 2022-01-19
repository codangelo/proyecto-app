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
    texto: {
        fontSize: 30,
    },
    botones: {
        width: '100%',
        flexGrow: 0.05,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})