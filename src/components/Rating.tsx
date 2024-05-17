import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ratingIcons } from './constants'
import type { IconItem, Translations } from '../interfaces'

interface RatingStyle {
  backgroundColor: string;
  textColor: string;
  primaryFont: string;
  secondaryFont: string;
  iconTextColor: string;
}

interface Props {
  projectName: string;
  selectedIconIndex: number | null;
  setSelectedIconIndex: (_index: number | null) => void;
  isCustomTranslation: boolean;
  translations: Translations;
  style: RatingStyle;
  customIcons?: IconItem[];
}

export const Rating: React.FC<Props> = ({
  projectName,
  selectedIconIndex,
  setSelectedIconIndex,
  isCustomTranslation,
  translations,
  customIcons,
  style,
}) => {
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: style.backgroundColor,
      borderRadius: 8,
      padding: 16,
    },
    text: {
      color: style.textColor,
      fontFamily: style.primaryFont,
      fontSize: 16,
      lineHeight: 22,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 16,
      fontWeight: '700',
    },
    iconWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    iconContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    paragraph: {
      color: style.iconTextColor,
      fontFamily: style.secondaryFont,
      textAlign: 'center',
      maxWidth: 60,
      height: 50,
      marginTop: 4,
    },
  })

  const icons = customIcons || ratingIcons
  const { one, two, three, four, five } = translations.ratingTranslations
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        {isCustomTranslation
          ? translations.satisfactionQuestion
          : translations.satisfactionQuestion + projectName}
        ?
      </Text>
      <View style={styles.iconContent}>
        {icons.map(({ Icon, IconSelected }, index) => (
          <Pressable
            style={styles.iconWrapper}
            key={index}
            onPress={() => setSelectedIconIndex(index + 1)}
          >
            {selectedIconIndex === index + 1 ? <IconSelected /> : <Icon />}
            {index === 0 && <Text style={styles.paragraph}>{one}</Text>}
            {index === 1 && <Text style={styles.paragraph}>{two}</Text>}
            {index === 2 && <Text style={styles.paragraph}>{three}</Text>}
            {index === 3 && <Text style={styles.paragraph}>{four}</Text>}
            {index === 4 && <Text style={styles.paragraph}>{five}</Text>}
          </Pressable>
        ))}
      </View>
    </View>
  )
}
