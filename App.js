import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <TextInput placeholder="Escribe tu Nombre" style={styles.input} />

        <Button title="Guardar" color="#333" />

        <TouchableHighlight style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: 300,
    height: 40,
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
});

export default App;
