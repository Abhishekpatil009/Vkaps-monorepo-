import HeroSection from '@/components/landingPage/hero/HeroSection'
import CategoryCarousel from '@/components/landingPage/categories/CategoryCarousel'
import FeaturedSection from '@/components/landingPage/featured/FeaturedSection.server'
import HowItWorks from '@/components/landingPage/how-it-works/HowItWorks'
import LandingCTA from '@/components/landingPage/cta/LandingPage'

export default function Page() {
  return (
    <>
      <HeroSection />
      <CategoryCarousel />
      <FeaturedSection />
      <HowItWorks />
      <LandingCTA />
    </>
  )
}
