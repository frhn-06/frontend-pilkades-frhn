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


        <CTA 
          title="Siap Mengelola Pemilihan dengan Lebih Mudah?"
          text="Kelola seluruh proses pemilihan dalam satu sistem yang terstruktur, terpantau, dan mudah digunakan."
          button1
          textButton1="Mulai"
          hrefButton1="/auth/register"
          button2
          textButton2="Cara Kerja"
          hrefButton2="/how-it-works"
        />
      </div>
    )
}

export default HomePage;