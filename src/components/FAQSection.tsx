'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is the difference between voluntary administration and liquidation?',
    answer:
      'Voluntary administration is a process where an independent administrator takes control of a financially distressed company to assess its options, which may include restructuring. Liquidation is the process of winding up a company and distributing its assets to creditors. The key difference is that administration may save the business, while liquidation ends it.',
  },
  {
    question: 'How do I know if my business needs restructuring?',
    answer:
      "Signs include persistent cash flow problems, inability to pay debts when due, creditor pressure, declining revenue, and difficulty meeting payroll. If you're using personal funds to cover business expenses or avoiding creditor calls, it's time to seek advice.",
  },
  {
    question: "What are director's duties during financial difficulty?",
    answer:
      'Directors must avoid insolvent trading, act in the best interests of creditors once insolvency is suspected, maintain proper books and records, and seek professional advice. Failing these duties can result in personal liability.',
  },
  {
    question: 'How long does a typical restructuring process take?',
    answer:
      'Timelines vary depending on complexity. A small business restructuring plan can be completed in as little as 20 business days. More complex restructuring may take several months. We provide clear timelines at the outset of every engagement.',
  },
  {
    question: 'What costs are involved in business restructuring?',
    answer:
      "Australian Financial Advisory operates on fixed-fee arrangements, so you know exactly what you're paying upfront. Costs depend on the complexity of your situation and the services required.",
  },
  {
    question: 'Can employees be retained during restructuring?',
    answer:
      'Yes, in many cases employees can be retained during restructuring. This depends on the restructuring approach chosen and the financial position of the business.',
  },
  {
    question: 'What happens to company assets during administration?',
    answer:
      'During voluntary administration, an administrator takes control and assesses all assets. Assets may be sold to pay creditors or preserved if the business continues operating.',
  },
  {
    question: 'How do I communicate with creditors during financial difficulty?',
    answer:
      'Open and transparent communication is important. We can help you develop a creditor communication strategy and negotiate on your behalf to reach workable arrangements.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 32px' }}>
        <h2
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: '#383838',
            margin: '0 0 16px 0',
          }}
        >
          Frequently{' '}
          <span style={{ color: '#5ACBBD' }}>Asked Questions</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: '#666',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Find answers to common questions about business restructuring, insolvency, and corporate
          advisory services.
        </p>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.7fr 1fr',
          gap: 48,
          alignItems: 'start',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#E0F5F2',
                  borderRadius: 10,
                  marginBottom: 12,
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '18px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 500, color: '#383838' }}>
                    {item.question}
                  </span>
                  <span
                    style={{
                      fontSize: 20,
                      color: '#0C9488',
                      fontWeight: 400,
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: '0 20px 18px',
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions card */}
        <div
          style={{
            backgroundColor: '#FFF4EF',
            borderRadius: 16,
            padding: '40px 32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <h3 style={{ fontSize: 22, fontWeight: 700, color: '#383838', margin: 0 }}>
            Still Have Questions?
          </h3>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6, margin: 0 }}>
            Our expert team is here to help. Get personalised advice for your specific situation.
          </p>
          <a
            href="#contact"
            style={{
              backgroundColor: '#0C9488',
              color: '#FFFFFF',
              borderRadius: 50,
              padding: '12px 24px',
              fontSize: 15,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
