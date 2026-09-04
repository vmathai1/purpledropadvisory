import { useEffect } from 'react';

const DOCS = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: January 1, 2025',
    intro:
      'PurpleDrop LLC ("PurpleDrop," "we," "us," or "our") provides software and technology consulting services. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit purpledropconsulting.com, contact us, or engage us for consulting services.',
    sections: [
      {
        h: '1. Information We Collect',
        p: [
          'Information you provide: name, email address, company, role, and any details you include when you submit a form, request a proposal, or correspond with us.',
          'Information collected automatically: IP address, browser type, device information, referring pages, and usage data gathered through cookies and similar technologies.',
          'Engagement information: project materials, documents, and account or system data you share with us so we can deliver consulting services.',
        ],
      },
      {
        h: '2. How We Use Information',
        p: [
          'We use information to respond to inquiries, prepare proposals, deliver and support consulting engagements, send administrative and (where permitted) marketing communications, improve our website and services, and comply with legal obligations.',
        ],
      },
      {
        h: '3. Cookies and Analytics',
        p: [
          'We use essential cookies to operate the site and analytics cookies to understand traffic and improve content. You can control cookies through your browser settings; disabling some cookies may affect site functionality.',
        ],
      },
      {
        h: '4. How We Share Information',
        p: [
          'We share information with service providers who process it on our behalf (such as hosting, email, and analytics providers), with professional advisors, and where required by law or to protect our rights. We may also transfer information in connection with a merger, acquisition, or sale of assets. We do not sell personal information.',
        ],
      },
      {
        h: '5. Data Retention',
        p: [
          'We retain information for as long as needed to fulfill the purposes described in this policy, to maintain business records, and to comply with legal, tax, and accounting requirements, after which it is deleted or anonymized.',
        ],
      },
      {
        h: '6. Data Security',
        p: [
          'We maintain administrative, technical, and physical safeguards designed to protect information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        h: '7. Your Rights',
        p: [
          'Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal information, or to object to certain processing. To exercise these rights, contact us using the details below.',
        ],
      },
      {
        h: '8. International Transfers',
        p: [
          'We are based in the United States and may process information in countries that have different data protection laws than your jurisdiction. Where required, we use appropriate safeguards for such transfers.',
        ],
      },
      {
        h: "9. Children's Privacy",
        p: [
          'Our website and services are intended for businesses and are not directed to children under 16. We do not knowingly collect personal information from children.',
        ],
      },
      {
        h: '10. Changes to This Policy',
        p: [
          'We may update this Privacy Policy from time to time. Material changes will be reflected by updating the "Last updated" date, and where appropriate we will provide additional notice.',
        ],
      },
      {
        h: '11. Contact Us',
        p: [
          'Questions about this policy or our data practices can be sent to hello@purpledrop.co.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: 'Last updated: January 1, 2025',
    intro:
      'These Terms of Service ("Terms") govern your access to and use of the website and the software and technology consulting services provided by PurpleDrop LLC ("PurpleDrop," "we," "us," or "our"). By using our website or engaging our services, you agree to these Terms.',
    sections: [
      {
        h: '1. Services',
        p: [
          'PurpleDrop provides advisory, implementation, and related software and technology consulting services. The specific scope, deliverables, timeline, and fees for any engagement will be described in a separate proposal, statement of work, or order form ("SOW") that references these Terms.',
        ],
      },
      {
        h: '2. Engagements and Changes',
        p: [
          'Each SOW forms a separate agreement incorporating these Terms. If there is a conflict, the SOW controls for that engagement. Changes to scope must be agreed in writing and may affect fees and schedule.',
        ],
      },
      {
        h: '3. Fees and Payment',
        p: [
          'Fees are stated in the applicable SOW. Unless otherwise specified, invoices are due within 30 days of the invoice date. Late amounts may accrue interest at 1.5% per month or the maximum permitted by law. Fees are exclusive of applicable taxes.',
        ],
      },
      {
        h: '4. Client Responsibilities',
        p: [
          'You agree to provide timely access to personnel, systems, information, and decisions reasonably required for the engagement. Delays or inaccuracies in client-provided materials may affect our ability to meet estimates and deliverables.',
        ],
      },
      {
        h: '5. Intellectual Property',
        p: [
          'Deliverables prepared specifically for you under an SOW become your property upon full payment, excluding our pre-existing materials, tools, methodologies, and know-how ("PurpleDrop Materials"), which remain our property. We grant you a non-exclusive, perpetual license to use PurpleDrop Materials solely as incorporated into the deliverables.',
        ],
      },
      {
        h: '6. Confidentiality',
        p: [
          'Each party will protect the other party’s confidential information with at least reasonable care and use it only to perform under the engagement. This obligation does not apply to information that is public, independently developed, or rightfully received from a third party.',
        ],
      },
      {
        h: '7. Warranties and Disclaimer',
        p: [
          'We will perform services in a professional and workmanlike manner consistent with generally accepted industry standards. Except as expressly stated, the website and services are provided "as is," and we disclaim all other warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
        ],
      },
      {
        h: '8. Limitation of Liability',
        p: [
          'To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, consequential, or punitive damages, or lost profits or revenue. Each party’s total liability arising out of an engagement will not exceed the fees paid or payable for that engagement in the 12 months preceding the claim.',
        ],
      },
      {
        h: '9. Indemnification',
        p: [
          'Each party will defend and indemnify the other against third-party claims arising from its breach of these Terms, its violation of law, or its infringement of a third party’s intellectual property rights, subject to prompt notice and reasonable cooperation.',
        ],
      },
      {
        h: '10. Term and Termination',
        p: [
          'Either party may terminate an engagement for material breach that remains uncured 30 days after written notice. Upon termination, you will pay for services performed and expenses incurred through the termination date.',
        ],
      },
      {
        h: '11. Governing Law',
        p: [
          'These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws rules. The parties consent to the exclusive jurisdiction of the state and federal courts located in Delaware.',
        ],
      },
      {
        h: '12. Changes to These Terms',
        p: [
          'We may update these Terms from time to time. Continued use of the website after changes take effect constitutes acceptance of the revised Terms. Terms applicable to an active engagement will not change without written agreement.',
        ],
      },
      {
        h: '13. Contact Us',
        p: ['Questions about these Terms can be sent to hello@purpledrop.co.'],
      },
    ],
  },
};

export default function LegalModal({ doc, onClose }) {
  useEffect(() => {
    if (!doc) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [doc, onClose]);

  if (!doc) return null;

  const content = DOCS[doc];
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-[720px] max-h-[85vh] bg-white rounded-2xl shadow-[0_20px_60px_rgba(13,0,34,0.25)] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 lg:px-8 py-5 border-b border-[#f0e7ff]">
          <div className="flex flex-col gap-1">
            <h2 id="legal-modal-title" className="font-bold text-[22px] text-[#0d0022]">
              {content.title}
            </h2>
            <p className="text-[13px] text-[#8b8199]">{content.updated}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 flex items-center justify-center size-9 rounded-full text-[#665b7d] transition-colors hover:bg-[#f7f4fd] hover:text-[#0d0022]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto px-6 lg:px-8 py-6">
          <p className="text-[14px] leading-6 text-[#665b7d]">{content.intro}</p>
          {content.sections.map((section) => (
            <div key={section.h} className="flex flex-col gap-2">
              <h3 className="font-semibold text-[16px] text-[#0d0022]">{section.h}</h3>
              {section.p.map((para) => (
                <p key={para} className="text-[14px] leading-6 text-[#665b7d]">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-[#f0e7ff] px-6 lg:px-8 py-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[#7c2dfe] px-6 py-2.5 text-[14px] font-semibold text-white transition duration-200 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
