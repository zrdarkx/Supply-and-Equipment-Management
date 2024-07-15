import { useLottie } from "lottie-react";
import Landing from "../assets/landing.json";

const LandingAnimation = () => {
  const options = {
    animationData: Landing,
    loop: true,
    style: {
      width: 500,
      height: 500,
    },
  };
  const { View } = useLottie(options);
  return <>{View}</>;
};

export default LandingAnimation;
