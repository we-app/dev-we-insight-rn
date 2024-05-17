import { useState } from 'react'
import type {
  FeedbackWithMetadata,
  FormResponse,
  SDKConfig,
} from '../interfaces'

export const useSendFeedback = (configurations: SDKConfig) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const sendFeedback = async (
    feedback: FormResponse
  ): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true)
    const feedbackAndMetadata: FeedbackWithMetadata = {
      ...feedback,
      projectId: configurations.projectId,
      osName: 'TODO: add os name to feedback',
      osVersion: 'TODO: add os version to feedback',
      language: 'TODO: add language to feedback',
      appVersion: 'TODO: add app version to feedback',
      country: 'TODO: add country to feedback',
      dateOfBirth: 'TODO: add date of birth to feedback',
      phoneModel: 'TODO: add phone model to feedback',
      dateOfUserCreated: 'TODO: add date of user created to feedback',
      gender: 'TODO: add gender',
    }
    try {
      console.log(
        'TODO: Call native modules when available and pass feedbackAndMetadata',
        feedbackAndMetadata
      )
      return { success: true, message: 'Feedback sent successfully' }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to send feedback due to an unknown error'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }
  return { isLoading, error, sendFeedback }
}
