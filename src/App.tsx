import { lazy } from "react"
const Navbar = lazy(() => import("./sections/Navbar"));
const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutUs = lazy(() => import("./sections/About-us"));
const FoodGallery = lazy(() => import("./sections/FoodGallery"));
const Discover = lazy(() => import("./sections/Discover"));
const Newsletter = lazy(() => import("./sections/Newsletter"));
const Footer = lazy(() => import("./sections/Footer"));
import { LazyMotion, domAnimation } from "framer-motion";
function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <FoodGallery />
        <Discover />
        <Newsletter />
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
