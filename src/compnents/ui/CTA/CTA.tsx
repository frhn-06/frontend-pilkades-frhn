import ScrollReveal from "@/compnents/animation/ScrollReveal";
import { Card, CardBody } from "@heroui/react";



interface TypeProps {
  title: string;
  text: string;
  buttonChildren: React.ReactNode;
}

const CTA = (props: TypeProps) => {
    const {
      title,
      text,
      buttonChildren
    } = props;

    return (
      <section className="relative w-full pt-22 lg:pt-36 pb-48 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <ScrollReveal variant="scale">
            <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl/50 shadow-red-500 transition duration-250 hover:-translate-y-2 hover:shadow-2xl/80">
              <Card className="p-4 bg-red-500">
                <CardBody>
                  <h1 className="font-semibold text-2xl lg:text-3xl text-white text-center mb-4">
                    {title}
                  </h1>
                  <p className="text-gray-100 text-xl text-center mb-6">
                    {text}
                  </p>
                  {buttonChildren}
                </CardBody>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
}

export default CTA;