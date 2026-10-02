import type { MetadataRoute } from 'next'
import { CONTENT_UPDATED_ISO, SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

// URLs use the form the host serves (no trailing slash). Dates are real
// content dates, not build timestamps.
const LEGAL_UPDATED_ISO = '2026-04-11'
// Cookies, analytics and advertising section added with the consent banner.
const PRIVACY_UPDATED_ISO = '2026-10-02'

const pages: { path: string; updated: string }[] = [
  { path: '/', updated: CONTENT_UPDATED_ISO },
  { path: '/about', updated: CONTENT_UPDATED_ISO },
  { path: '/contact', updated: CONTENT_UPDATED_ISO },
  { path: '/services', updated: CONTENT_UPDATED_ISO },
  { path: '/director-penalty-notice', updated: CONTENT_UPDATED_ISO },
  { path: '/reduce-debt', updated: CONTENT_UPDATED_ISO },
  { path: '/restructure-your-business', updated: CONTENT_UPDATED_ISO },
  { path: '/administration-and-liquidation', updated: CONTENT_UPDATED_ISO },
  { path: '/close-company', updated: CONTENT_UPDATED_ISO },
  { path: '/services/small-business-restructure', updated: CONTENT_UPDATED_ISO },
  { path: '/services/voluntary-administration', updated: CONTENT_UPDATED_ISO },
  {
    path: '/services/creditors-voluntary-liquidation',
    updated: CONTENT_UPDATED_ISO,
  },
  { path: '/privacy-policy', updated: PRIVACY_UPDATED_ISO },
  { path: '/website-terms-conditions', updated: LEGAL_UPDATED_ISO },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, updated }) => ({
    url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: new Date(`${updated}T00:00:00+10:00`),
  }))
}
