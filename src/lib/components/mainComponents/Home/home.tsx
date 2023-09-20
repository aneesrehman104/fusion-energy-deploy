import React from "react";

interface PROPS {}
import { FusionEnergyBackgroundImage } from "@/lib/components/commonComponets";
const homeArray = [
  {
    title: "Solar Panel",
    button1Text: "Explore Your Home",
    button1Link: "",
    button2Text: "Learn More",
    button2Link: "",
    backgroundImage: "/FusionEnergySolarPanelBG.svg",
  },
  {
    title: "Home Batteries",
    button1Text: "Store Your Power",
    button1Link: "",
    button2Text: "Learn More",
    button2Link: "",
    backgroundImage: "/FusionEnergyHomeBatteryBG.svg",
  },
  {
    title: "Artificial Turf",
    button1Text: "Explore Turf",
    button1Link: "",
    button2Text: "Learn More",
    button2Link: "",
    backgroundImage: "/FusionEnergyArtificalTurfBG.svg",
  },
];
const Home: React.FC<PROPS> = () => {
  return (
    <main>
      <section>
        {homeArray.map((item: any) => {
          return (
            <FusionEnergyBackgroundImage
              key={item.title}
              title={item.title}
              button1Text={item.button1Text}
              button1Link={item.button1Link}
              button2Text={item.button2Text}
              button2Link={item.button2Link}
              backgroundImage={item.backgroundImage}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Home;
