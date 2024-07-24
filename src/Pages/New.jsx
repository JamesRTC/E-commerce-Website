import { newHandbags } from "../assets/Hero Images";
import { newWomen, newMen, HeroDresses, shoe } from "../assets/hero-slider";
import { HeroSlider } from "../components/HeroSlider";
import { StackedImages } from "../components/StackedImages";

export const New = () => {
  const HeroData = [
    { image: newMen, text: "Men's Fashion", path: "/men's fashion/men" },
    {
      image: newWomen,
      text: "women's fashion",
      path: "/women's fashion/women",
    },
  ];

  const heroImages = [
    {
      image: HeroDresses,
      text: "women's dresses",
      subtext: "",
      path: "/dresses/women",
    },
    {
      image: newHandbags,
      text: "handbags",
      subtext: "",
      path: "/handbags/women",
    },
    {
      image: shoe,
      text: "women's shoes",
      subtext: "",
      path: "/shoes/women",
    },
  ];

  return (
    <section>
      <HeroSlider HeroData={HeroData} />
      <StackedImages heroImages={heroImages} />
    </section>
  );
};
