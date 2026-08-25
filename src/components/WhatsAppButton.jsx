'use client';

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '8801793679254';
  const defaultMessage = encodeURIComponent('Hello Bengal-IT, I would like to inquire about your services.');
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${defaultMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      type="button"
      aria-label="Contact Bengal-IT on WhatsApp"
      className="whatsapp-float-btn"
    >
      {/* Official WhatsApp Icon */}
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.812.827 5.433 2.25 7.632L2.5 29.5l6.06-1.688A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.845-1.594l-.419-.249-4.341 1.21 1.161-4.17-.274-.437A11.44 11.44 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.31-8.528c-.346-.174-2.046-1.01-2.363-1.125-.317-.116-.548-.174-.779.174-.231.347-.895 1.125-1.097 1.356-.202.231-.404.26-.75.087-.346-.174-1.461-.538-2.783-1.717-1.028-.918-1.723-2.052-1.925-2.398-.202-.347-.021-.534.152-.707.156-.155.346-.404.519-.606.173-.202.231-.347.346-.578.116-.231.058-.433-.029-.606-.087-.174-.779-1.876-1.067-2.569-.281-.676-.567-.584-.779-.595-.202-.01-.433-.012-.664-.012-.231 0-.606.087-.923.433-.317.347-1.212 1.183-1.212 2.887 0 1.704 1.241 3.35 1.414 3.581.173.231 2.443 3.73 5.918 5.231.826.357 1.472.571 1.975.73.83.264 1.585.227 2.182.138.666-.099 2.046-.837 2.334-1.646.288-.809.288-1.501.202-1.646-.086-.145-.317-.231-.663-.405z" fill="white" />
      </svg>

      {/* Hover Tooltip */}
      <span className="whatsapp-float-tooltip">
        Bengal-IT
      </span>
    </button>
  );
}
