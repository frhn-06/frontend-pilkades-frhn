import CTA from "@/compnents/ui/CTA";
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

        <CTA 
          title="Ingin Mengetahui Lebih Lanjut?"
          text="Lihat bagaimana VoteDesk dapat membantu menyederhanakan pengelolaan proses pemilihan."
          button1
          textButton1="Hubungi Kami"
          hrefButton1="/contact"
        />
      </div>
    )
}

export default HowItWorksPage;