declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>
  }
}

export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    })
  }
}
