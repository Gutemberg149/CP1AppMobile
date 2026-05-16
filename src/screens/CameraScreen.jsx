import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, Image, Linking, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef, useContext } from 'react';

import * as Sharing from 'expo-sharing';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";


import { UserContext } from '../contexts/UserContext';

export default function CameraScreen({ navigation }) {
  const { updateUserData } = useContext(UserContext);
  
  const [permissaoCam, requestPermissaoCam] = useCameraPermissions();
  const [permissaoMedia, requestPermissaoMedia] = MediaLibrary.usePermissions();
  const cameraRef = useRef(null);
  
  const [foto, setFoto] = useState(null);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [flashLigado, setFlashLigado] = useState(false);
  const [scaneado, setScaneado] = useState(false);

  useEffect(() => {
    if (permissaoMedia === null) return;
    if (!permissaoMedia?.granted) {
      requestPermissaoMedia();
    }
  }, [permissaoMedia]);

  if (!permissaoCam) return <View />;
  
  if (!permissaoCam.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginBottom: 20 }}>Permissão da câmera não foi concedida</Text>
        <Button title='Permitir Acesso' onPress={requestPermissaoCam} />
      </View>
    );
  }


  const tirarFoto = async () => {
    if (cameraRef.current) {
      const dadoFoto = await cameraRef.current.takePictureAsync();
      setFoto(dadoFoto);
    }
  };

  const usarComoFotoPerfil = () => {
    if (foto?.uri) {
      updateUserData({ foto: foto.uri });
      navigation.goBack(); 
    }
  };

  const salvarNaGaleria = async () => {
    if (foto?.uri) {
      try {
        await MediaLibrary.createAssetAsync(foto.uri);
        Alert.alert("Sucesso", "Foto salva na galeria!");
      } catch (error) {
        Alert.alert("Erro", "Não foi possível salvar a foto.");
      }
    }
  };

  return (
    <View style={styles.container}>
      {!foto ? (
        <>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing={isFrontCamera ? "front" : "back"}
            flash={flashLigado ? "on" : "off"}
            onBarcodeScanned={({ type, data }) => {
              if (!scaneado) {
                setScaneado(true);
                Alert.alert("Código detectado", `Tipo:${type}\nValor:${data}`, [
                  { text: "Cancelar", onPress: () => setScaneado(false) },
                  {
                    text: "Pesquisar",
                    onPress: () => Linking.openURL(`https://pt.product-search.net/?q=${data}`)
                  }
                ]);
              }
            }}
          />
          <View style={styles.buttonContainer}>
            <Button title='Tirar Foto' onPress={tirarFoto} color="#946EC2" />
            <Button title="Inverter" onPress={() => setIsFrontCamera(!isFrontCamera)} />
            <Button title={flashLigado ? "Flash: ON" : "Flash: OFF"} onPress={() => setFlashLigado(!flashLigado)} />
          </View>
        </>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: foto.uri }} style={styles.previewImage} />
          
          <View style={styles.confirmButtons}>
            <Button title='USAR NO PERFIL' onPress={usarComoFotoPerfil} color="green" />
            <Button title='Salvar na Galeria' onPress={salvarNaGaleria} color="#946EC2" />
            <Button title='Tirar outra' onPress={() => setFoto(null)} color="red" />
          </View>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  previewImage: {
    width: '90%',
    height: '60%',
    borderRadius: 20,
    marginBottom: 20
  },
  confirmButtons: {
    width: '80%',
    gap: 10
  }
});