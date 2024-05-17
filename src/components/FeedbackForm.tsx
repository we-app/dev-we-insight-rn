import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Button } from './Button'
import { Rating } from './Rating'
import { Input } from './Input'
import { ContactPermissionCheckbox } from './ContactPermissionCheckbox'
import { useSendFeedback } from '../hooks/useSendFeedback'
import { defaultStyle, defaultTranslations } from '../constants'
import type { IconItem, SDKConfig, Style, Translations } from '../interfaces'

const { width } = Dimensions.get('window')

export interface FeedbackFormProps {
  projectName: string;
  SDKConfig: SDKConfig;
  onSkip?: () => void;
  onSend?: () => void;
  email?: string;
  style?: Style;
  language?: 'en' | 'sv';
  customTranslations?: Translations;
  customIcons?: IconItem[];
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  style = defaultStyle,
  SDKConfig,
  onSend,
  onSkip,
  email,
  projectName,
  language = 'sv',
  customTranslations,
  customIcons,
}) => {
  const { sendFeedback } = useSendFeedback(SDKConfig)
  const [selectedIconIndex, setSelectedIconIndex] = useState<number | null>(
    null
  )
  const [feedbackText, setFeedbackText] = useState<string>('')
  const [contactEmail, setContactEmail] = useState<string>(email || '')
  const [contactPermission, setContactPermission] = useState<boolean>(false)
  const [userDidSkip, setUserDidSkip] = useState<boolean>(false)
  const translations: Translations = {
    ...defaultTranslations[language],
    ...customTranslations,
  }

  const styles = StyleSheet.create({
    modal: {
      backgroundColor: style.backgroundColor,
      fontFamily: style.primaryFont,
      position: 'absolute',
      justifyContent: 'center',
      height: '100%',
      width: width,
    },
    margin: {
      marginLeft: 8,
      marginRight: 8,
    },
    title: {
      color: style.textColor,
      fontFamily: style.primaryFont,
      fontSize: 32,
      lineHeight: 32,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 16,
      fontWeight: '600',
    },
    text: {
      color: style.textColor,
      fontFamily: style.secondaryFont,
      fontSize: 16,
      lineHeight: 22,
      margin: 8,
    },
    gap: {
      height: 8,
    },
    inputPlaceholderGap: {
      height: 60,
    },
  })

  const handleOnSend = async () => {
    await sendFeedback({
      rating: selectedIconIndex as number,
      allowContact: contactPermission,
      email: contactEmail,
      feedbackText,
    })
    onSend?.()
  }

  const handleOnSkip = () => {
    setUserDidSkip(true)
    onSkip?.()
  }

  if (userDidSkip) return null
  return (
    <View style={styles.modal}>
      <View style={styles.margin}>
        <ScrollView>
          <Text style={styles.title}>{translations.title}</Text>
          <Text style={styles.text}>{translations.description}</Text>
          <Rating
            projectName={projectName}
            selectedIconIndex={selectedIconIndex}
            setSelectedIconIndex={setSelectedIconIndex}
            translations={translations}
            isCustomTranslation={!!customTranslations}
            customIcons={customIcons}
            style={{
              backgroundColor: style.ratingBoxStyle.backgroundColor,
              textColor: style.ratingBoxStyle.textColor,
              iconTextColor: style.ratingBoxStyle.iconTextColor,
              primaryFont: style.ratingBoxStyle.fontFamily,
              secondaryFont: style.ratingBoxStyle.fontFamily,
            }}
          />
          <Text style={styles.text}>
            {customTranslations
              ? customTranslations.feedbackQuestion
              : translations.feedbackQuestion.replace(
                  '{projectName}',
                  projectName
                )}
          </Text>
          <Input
            onChangeText={(text) => setFeedbackText(text)}
            value={feedbackText}
            multiline={true}
            placeholder={translations.feedbackPlaceholder}
            style={{
              backgroundColor: style.inputStyle.backgroundColor,
              textColor: style.inputStyle.textColor,
              borderColor: style.inputStyle.borderColor,
            }}
          />
          <ContactPermissionCheckbox
            isChecked={contactPermission}
            onChangeCheck={(value) => setContactPermission(value)}
            style={{
              checkedBorderColor: style.checkboxStyle.checkedBorderColor,
              uncheckedBorderColor: style.checkboxStyle.uncheckedBorderColor,
              checkedBackgroundColor:
                style.checkboxStyle.checkedBackgroundColor,
              uncheckedBackgroundColor:
                style.checkboxStyle.uncheckedBackgroundColor,
              checkmarkColor: style.checkboxStyle.checkmarkColor,
              textColor: style.checkboxStyle.textColor,
              fontFamily: style.secondaryFont,
            }}
            translations={translations}
          />
          {!contactPermission && <View style={styles.inputPlaceholderGap} />}
          {contactPermission && (
            <Input
              onChangeText={(value) => setContactEmail(value)}
              value={contactEmail}
              placeholder={translations.emailPlaceholder}
              style={{
                backgroundColor: style.inputStyle.backgroundColor,
                textColor: style.inputStyle.textColor,
                borderColor: style.inputStyle.borderColor,
                fontFamily: style.primaryFont,
              }}
            />
          )}
          <Button
            text={translations.sendButton}
            onPress={handleOnSend}
            style={{
              backgroundColor: style.buttonsStyle.primaryButtonBackgroundColor,
              textColor: style.buttonsStyle.primaryButtonTextColor,
            }}
          />
          <View style={styles.gap} />
          <Button
            text={translations.skipButton}
            onPress={handleOnSkip}
            style={{
              backgroundColor:
                style.buttonsStyle.secondaryButtonBackgroundColor,
              textColor: style.buttonsStyle.secondaryButtonTextColor,
              fontFamily: style.primaryFont,
            }}
          />
        </ScrollView>
      </View>
    </View>
  )
}
