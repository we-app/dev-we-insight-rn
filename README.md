## ! Important Note

This documentation and the usage examples provided are specifically intended for <b>native client implementations</b>. If your project requires integrating the FeedbackForm in a web application, please refer to the web version available.

For the native web version of FeedbackForm, visit the [we-insights-react package on npm](https://www.npmjs.com/package/we-insights-react).

## Table of Contents

- [we-insights-react: A Product by WeApp AB](#we-insights-react-a-product-by-weapp-ab)
- [Installation](#installation)
- [Usage](#usage)
  - [FeedbackForm Component](#usage-feedbackform-component)
  - [Sending Customized Style](#usage-sending-customized-style)
  - [Sending Customized Translations](#usage-sending-customized-translations)
  - [Sending Customized Custom Icons](#usage-sending-customized-custom-icons)
  - [useSendFeedback Hook](#useSendFeedback-Hook)
  - [useSendTrackingEvent Hook](#useSendTrackingEvent-Hook)
- [Contributing to we-insights](#contributing-to-we-insights)
- [License](#license)

## we-insights-react: A Product by WeApp AB

[we-insights] is a powerful utility library designed to streamline data collection processes for WeApp employees. It simplifies the process of gathering, storing, and managing data within WeApp projects, making it an invaluable tool for enhancing efficiency and productivity.

## Installation

To install the package, use either of the following commands based on your package manager:

```sh
npm install we-insights-react-native
yarn add we-insights-react-native
```

## Usage - FeedbackForm Component

```js
import { useInitSDK } from 'we-insights-react-native'

const mySDKConfig = {
  projectId: 'REPLACE_WITH_YOUR_PROJECT_ID',
  apiKey: 'REPLACE_WITH_YOUR_API_KEY',
}
const { FeedbackForm } = useInitSDK(mySDKConfig)

const handleSend = () => {
  // This function is called when clicking on the send button
}

const handleSkip = () => {
  // This function is called when clicking on the skip button
}

;<FeedbackForm
  projectName='Your Project Name' //REQUIRED
  onSend={handleSend} //OPTIONAL
  onSkip={handleSkip} //OPTIONAL
  language={'SV' | 'EN'} //OPTIONAL - Will default to 'SV'
  email='example@example.com' //OPTIONAL - This email will be the initial value if the user allows us to get back in touch
  style={customizedStyle} //OPTIONAL - Allows you to customize all styles. See below for instructions.
  customTranslations={customTranslations} //OPTIONAL - Allows you to customize all text fields. See below for instructions.
  customIcons={customIcons} //OPTIONAL - Allows you to customize the icons of the Rating component.
/>
```

## Usage - Sending Customized Style

```js
import { Style } from 'we-insights-react-native';

const customStyles: Style = {
  backgroundColor: '#FFFFFF',
  textColor: '#FFFFFF',
  primaryFont: '#FFFFFF',
  secondaryFont: '#FFFFFF',
  validationErrorColor: '#FFFFFF',
  buttonsStyle: {
    primaryButtonBackgroundColor: '#FFFFFF',
    primaryButtonTextColor: '#FFFFFF',
    secondaryButtonBackgroundColor: '#FFFFFF',
    secondaryButtonTextColor: '#FFFFFF',
  },
  inputStyle: {
    backgroundColor: '#FFFFFF',
    textColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  checkboxStyle: {
    checkedBorderColor: '#FFFFFF',
    uncheckedBorderColor: '#FFFFFF',
    checkedBackgroundColor: '#FFFFFF',
    uncheckedBackgroundColor: '#FFFFFF',
    checkmarkColor: '#FFFFFF',
    textColor: '#FFFFFF',
  },
  ratingBoxStyle: {
    backgroundColor: '#FFFFFF',
    textColor: '#FFFFFF',
    iconTextColor: '#FFFFFF',
    fontFamily: 'Arial',
  },
}

//Assign the customStyles variable to the style prop of the Feedback component.
```

## Usage - Sending Customized Translations

```js
import { Translations } from 'we-insights-react-native';

const customTranslations: Translations = {
  title: '标题',
  description: '描述',
  feedbackQuestion: '您对我们的意见?',
  feedbackPlaceholder: '请在此处输入您的反馈...',
  emailPlaceholder: '您的邮箱@example.com',
  sendButton: '发送',
  skipButton: '跳过',
  emailError: '电子邮箱地址无效',
  satisfactionQuestion: '您对我们的服务满意吗?',
  answerFurtherQuestions: '请回答以下进一步的问题',
  ratingTranslations: {
    one: '非常不满意',
    two: '不满意',
    three: '一般',
    four: '满意',
    five: '非常满意',
  },
}

//Assign the customStyles variable to the customTranslations prop of the Feedback component.
```

## Usage - Sending Customized Custom Icons

```js
import { ReactComponent as img1 } from '/PATH/TO/FILE.svg'
import { ReactComponent as img1_selected } from "/PATH/TO/FILE.svg"
import { ReactComponent as img2 } from '/PATH/TO/FILE.svg'
import { ReactComponent as img2_selected } from "/PATH/TO/FILE.svg"
import { ReactComponent as img3 } from '/PATH/TO/FILE.svg'
import { ReactComponent as img3_selected } from "/PATH/TO/FILE.svg"
import { ReactComponent as img4 } from '/PATH/TO/FILE.svg'
import { ReactComponent as img4_selected } from "/PATH/TO/FILE.svg"
import { ReactComponent as img5 } from '/PATH/TO/FILE.svg'
import { ReactComponent as img5_selected } from "/PATH/TO/FILE.svg"
import { RatingIcon } from 'we-insights-react-native';

// NOTE: THE INTERFACE REQUIRES CUSTOM SVG FILES
//      interface RatingIcon {
//         Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//         IconSelected: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//      }

export const ratingIcons: RatingIcon[] = [
  {
    Icon: img1,
    IconSelected: img1_selected
  },
  {
    Icon: img2,
    IconSelected: img2_selected
  },
  {
    Icon: img3,
    IconSelected: img3_selected
  },
  {
    Icon: img4,
    IconSelected: img4_selected
  },
  {
    Icon: img5,
    IconSelected: img5_selected
  }
]

//Assign the ratingIcons variable to the customIcons prop of the Feedback component.
```

## Usage - useSendFeedback

```js
import { useInitSDK } from 'we-insights-react-native'

const mySDKConfig = {
  projectId: 'REPLACE_WITH_YOUR_PROJECT_ID',
  apiKey: 'REPLACE_WITH_YOUR_API_KEY',
}

const { useSendFeedback } = useInitSDK(mySDKConfig)
const { isLoading, error, sendFeedback } = useSendFeedback()

/*
      export interface FormResponse {
        rating: number;
        allowContact: boolean;
        dateOfUserCreated?: string;
        feedbackText?: string;
        email?: string;
      }
*/

const submitFeedback = async (feedback: FormResponse) => {
  const { success, message } = await sendFeedback(feedback)
  if (success) {
    console.log('Feedback submitted successfully')
  } else {
    console.error('Error submitting feedback:', message)
  }
}
```

## Usage - useSendTrackingEvent

```js
import { useInitSDK } from 'we-insights-react-native'

const mySDKConfig = {
  projectId: 'REPLACE_WITH_YOUR_PROJECT_ID',
  apiKey: 'REPLACE_WITH_YOUR_API_KEY',
}

const { useSendTrackingEvent } = useInitSDK(mySDKConfig)
const { isLoading, error, sendTrackingEvent, sendTrackingEventOnNavigate } = useSendTrackingEvent()

const trackEvent = async (eventName: string) => {
  const {success, message} = await sendTrackingEvent({ name: eventName })
  if (success) {
    console.log('Event tracked successfully')
  } else {
    console.error('Error tracking event:', message)
  }
}
```

## Contributing to we-insights

[we-insights-react-native](https://github.com/we-app/we-insights-react-native) <br/>
[we-insights-backend](https://github.com/we-app/we-insights-backend) <br/>
[we-insights-react](https://github.com/we-app/we-insights-react) <br/>
[we-insights-Android](https://github.com/we-app/mobile-insights-android) <br/>
[we-insights-iOS](https://github.com/we-app/mobile-insights-ios) <br/>

## License

MIT
