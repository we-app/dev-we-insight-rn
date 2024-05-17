import React from 'react'
import type { SDKConfig } from '../interfaces'
import { FeedbackForm as OriginalFeedbackForm, type FeedbackFormProps } from '../components/FeedbackForm'
import { useSendTrackingEvent as originalUseSendTrackingEvent } from './useSendTrackingEvent'
import { useSendFeedback as originalUseSendFeedback } from './useSendFeedback'

export const useInitSDK = (configurations: SDKConfig) => {
  const useSendTrackingEvent = () => originalUseSendTrackingEvent(configurations)
  const useSendFeedback = () => originalUseSendFeedback(configurations)
  const FeedbackForm: React.FC<Omit<FeedbackFormProps, 'SDKConfig'>> = props => {
    return <OriginalFeedbackForm {...props} SDKConfig={configurations} />
  }
  
  return {
    useSendTrackingEvent,
    useSendFeedback,
    FeedbackForm,
  }
}
