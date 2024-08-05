import { HeroImages } from "../components/HeroImages";
import { HeroSlider } from "../components/HeroSlider";
import { NewArrivals } from "../components/NewArrivals";
import { HeroDresses, HeroSuite, HeroKnits } from "../assets/hero-slider";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const HeroData = [
    {
      image: HeroDresses,
      text: "women's dresses",
      path: "/dresses/women",
    },
    {
      image: HeroKnits,
      text: "men's knitwear",
      path: "/knitwear/men",
    },
    {
      image: HeroSuite,
      text: "men's suits",
      path: "/suits/men",
    },
  ];
  return (
    <section className="">
      <HeroSlider HeroData={HeroData} />
      <NewArrivals />
      <HeroImages />
    </section>
  );
};
