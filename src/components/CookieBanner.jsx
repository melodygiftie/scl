import { useState, useEffect } from 'react';
import '../styles/CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (type, prefs) => {
    localStorage.setItem('cookie_consent', JSON.stringify({ type, prefs, date: new Date().toISOString() }));
    setVisible(false);
  };

  const acceptAll = () => saveConsent('all', { necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent('necessary', { necessary: true, analytics: false, marketing: false });
  const saveCustom = () => saveConsent('custom', preferences);

  if (!visible) return null;

  return (
    <div className={`ck-overlay${showDetails ? ' ck-overlay--open' : ''}`}>
      <div className={`ck-banner${showDetails ? ' ck-banner--expanded' : ''}`} role="dialog" aria-modal="true" aria-label="Cookie preferences">

        {/* Top row */}
        <div className="ck-top">
          <div className="ck-brand">
            <div className="ck-brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/>
                <path d="M12 8v4l3 3"/>
                <circle cx="18.5" cy="5.5" r="2.5"/>
              </svg>
            </div>
            <div>
              <p className="ck-title">We use cookies</p>
              <p className="ck-subtitle">Surrogacy Consulting Services Ltd</p>
            </div>
          </div>
          <button className="ck-close" onClick={rejectAll} aria-label="Close and reject optional cookies">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Description */}
        <div className="ck-body">
          <p className="ck-desc">
            We use essential cookies to keep this site running, and optional cookies to understand how visitors use our site and improve your experience. Your data is handled in accordance with our Privacy Policy.
          </p>
        </div>

        {/* Expandable details */}
        {showDetails && (
          <div className="ck-details">
            <div className="ck-category">
              <div className="ck-category-info">
                <div className="ck-category-header">
                  <span className="ck-category-name">Strictly Necessary</span>
                  <span className="ck-badge ck-badge--required">Always on</span>
                </div>
                <p className="ck-category-desc">Required for the website to function. Cannot be disabled. These include session management and security features.</p>
              </div>
              <div className="ck-toggle ck-toggle--locked">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
            </div>

            <div className="ck-category">
              <div className="ck-category-info">
                <div className="ck-category-header">
                  <span className="ck-category-name">Analytics</span>
                  {preferences.analytics && <span className="ck-badge ck-badge--active">Enabled</span>}
                </div>
                <p className="ck-category-desc">Help us understand how visitors interact with our website. All data is anonymised and used solely to improve our services.</p>
              </div>
              <button
                className={`ck-toggle${preferences.analytics ? ' ck-toggle--on' : ''}`}
                onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                aria-label={`${preferences.analytics ? 'Disable' : 'Enable'} analytics cookies`}
              >
                <span className="ck-toggle-thumb" />
              </button>
            </div>

            <div className="ck-category">
              <div className="ck-category-info">
                <div className="ck-category-header">
                  <span className="ck-category-name">Marketing</span>
                  {preferences.marketing && <span className="ck-badge ck-badge--active">Enabled</span>}
                </div>
                <p className="ck-category-desc">Used to deliver relevant content and measure the effectiveness of our outreach. We do not sell your data to third parties.</p>
              </div>
              <button
                className={`ck-toggle${preferences.marketing ? ' ck-toggle--on' : ''}`}
                onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                aria-label={`${preferences.marketing ? 'Disable' : 'Enable'} marketing cookies`}
              >
                <span className="ck-toggle-thumb" />
              </button>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="ck-actions">
          <button className="ck-btn ck-btn--ghost" onClick={() => setShowDetails(s => !s)}>
            {showDetails ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
                Hide options
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
                Manage preferences
              </>
            )}
          </button>

          <div className="ck-action-btns">
            <button className="ck-btn ck-btn--outline" onClick={rejectAll}>
              Reject optional
            </button>
            {showDetails ? (
              <button className="ck-btn ck-btn--primary" onClick={saveCustom}>
                Save preferences
              </button>
            ) : (
              <button className="ck-btn ck-btn--primary" onClick={acceptAll}>
                Accept all
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}