'use client'

import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import {
  CONSENT_OPEN_EVENT,
  readConsent,
  saveConsent,
  subscribeConsent,
  type ConsentChoice,
} from '@/lib/consent'

// The server never knows the visitor's choice, so it renders no banner.
const storedSnapshot = () => readConsent() ?? 'none'
const serverSnapshot = () => 'server'

/**
 * Analytics and advertising consent banner. Shown until the visitor chooses;
 * reopened from the footer "Privacy choices" button. Choice lives in
 * localStorage, so clearing site data also resets it.
 */
export function ConsentBanner() {
  const stored = useSyncExternalStore(
    subscribeConsent,
    storedSnapshot,
    serverSnapshot,
  )
  const [reopened, setReopened] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const opener = useRef<HTMLElement | null>(null)
  const firstButton = useRef<HTMLButtonElement | null>(null)
  const headingId = useId()
  const bodyId = useId()
  const open = stored === 'none' || reopened

  useEffect(() => {
    const reopen = (e: Event) => {
      opener.current = (e as CustomEvent<HTMLElement | null>).detail ?? null
      setReopened(true)
    }
    window.addEventListener(CONSENT_OPEN_EVENT, reopen)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen)
  }, [])

  useEffect(() => {
    // Only move focus when the visitor asked for the banner, never on page load.
    if (open && opener.current) firstButton.current?.focus()
  }, [open])

  function choose(choice: ConsentChoice) {
    saveConsent(choice)
    setAnnouncement(
      choice === 'granted'
        ? 'Analytics cookies accepted.'
        : 'Analytics cookies declined.',
    )
    setReopened(false)
    opener.current?.focus()
    opener.current = null
  }

  return (
    <>
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
      {open && (
        <section
          className="afa-consent"
          aria-labelledby={headingId}
          aria-describedby={bodyId}
        >
          <div className="afa-consent-inner">
            <div>
              <h2 id={headingId} className="afa-consent-title">
                Your privacy choices
              </h2>
              <p id={bodyId} className="afa-consent-body">
                We would like to use cookies to measure how this site is used
                and how our advertising performs. They stay off unless you
                accept. You can change your choice at any time from Privacy
                choices in the footer. See our{' '}
                <a href="/privacy-policy" className="afa-inline-link-light">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="afa-consent-actions">
              <button
                ref={firstButton}
                type="button"
                className="afa-consent-btn afa-consent-accept"
                onClick={() => choose('granted')}
              >
                Accept analytics
              </button>
              <button
                type="button"
                className="afa-consent-btn afa-consent-decline"
                onClick={() => choose('denied')}
              >
                Decline
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

/** Footer control that reopens the consent banner. */
export function ConsentSettingsButton() {
  return (
    <button
      type="button"
      className="afa-footer-link afa-footer-legal-link afa-consent-reopen"
      onClick={(e) =>
        window.dispatchEvent(
          new CustomEvent(CONSENT_OPEN_EVENT, { detail: e.currentTarget }),
        )
      }
    >
      Privacy choices
    </button>
  )
}
