import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'tema';
const VALOR_KEY = 'valorSalvo';

export type ThemeMode = 'light' | 'dark';

export async function salvarTema(tema: ThemeMode): Promise<void> {
  try {
    await AsyncStorage.setItem(THEME_KEY, tema);
  } catch (erro) {
    console.log('Não foi possível salvar o tema:', erro);
  }
}

export async function buscarTema(): Promise<ThemeMode | null> {
  try {
    const tema = await AsyncStorage.getItem(THEME_KEY);

    if (tema === 'light' || tema === 'dark') {
      return tema;
    }

    return null;
  } catch (erro) {
    console.log('Não foi possível buscar o tema:', erro);
    return null;
  }
}

export async function salvarValor(valor: string): Promise<void> {
  try {
    await AsyncStorage.setItem(VALOR_KEY, valor);
  } catch (erro) {
    console.log('Não foi possível salvar o valor:', erro);
  }
}

export async function recuperarValor(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(VALOR_KEY);
  } catch (erro) {
    console.log('Não foi possível recuperar o valor:', erro);
    return null;
  }
}
