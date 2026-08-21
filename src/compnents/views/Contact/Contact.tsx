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
          button1={{
            text: "Mulai",
            href: "/auth/register",
            color: "yellow"
          }}
          button2={{
            text: "Cara Kerja",
            href: "/how-it-works"
          }}
        />
      </div>
    )
}


export default Contact;