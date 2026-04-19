'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Joel A',
    text: "From the very first conversation I had with the team, I knew they were different. Genuine, transparent, and incredibly grounded — they didn't speak like someone just doing a job, and I never once felt like just another number. I've been burnt before, so I was cautious.",
  },
  {
    name: 'Daniel C',
    text: 'Working with Australian Financial Advisory was one of the best decisions we made for our company. They quickly identified the core issues and put together a clear strategy that helped us stabilise and plan forward with confidence.',
  },
  {
    name: 'Samantha R',
    text: 'The team at Australian Financial Advisory provided exceptional guidance when our business needed it most. They were professional, empathetic, and incredibly knowledgeable. I would recommend them to any business owner facing financial challenges.',
  },
  {
    name: 'Michael T',
    text: 'Australian Financial Advisory helped us navigate a very challenging period with clarity and confidence. Their advice was timely, practical, and exactly what we needed to make informed decisions about our business.',
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = reviews[activeIndex];

  return (
    <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
      <div
        style={{
          display: 'flex',
          gap: 64,
          alignItems: 'center',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
        className="testimonials-grid"
      >
        {/* Left col */}
        <div style={{ width: '40%', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} fill="#ffffff" color="#ffffff" />
            ))}
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 16, marginTop: 0 }}>
            Rated 5 out of 5
          </p>
          <h2
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            Trusted by businesses across Australia.
          </h2>
        </div>

        {/* Right col */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 32,
              position: 'relative',
              borderTop: '4px solid #333333',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 20,
                left: 24,
                fontSize: 80,
                color: 'rgba(0,0,0,0.08)',
                fontFamily: 'serif',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              &ldquo;
            </span>
            <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, paddingTop: 32, margin: 0 }}>
              {current.text}
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#333333',
                marginTop: 16,
                textAlign: 'center',
                marginBottom: 0,
              }}
            >
              {current.name}
            </p>
          </div>

          {/* Dot navigation */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 24 }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: i === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .testimonials-grid {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .testimonials-grid > div:first-child {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
