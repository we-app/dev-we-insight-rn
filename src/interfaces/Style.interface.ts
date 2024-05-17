export type Style = {
  backgroundColor: string;
  textColor: string;
  primaryFont: string;
  secondaryFont: string;
  buttonsStyle: ButtonsStyle;
  inputStyle: InputStyle;
  checkboxStyle: CheckboxStyle;
  ratingBoxStyle: RatingBoxStyle;
}

export type CheckboxStyle = {
  checkedBorderColor: string;
  uncheckedBorderColor: string;
  checkedBackgroundColor: string;
  uncheckedBackgroundColor: string;
  checkmarkColor: string;
  textColor: string;
}

export type ButtonsStyle = {
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
  secondaryButtonBackgroundColor?: string;
  secondaryButtonTextColor?: string;
}

export type InputStyle = {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

export type RatingBoxStyle = {
  backgroundColor: string;
  textColor: string;
  iconTextColor: string;
  fontFamily: string;
}