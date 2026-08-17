import HeroSection from "./HeroSection";
import ValueProposition from "./ValueProposition";
import Features from "./Features";
import Keunggulan from "./Keunggulan";
import FAQ from "./FAQ";
import CTA from "@/compnents/ui/CTA";


const HomePage = (props: {name: string}) => {
    const {
      name
    } = props;
    return (
      <div className="min-h-[3000px]">
        <HeroSection name={name} />


        <ValueProposition name={name} />


        <Features name={name} />


        <Keunggulan name={name} />


        <FAQ name={name} />


        <CTA />
      </div>
    )
}

export default HomePage;