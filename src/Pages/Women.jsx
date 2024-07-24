import { womenfashion, newHandbags } from "../assets/Hero Images";
import { HeroDresses, shoe } from "../assets/hero-slider";
import { StackedImages } from "../components/StackedImages";
export const Women = () => {
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
      image: womenfashion,
      text: "women's fashion",
      subtext: "new collection",
      path: "/women's fashion/women",
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
      <StackedImages heroImages={heroImages} />
    </section>
  );
};
