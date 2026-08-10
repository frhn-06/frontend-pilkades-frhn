import { Card, CardBody, CardFooter } from "@heroui/react";
import listConstant from "./listConstant";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";

interface TypeProps {
    name: string;
}

const ContactCards = (props: TypeProps) => {
    const {
        name
    } = props;

    return (
      <section className="relative w-full pt-22 lg:pt-36 pb-48 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listConstant(name).map((list, i) => (
              <Card key={i} className="p-2 shadow-2xl shadow-red-500/40 border-2 border-red-400/20">
                <CardBody className="gap-2 items-center">
                  <h1 className="text-red-800 font-bold text-2xl">
                    {list.name}
                  </h1>
                  <div className="text-red-700 w-18 h-18">
                    {list.icon}
                  </div>
                  <p className="text-gray-700">
                    {list.description}
                  </p>
                </CardBody>
                <CardFooter>
                  <ButtonSolid isLink href={list.href} fullWidth>
                    {list.textButton}
                  </ButtonSolid>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> 
    )
}

export default ContactCards;