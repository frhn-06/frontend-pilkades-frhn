import CTA from "@/compnents/ui/CTA";
import HeroSection from "./HeroSection";
import Steps from "./Steps";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";



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
          buttonChildren={(
            <div className="flex justify-center gap-4">
              <ButtonSolid 
                className="bg-yellow-400"
                isLink 
                href="/contact"
              >
                Hubungi Kami
              </ButtonSolid>   
            </div>
          )}
        />
      </div>
    )
}

export default HowItWorksPage;