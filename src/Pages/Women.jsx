import { womenfashion, newHandbags } from "../assets/Hero Images";
import { HeroDresses } from "../assets/hero-slider";
import { NikeAirForce1Shadow } from "../assets/women's shoes";
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
      image: NikeAirForce1Shadow,
      text: "women's shoes",
      subtext: "",
      path: "/women's shoes/women",
    },
  ];

  return (
    <section className="max-sm:mt-[80px] sm:mt-[145px]">
      <StackedImages heroImages={heroImages} />
    </section>
  );
};
