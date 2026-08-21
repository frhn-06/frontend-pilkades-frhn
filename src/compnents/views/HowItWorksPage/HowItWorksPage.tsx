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
          button1={{
            text: "Hubungi Kami",
            href: "/contact",
            color: "yellow"
          }}
        />
      </div>
    )
}

export default HowItWorksPage;