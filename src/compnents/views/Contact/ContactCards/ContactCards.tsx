import { Card, CardBody, CardFooter } from "@heroui/react";
import listConstant from "./listConstant";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import ScrollReveal from "@/compnents/animation/ScrollReveal";
import { motion, MotionConfig } from "motion/react";
import { revealVariants } from "@/compnents/animation/variants";

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
          <ScrollReveal variant="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listConstant(name).map((list, i) => (
                <motion.div key={i} variants={revealVariants.item}>
                  <Card className="shadow-2xl shadow-red-500/40 border-2 border-red-400/20 h-full">
                    <CardBody className="gap-2 items-center p-4">
                      <h1 className="text-red-800 font-bold text-2xl">
                        {list.name}
                      </h1>
                      <div className="text-red-700 w-18 h-18">
                        {list.icon}
                      </div>
                      <p className="text-gray-700 text-center">
                        {list.description}
                      </p>
                    </CardBody>
                    <CardFooter>
                      <ButtonSolid isLink href={list.href} fullWidth>
                        {list.textButton}
                      </ButtonSolid>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section> 
    )
}

export default ContactCards;