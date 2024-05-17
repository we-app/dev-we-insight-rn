import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'

interface InputStyle {
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  fontFamily?: string
}

interface InputProps {
  onChangeText: (_text: string) => void
  value: string
  placeholder: string
  multiline?: boolean
  numberOfLines?: number
  style: InputStyle
}

export const Input: React.FC<InputProps> = ({
  multiline = false,
  numberOfLines = 1,
  placeholder = '',
  onChangeText,
  value,
  style = {},
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputStyle = {
    backgroundColor: style.backgroundColor,
    color: style.textColor,
    borderColor: style.borderColor,
    fontFamily: style.fontFamily,
    ...styles.input,
    ...(multiline && styles.textArea),
    fontSize: 16,
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.placeholderContainer}>
        {(value || isFocused) && <Text style={[styles.placeholder, { color: style.textColor }]}>{placeholder}</Text>}
        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={isFocused ? '' : placeholder}
          onChangeText={onChangeText}
          value={value}
          style={inputStyle}
          placeholderTextColor={style.textColor}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
  },
  placeholderContainer: {
    position: 'relative',
  },
  placeholder: {
    position: 'absolute',
    top: 4,
    left: 10,
    color: '#ffffff',
    fontSize: 10,
    zIndex: 999,
  },
})
