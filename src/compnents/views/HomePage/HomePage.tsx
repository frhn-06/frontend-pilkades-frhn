import HeroSection from "./HeroSection";
import ValueProposition from "./ValueProposition";
import Features from "./Features";
import Keunggulan from "./Keunggulan";
import FAQ from "./FAQ";
import CTA from "@/compnents/ui/CTA";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";


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


        <CTA 
          title="Siap Mengelola Pemilihan dengan Lebih Mudah?"
          text="Kelola seluruh proses pemilihan dalam satu sistem yang terstruktur, terpantau, dan mudah digunakan."
          buttonChildren={(
            <div className="flex justify-center gap-4">
              <ButtonSolid 
                className="bg-yellow-400"
                isLink 
                href="/auth/register"
              >
                Mulai
              </ButtonSolid>
                  
              <ButtonFlat isLink href="/how-it-works">
                Cara Kerja
              </ButtonFlat>        
            </div>
          )}
        />
      </div>
    )
}

export default HomePage;