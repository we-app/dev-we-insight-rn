import { useState } from "react"
import type { SDKConfig, TrackEvent } from "../interfaces"

export const useSendTrackingEvent = (configurations: SDKConfig) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const sendTrackingEvent = async (event: Pick<TrackEvent, 'name'>): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true)
    const trackEvent: TrackEvent = {
      name: event.name,
      tag: 'TODO: add tag to track event',
      osName: 'TODO: add os name to track event',
      language: 'TODO: add language to track event',
      appVersion: 'TODO: add app version to track event',
      projectId: configurations.projectId,
    }

    try {
      console.log('TODO: Call native modules when available and pass feedbackAndMetadata', trackEvent)
      return { success: true, message: 'sendTrackingEvent sent successfully' }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to send tracking event due to an unknown error'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }

  const sendTrackingEventOnNavigate = async (screenName: string) => {
    await sendTrackingEvent({ name: `NAVIGATED_TO_${screenName}` })
  }

  return { isLoading, error, sendTrackingEvent, sendTrackingEventOnNavigate }

}
