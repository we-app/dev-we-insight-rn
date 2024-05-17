export type Translations = {
  title: string;
  description: string;
  feedbackQuestion: string;
  feedbackPlaceholder: string;
  emailPlaceholder: string;
  sendButton: string;
  skipButton: string;
  satisfactionQuestion: string;
  answerFurtherQuestions: string;
  ratingTranslations: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
  };
}

export type DefaultTranslations = {
  en: Translations;
  sv: Translations;
}