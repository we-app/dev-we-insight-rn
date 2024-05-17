import type { DefaultTranslations, Style } from "../interfaces"

export const defaultStyle: Style = {
  backgroundColor: '#212431',
  textColor: '#ffffff',
  primaryFont: 'Arial',
  secondaryFont: 'Arial',
  buttonsStyle: {
    primaryButtonBackgroundColor: '#FDA783',
    primaryButtonTextColor: '#2D3142',
    secondaryButtonBackgroundColor: '#212431',
    secondaryButtonTextColor: '#ffffff',
  },
  inputStyle: {
    backgroundColor: '#2D3142',
    textColor: '#ffffff',
    borderColor: '#414762',
  },
  checkboxStyle: {
    checkedBorderColor: '#FDA783',
    uncheckedBorderColor: '#414762',
    checkedBackgroundColor: '#FDA783',
    uncheckedBackgroundColor: '#2D3142',
    checkmarkColor: '#2D3142',
    textColor: '#ffffff',
  },
  ratingBoxStyle: {
    backgroundColor: '#CDD0DC',
    textColor: '#000000',
    iconTextColor: '#2D3142',
    fontFamily: 'Arial',
  },
}

export const defaultTranslations: DefaultTranslations = {
  en: {
    title: 'We value your feedback',
    description: 'Help us improve your experience!',
    feedbackQuestion:
      'What do you like most about {projectName}? Is there anything you feel is missing or could be improved?',
    feedbackPlaceholder: 'Your Feedback',
    emailPlaceholder: 'Email Address',
    sendButton: 'Send',
    skipButton: 'Skip',
    satisfactionQuestion: 'How satisfied are you with ',
    answerFurtherQuestions:
      'I will gladly answer further questions through email',
    ratingTranslations: {
      one: 'Not Satisfied at all',
      two: 'Not very Satisfied',
      three: 'Neutral',
      four: 'Satisfied',
      five: 'Very Satisfied',
    },
  },
  sv: {
    title: 'Vi värdesätter din feedback',
    description: 'Hjälp oss göra din upplevelse bättre!',
    feedbackQuestion:
      'Vad gillar du mest med {projectName}? Är det något du tycker saknas eller hade kunnat förbättras?',
    feedbackPlaceholder: 'Feedback',
    emailPlaceholder: 'Email',
    sendButton: 'Skicka',
    skipButton: 'Skippa',
    satisfactionQuestion: 'Hur nöjd är du med ',
    answerFurtherQuestions: 'Jag svarar gärna på fler frågor via email.',
    ratingTranslations: {
      one: 'Inte alls Nöjd',
      two: 'Inte så Nöjd',
      three: 'Neutral',
      four: 'Nöjd',
      five: 'Väldigt Nöjd',
    },
  },
}