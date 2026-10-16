import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { AiActFeature } from "@/components/sections/AiActFeature";
import { FocusList } from "@/components/sections/FocusList";
import { FormacionesCarousel } from "@/components/sections/FormacionesCarousel";
import { Methodology } from "@/components/sections/Methodology";
import { Consulting } from "@/components/sections/Consulting";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <AiActFeature />
      <FocusList />
      <FormacionesCarousel />
      <Methodology />
      <Consulting />
      <Testimonials />
      <Pricing />
      <Faq />
      <Team />
    </>
  );
}
