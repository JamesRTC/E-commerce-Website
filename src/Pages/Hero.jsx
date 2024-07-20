import { HeroImages } from "../components/HeroImages";
import { HeroSlider } from "../components/HeroSlider";
import { NewArrivals } from "../components/NewArrivals";

export const Hero = () => {
  return (
    <>
      <HeroSlider />
      <NewArrivals />
      <HeroImages />
    </>
  );
};
