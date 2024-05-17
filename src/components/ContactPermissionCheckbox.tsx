import React from 'react'
import CheckmarkSVG from './images/checkmark.svg'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import type { Translations } from '../interfaces'

interface CheckboxStyle {
  checkedBorderColor: string
  uncheckedBorderColor: string
  checkedBackgroundColor: string
  uncheckedBackgroundColor: string
  checkmarkColor: string
  textColor: string
  fontFamily: string
}

interface Props {
  isChecked: boolean
  onChangeCheck: (_isChecked: boolean) => void
  style: CheckboxStyle
  translations: Translations
}

export const ContactPermissionCheckbox: React.FC<Props> = ({ isChecked, onChangeCheck, style, translations }) => {
  const handleCheckboxToggle = () => {
    onChangeCheck(!isChecked)
  }

  const {
    checkedBorderColor,
    uncheckedBorderColor,
    checkedBackgroundColor,
    uncheckedBackgroundColor,
    checkmarkColor,
    textColor,
    fontFamily
  } = style

  const checkboxStyles = {
    borderColor: isChecked ? checkedBorderColor : uncheckedBorderColor,
    backgroundColor: isChecked ? checkedBackgroundColor : uncheckedBackgroundColor,
    ...styles.checkbox,
  }

  const checkmarkStyles = {
    color: checkmarkColor,
    ...styles.checkmark,
  }

  const textStyles = {
    color: textColor,
    fontFamily: fontFamily,
    ...styles.text,
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCheckboxToggle} style={styles.checkboxContainer}>
        <View style={checkboxStyles}>
          {isChecked && (
            <Text style={checkmarkStyles}>
              <CheckmarkSVG />
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <Text style={textStyles}>{translations.answerFurtherQuestions}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 14,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
})
