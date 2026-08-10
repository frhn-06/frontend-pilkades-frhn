import HeroSection from "./HeroSection";
import Steps from "./Steps";


interface TypeProps {
  name: string;
}

const HowItWorksPage = (props: TypeProps) => {
    const {
      name
    } = props;

    return (
      <div className="min-h-[3000px]">
        <HeroSection name={name} />

        <Steps />
      </div>
    )
}

export default HowItWorksPage;