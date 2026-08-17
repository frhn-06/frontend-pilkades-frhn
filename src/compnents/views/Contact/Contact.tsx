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

        <CTA />
      </div>
    )
}


export default Contact;