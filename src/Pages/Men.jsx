// import { Link, useNavigate } from "react-router-dom";
import { menfashion } from "../assets/Hero Images";
import { HeroSuite, HeroKnits, shoe } from "../assets/hero-slider";
import { StackedImages } from "../components/StackedImages";
export const Men = () => {
  const heroImages = [
    {
      image: HeroSuite,
      text: "men's suits",
      subtext: "",
      path: "/suits/men",
    },
    {
      image: HeroKnits,
      text: "men's knitwear",
      subtext: "",
      path: "/knitwear/men",
    },
    {
      image: menfashion,
      text: "men's fashion",
      subtext: "new collection",
      path: "/men's fashion/men",
    },
    {
      image: shoe,
      text: "men's shoes",
      subtext: "",
      path: "/men's shoes/men",
    },
  ];

  return (
    <section>
      <StackedImages heroImages={heroImages} />
    </section>
  );
};
