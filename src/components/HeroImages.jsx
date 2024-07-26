import { men, women, womenfashion, menfashion } from "../assets/Hero Images";
import { StackedImages } from "./StackedImages";

export const HeroImages = () => {
  const heroImages = [
    {
      image: menfashion,
      text: "men's fashion",
      subtext: "new collection",
      path: "/men's fashion/men",
      subImage: men,
    },
    {
      image: womenfashion,
      text: "women's fashion",
      subtext: "new collection",
      path: "/women's fashion/women",
      subImage: women,
    },
  ];

  return (
    <section>
      <StackedImages heroImages={heroImages} />
    </section>
  );
};
