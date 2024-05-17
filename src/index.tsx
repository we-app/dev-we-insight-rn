import { useInitSDK } from './hooks/useInitSDK'
import type { IconItem, Style, Translations } from './interfaces'

export function test(a: string): Promise<string> {
  return Promise.resolve('we-use-insights package is working properly' + a)
}

export { useInitSDK }
export type { Translations, Style, IconItem }
