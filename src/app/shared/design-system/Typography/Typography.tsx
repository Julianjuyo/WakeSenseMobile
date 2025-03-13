import { Text, TextProps } from 'react-native';
import typography from './styles';

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'subHeading1'
  | 'subHeading2'
  | 'primaryNavigation'
  | 'secondaryNavigation'
  | 'bodyText'
  | 'button'
  | 'formLabels'
  | 'formValues';

export interface TypographyProps extends TextProps {
  type: TypographyType;
  children: React.ReactNode;
  allowFontScaling?: boolean;
}

export default function Typography({
  type,
  style,
  children,
  allowFontScaling = true,
  ...props
}: TypographyProps) {
  return (
    <Text
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={1.2}
      style={[typography[type], style]}
      {...props}
    >
      {children}
    </Text>
  );
}
