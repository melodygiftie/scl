import { useState } from 'react';

export default function WhatsAppButton() {
  const phone = '+2348184323182'; // ← Replace with your WhatsApp number
  const greeting = 'Hello, I would like to know more about your surrogacy services.';
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');

  function openWhatsApp() {
    const text = encodeURIComponent(msg || greeting);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
          70%  { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @keyframes waPopIn {
          0%   { transform: scale(0.7); opacity: 0; }
          70%  { transform: scale(1.04); }
          100% { transform: scale(1); opacity: 1; }
        }
        #wa-float-btn {
          animation: waPulse 2.2s ease-out infinite;
        }
        #wa-float-btn:hover {
          animation: none;
          transform: scale(1.08);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
        }
        #wa-popup-box {
          animation: waPopIn 0.25s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        #wa-msg-input:focus {
          border-color: #25D366;
        }
      `}</style>

      {open && (
        <div id="wa-popup-box" style={popupStyle}>
          <div style={headStyle}>
            <div style={avatarStyle}>S</div>
            <div>
              <p style={{ color: '#fff', fontWeight: 600, margin: 0, fontSize: 14 }}>Support Team</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, margin: 0 }}>Typically replies in minutes</p>
            </div>
          </div>
          <div style={{ padding: 14, background: '#ECE5DD' }}>
            <div style={bubbleStyle}>
              👋 Hi there! How can we help you today?
              <div style={{ fontSize: 11, color: '#999', textAlign: 'right', marginTop: 4 }}>Just now</div>
            </div>
          </div>
          <div style={footerStyle}>
            <input
              id="wa-msg-input"
              style={inputStyle}
              placeholder="Type a message…"
              value={msg}
              onChange={e => setMsg(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && openWhatsApp()}
            />
            <button style={sendStyle} onClick={openWhatsApp} aria-label="Send message">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button id="wa-float-btn" style={btnStyle} onClick={() => setOpen(!open)} aria-label="Chat on WhatsApp">
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.847L0 24l6.345-1.498A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.376l-.36-.213-3.767.889.935-3.669-.234-.376A9.818 9.818 0 1112 21.818z" />
          </svg>
        )}
      </button>
    </>
  );
}

const btnStyle = {
  position: 'fixed', bottom: 24, right: 24,
  width: 56, height: 56, borderRadius: '50%',
  background: '#25D366', border: 'none', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  zIndex: 9999,
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const popupStyle = {
  position: 'fixed', bottom: 92, right: 24,
  width: 280, background: '#fff',
  borderRadius: 16, overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
  zIndex: 9999,
};

const headStyle = {
  background: '#075E54', padding: 16,
  display: 'flex', alignItems: 'center', gap: 10,
};

const avatarStyle = {
  width: 42, height: 42, borderRadius: '50%',
  background: '#128C7E', display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  fontWeight: 600, fontSize: 16, color: '#fff', flexShrink: 0,
};

const bubbleStyle = {
  background: '#fff', borderRadius: '0 10px 10px 10px',
  padding: '10px 12px', fontSize: 13, color: '#333', lineHeight: 1.5,
  boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
};

const footerStyle = {
  padding: '10px 12px', display: 'flex',
  gap: 8, alignItems: 'center', background: '#fff',
};

const inputStyle = {
  flex: 1, border: '1px solid #ddd',
  borderRadius: 20, padding: '8px 12px',
  fontSize: 13, outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.2s',
};

const sendStyle = {
  width: 36, height: 36, borderRadius: '50%',
  background: '#25D366', border: 'none',
  cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
};