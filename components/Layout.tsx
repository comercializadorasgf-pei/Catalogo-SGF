import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  pageNumber?: number;
  footerText?: string;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  pageNumber, 
  footerText = 'Comercializadora S.G.F',
  className = ''
}) => {
  return (
    <div className={`page ${className}`}>
      {/* Accent Bar */}
      <div className="accent-bar" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col relative z-10">
        {children}
      </div>

      {/* Footer */}
      {pageNumber && (
        <div className="footer-page">
          <span>{pageNumber === 1 ? 'Catálogo Digital Corporativo' : `Página ${pageNumber}`}</span>
          <span>{footerText}</span>
        </div>
      )}
    </div>
  );
};
