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
        <HeroSection name={name} />

        <ContactCards name={name} />
      </div>
    )
}


export default Contact;