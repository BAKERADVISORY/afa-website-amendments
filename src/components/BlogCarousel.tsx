'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const posts = [
  { title: 'Reduce company debt NSW with expert business advice', img: '/images/blog/reduce-company-debt-nsw.webp', href: '/reduce-company-debt-nsw/' },
  { title: 'Closing a business with debt Australia — What directors need to know', img: '/images/blog/closing-business-with-debt.webp', href: '/closing-a-business-with-debt-australia/' },
  { title: 'How to restructure a small business Australia with expert guidance', img: '/images/blog/how-to-restructure.webp', href: '/how-to-restructure-a-small-business-australia/' },
  { title: 'How to fix business cash flow problems Australia', img: '/images/blog/fix-cash-flow.webp', href: '/how-to-fix-business-cash-flow-problems-australia/' },
  { title: 'Company bankruptcy vs liquidation Australia — What directors need to know', img: '/images/blog/bankruptcy-vs-liquidation.webp', href: '/company-bankruptcy-vs-liquidation-australia/' },
]

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCount = 3
  const maxIndex = posts.length - visibleCount

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const visiblePosts = posts.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: '#383838', textAlign: 'center', marginBottom: 48, margin: '0 0 48px' }}>
          Latest from our <span style={{ color: '#5ACBBD' }}>Blog</span>
        </h2>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Prev button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              opacity: currentIndex === 0 ? 0.4 : 1,
            }}
            aria-label="Previous"
          >
            <ChevronLeft color="#383838" size={20} />
          </button>

          {/* Cards grid */}
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
            className="blog-carousel-grid"
          >
            {visiblePosts.map((post) => (
              <a
                key={post.href}
                href={post.href}
                style={{
                  display: 'block',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
                }}
              >
                <img
                  src={post.img}
                  alt={post.title}
                  style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#383838',
                    lineHeight: 1.4,
                    padding: 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.title}
                </div>
              </a>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              opacity: currentIndex >= maxIndex ? 0.4 : 1,
            }}
            aria-label="Next"
          >
            <ChevronRight color="#383838" size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .blog-carousel-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
