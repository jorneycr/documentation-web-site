import * as React from 'react';
import NextLink from 'next/link';
import cn from 'classnames';
import {ExternalLink} from 'components/ExternalLink';

export function Footer() {
  return (
    
    <footer className={cn('text-secondary dark:text-secondary-dark ')}>
      
      <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-8 max-w-7xl mx-auto">
        <div className="flex flex-col">          
            &copy;{new Date().getFullYear()}
        </div>
        {/* 
          ABC: Usar como ejemplo
        
        <div className="flex flex-col">
          <FooterLink href="/learn">
            Learn React
          </FooterLink>
        </div>
        <div className="flex flex-col">
          <FooterLink href="/reference/react">React APIs</FooterLink>
        </div> */}
        <div className="flex flex-col">
          <FooterLink href="/learn">
            PROYECTO1
          </FooterLink>
        </div>
        <div className="flex flex-col">
          <FooterLink href="/reference/react">PROYECTO2</FooterLink>
        </div>
      </div>
      
    </footer>
  );
}

function FooterLink({
  href,
  children,
  isHeader = false,
}: {
  href?: string;
  children: React.ReactNode;
  isHeader?: boolean;
}) {
  const classes = cn('border-b inline-block border-transparent', {
    'text-sm text-primary dark:text-primary-dark': !isHeader,
    'text-md text-secondary dark:text-secondary-dark my-2 font-bold': isHeader,
    'hover:border-gray-10': href,
  });

  if (!href) {
    return <div className={classes}>{children}</div>;
  }

  if (href.startsWith('https://')) {
    return (
      <div>
        <ExternalLink href={href} className={classes}>
          {children}
        </ExternalLink>
      </div>
    );
  }

  return (
    <div>
      <NextLink href={href} className={classes}>
        {children}
      </NextLink>
    </div>
  );
}
