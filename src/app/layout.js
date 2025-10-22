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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId="GTM-TLVPQ9VN" />
      <body className={styles.body}>
        <Aside />
        <main className={styles.main}>
          {children}
          <Footer />
          <ScrollToTop />
        </main>
      </body>
    </html>
  )
}