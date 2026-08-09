import PageHead from "@/compnents/commons/PageHead";
import NavbarLayout from "./NavbarLayout";
import FooterLayout from "./FooterLayout";

interface TypeProps {
  titlePage: string;
  children: React.ReactNode;
  name: string;
}
const LandingPageLayout = (props: TypeProps) => {
    const {
      titlePage,
      children,
      name
    } = props;

    return (
      <>
        <PageHead title={titlePage} />  
        
        <div className="w-full max-w-[2000px] mx-auto">
          <NavbarLayout name={name} />
          
          <main className="overflow-x-hidden">
            {children}
          </main>

          <FooterLayout name={name} />
        </div>
      </>
    )
}


export default LandingPageLayout;