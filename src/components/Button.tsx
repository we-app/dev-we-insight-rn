import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

interface ButtonsStyle {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
}

interface Props {
  text: string;
  onPress: () => void;
  style?: ButtonsStyle;
}

export const Button: React.FC<Props> = ({ text, onPress, style = {} }) => {
  const combinedWrapperStyles = {
    ...styles.wrapper,
    backgroundColor: style.backgroundColor,
  }
  const combinedTextStyles = { ...styles.text, color: style.textColor }
  return (
    <Pressable style={combinedWrapperStyles} onPress={onPress}>
      <Text style={combinedTextStyles}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 64,
    padding: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
})
