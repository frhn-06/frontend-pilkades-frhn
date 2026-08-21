import CTA from "@/compnents/ui/CTA";
import ContactCards from "./ContactCards";
import HeroSection from "./HeroSection";

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


export default Contact;