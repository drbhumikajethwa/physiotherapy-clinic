import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import ConditionsTreated from "@/components/home/ConditionsTreated";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LocationSection from "@/components/home/LocationSection";
import ContactCta from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ConditionsTreated />
      <WhyChooseUs />
      <Testimonials />
      <LocationSection />
      <ContactCta />
    </>
  );
}
