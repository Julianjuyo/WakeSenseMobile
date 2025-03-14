import { StyleSheet } from 'react-native';

const colors = {
  morado: '#4B1F9A',
  lavanda: '#9162F2',
  verdeClaro: '#54EE13',
  blanco: '#E5E5E5',
  negro: '#121212',
  rojoSuave: '#D15A5A',
  rojoOscuro: '#732626',
  gris: '#969696',
};

export const colorPalette = StyleSheet.create({
  morado: {
    color: colors.morado,
  },
  lavanda: {
    color: colors.lavanda,
  },
  verdeClaro: {
    color: colors.verdeClaro,
  },
  blanco: {
    color: colors.blanco,
  },
  negro: {
    color: colors.negro,
  },
  rojoSuave: {
    color: colors.rojoSuave,
  },
  rojoOscuro: {
    color: colors.rojoOscuro,
  },
  gris: {
    color: colors.gris,
  },
});

export default colors;
