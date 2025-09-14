import { Button } from "./button";
import Image from "next/image";
import HeroImage from "../../../public/hero.png";

const HeroSection = () => {
  return (
    <div className="flex gap-20 justify-center">
      <div className="flex flex-col gap-7 max-w-2xl my-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          Spiritual Guidance You Can Trust
        </h1>
        <p className="text-[#717171] dark:text-gray-300 font-medium text-[24px]">
          Connect with verified spiritual guides, access sacred teachings, and
          embark on an authentic spiritual journey secured by blockchain
          technology.
        </p>
        <Button className=" p-9 w-min text-[24px] dark:text-gray-200 bg-primary hover:bg-transparent hover:text-gray-200 hover:border-3 hover:border-gradient-to-r from-primary to-indego hover:cursor-pointer">
          Start Your Journey
        </Button>
      </div>
      <Image src={HeroImage} alt="Hero Image" width={700} />
    </div>
  );
};

export default HeroSection;
