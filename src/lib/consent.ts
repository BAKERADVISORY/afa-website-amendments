// Google Consent Mode v2 helpers. Analytics and advertising storage stay denied
// until the visitor accepts in the consent banner.

export const CONSENT_STORAGE_KEY = 'afa-consent-v1'
export const CONSENT_OPEN_EVENT = 'afa:open-consent'
const CONSENT_CHANGE_EVENT = 'afa:consent-change'

// Fallback for this page view when localStorage is blocked.
let sessionChoice: ConsentChoice | null = null

export type ConsentChoice = 'granted' | 'denied'

const SIGNALS = [
  'analytics_storage',
  'ad_storage',
  'ad_user_data',
  'ad_personalization',
] as const

/**
 * Inline script that must run before GTM and gtag load. It sets every signal to
 * denied, then re-applies a stored "granted" choice for returning visitors so
 * their first page view is measured under the choice they already made.
 */
export const CONSENT_DEFAULT_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{${SIGNALS.map((s) => `${s}:'denied'`).join(',')},wait_for_update:500});gtag('set','ads_data_redaction',true);try{if(localStorage.getItem('${CONSENT_STORAGE_KEY}')==='granted'){gtag('consent','update',{${SIGNALS.map((s) => `${s}:'granted'`).join(',')}});}}catch(e){}`

type Gtag = (...args: unknown[]) => void

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (value === 'granted' || value === 'denied') return value
  } catch {
    // Storage blocked: fall through to the in-memory choice.
  }
  return sessionChoice
}

/** Subscribe to consent changes from this tab or another tab (for useSyncExternalStore). */
export function subscribeConsent(onChange: () => void) {
  window.addEventListener('storage', onChange)
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange)
  }
}

/** Analytics and advertising cookies set by Google tags on this site. */
function clearGoogleCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((n) => /^(_ga|_gid|_gat|_gcl)/.test(n))
  const host = window.location.hostname
  const domains = ['', host, `.${host.replace(/^www\./, '')}`]
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

export function saveConsent(choice: ConsentChoice) {
  sessionChoice = choice
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: Gtag }
  w.dataLayer = w.dataLayer || []
  const gtag: Gtag =
    w.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments)
    }
  gtag(
    'consent',
    'update',
    Object.fromEntries(SIGNALS.map((s) => [s, choice])),
  )
  w.dataLayer.push({ event: 'afa_consent_update', afa_consent: choice })
  if (choice === 'denied') clearGoogleCookies()
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT))
}
