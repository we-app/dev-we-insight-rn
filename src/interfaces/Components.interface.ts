export type FormResponse = {
  rating: number;
  allowContact: boolean;
  dateOfUserCreated?: string;
  feedbackText?: string;
  email?: string;
};

export type IconItem = {
  Icon: React.ElementType;
  IconSelected: React.ElementType;
};

export type FeedbackMetadata = {
  projectId: string;
  osName: string;
  osVersion: string;
  language: string;
  appVersion: string;
  country: string;
  dateOfBirth: string;
  phoneModel: string;
  gender: string;
};

export type FeedbackWithMetadata = FormResponse & FeedbackMetadata;

export type SDKConfig = {
  projectId: string;
  apiKey: string;
};

export type TrackEvent = {
  name: string;
  tag: string;
  osName: string;
  language: string;
  appVersion: string;
  projectId: string;
  description?: string | null;
};
