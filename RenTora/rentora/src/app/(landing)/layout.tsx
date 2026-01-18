import Header from '@/components/landingPage/header/Header'
import Footer from '@/components/landingPage/footer/Footer'
import ContactDrawer from '@/components/landingPage/contact/ContactDrawer'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <ContactDrawer />
      <Footer />
    </>
  )
}
