'use client';

import { I18nextProvider } from 'react-i18next';
import { useEffect, useState } from 'react';
import createI18nInstance from '../lib/i18n';
import type { i18n as I18nType } from 'i18next';

export default function ClientI18nProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [i18n, setI18n] = useState<I18nType | null>(null);

  useEffect(() => {
    const instance = createI18nInstance();
    setI18n(instance);
  }, []);

  if (!i18n) {
    return <>{children}</>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}