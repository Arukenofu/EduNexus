export interface Toast {
  type: 'error' | 'notification',
  message: Error | string
}