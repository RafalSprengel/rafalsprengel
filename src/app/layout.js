export const metadata = {
  title: {
    default: 'Rafał Sprengel | Fullstack Web Developer',
    template: '%s | Rafał Sprengel'
  },
  description: 'I create modern, responsive websites and web applications for businesses. Specializing in React.js, Next.js, Node.js, and MongoDB — from idea to production.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  }
}
import './globals.css';
import './overrides.css'
import styles from './layout.module.css';
import Aside from '../components/Aside/Aside';
import Footer from '../components/Footer/Footer';
import { GoogleTagManager } from '@next/third-parties/google'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import Script from 'next/script';
import CookieConsent from '../components/CookieConsent/CookieConsent';
import LangButton from '@/components/LangButton/LangButton';

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const currentLocale = cookieStore.get('locale')?.value || 'en';
  return (
    <html lang={currentLocale}>
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied', // Wymagane przez v2
              'ad_personalization': 'denied' // Wymagane przez v2
            });
          `}
        </Script>
        <GoogleTagManager gtmId="GTM-TLVPQ9VN" />
      </head>
      <body className={styles.body}>
        <NextIntlClientProvider>
          <CookieConsent />
          <Aside />
          <main className={styles.main}>
            <div className={styles.langButtWrap}>
              <LangButton currentLocale={currentLocale}/>
            </div>
            {children}
            <Footer />
            <ScrollToTop />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}