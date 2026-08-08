import PageHead from "@/compnents/commons/PageHead";
import NavbarLayout from "./NavbarLayout";

interface TypeProps {
  titlePage: string;
  children: React.ReactNode;
}
const LandingPageLayout = (props: TypeProps) => {
    const {
      titlePage,
      children
    } = props;

    return (
      <>
        <PageHead title={titlePage} />  
        
        <div className="w-full max-w-[2000px] mx-auto">
          <NavbarLayout />
          
          <main>
            {children}
          </main>
        </div>
      </>
    )
}


export default LandingPageLayout;