 
import Popup from "./components/Home/Popup";
import Playground from "./components/Home/Playground";
import Brilliance from "./components/Home/Brilliance";
import ProofofProgress from "./components/Home/ProofofProgress";
import Statistics from "./components/Home/Statistics";
import Sustainability from "./components/Home/Sustainability";
import GlobalBusiness from "./components/Home/GlobalBusiness";
import RoadMap from "./components/Home/RoadMap";
import Milestones from "./components/Home/Milestone";
import Incentives from "./components/Home/Incentives";
import Arts from "./components/Home/Arts";
import BookExperience from "./components/Home/BookExperience";
import ParallaxExperience from "./components/Home/ParallaxExperience";
import Bollywood from "./components/Home/Bollywood";
import Envelop from "./components/Home/Envelop"; 
import HeroBanner from "@/components/home/HeroBanner"; 
import EverythingSection from "./components/Home/EverythingSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Popup />
      <ProofofProgress />
      <Playground />
      <Brilliance />
      <Statistics />
      <Sustainability /> 
      <EverythingSection />  
      <GlobalBusiness />
      <Milestones />
      <RoadMap />
      <Incentives />
      <Arts />
      <BookExperience />
      <ParallaxExperience />
      <Bollywood />
      <Envelop />
    </>
  );
}
