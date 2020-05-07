import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container :{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff'
    },
    loginContainer:{
        backgroundColor: '#fff',
        padding: 20,
        width: Dimensions.get('window').width*0.7,
        borderRadius: 5,
        justifyContent: 'center',
    },
    loginTitleContainer:{
        justifyContent: 'center',
        alignItems: 'center', 
        borderBottomColor: '#999',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 10,
        marginBottom: 5
    },
    loginTitle:{
        fontWeight: 'bold',
        fontSize: 30,
    },
    textInput: {
        padding: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        marginVertical: 10,
    },
    button: {
        marginTop: 5,
        backgroundColor: '#999',
        padding: 7,
        width: 150,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 19
    }
});

