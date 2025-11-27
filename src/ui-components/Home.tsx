import { BackgroundBeamsWithCollisionPage } from "./BackgroundBeamsWithCollisionPage";
import CompareComponent from "./CompareComponent";
import Intergration from "./Integration";
import MedmlPlatform from "./MedmlPlatform";
import { PointerCardDemo } from "./PointerCardDemo";
import { WhoWeWorkWith } from "./WhoWeWorkWith";

export default function Home() {
  return (
    <>
    <BackgroundBeamsWithCollisionPage />
        <PointerCardDemo />
        <CompareComponent />
        <MedmlPlatform />
        <WhoWeWorkWith />
        {/* <TimelineCompo /> */}
        <Intergration />
    </>
  );
}