import CTA from "@/compnents/ui/CTA";
import ContactCards from "./ContactCards";
import HeroSection from "./HeroSection";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";

interface TypeProps {
  name: string;
}
const Contact = (props: TypeProps) => {
    const {
      name
    } = props;

    return (
      <div>
        <HeroSection />

        <ContactCards name={name} />

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


export default Contact;