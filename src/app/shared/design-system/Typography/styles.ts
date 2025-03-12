import { StyleSheet } from 'react-native';
import { colors } from '../colors/colors';

export const typography = StyleSheet.create({
  h1: {
    fontFamily: 'Inter-Light',
    fontSize: 36,
    lineHeight: 45,
    color: colors.negro,
  },
  h2: {
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    lineHeight: 38,
    color: colors.negro,
  },
  subHeading1: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    lineHeight: 31,
    color: colors.negro,
  },
  subHeading2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    lineHeight: 25,
    color: colors.negro,
  },
  primaryNavigation: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 25,
    color: colors.negro,
  },
  secondaryNavigation: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    lineHeight: 25,
    color: colors.negro,
  },
  bodyText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.negro,
  },
  button: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    lineHeight: 25,
    color: colors.negro,
  },
  formLabels: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.negro,
  },
  formValues: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.negro,
  },
});
