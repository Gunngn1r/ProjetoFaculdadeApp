import AsyncStorage from '@react-native-async-storage/async-storage';

export async function salvarTema(tema: string): Promise<void> {
    try {
        await AsyncStorage.setItem('tema', tema);
    } catch (erro) {
        console.log('Não foi possível salvar o tema:', erro);
    }
}

export async function buscarTema(): Promise<string | null> {
    try {
        const tema = await AsyncStorage.getItem('tema');
        return tema;
    } catch (erro) {
        console.log('Não foi possível buscar o tema:', erro);
        return null;
    }
}
