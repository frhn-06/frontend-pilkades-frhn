import { Card, CardBody } from "@heroui/react";
import listConstant from "./listConstant";
import ScrollReveal from "@/compnents/animation/ScrollReveal";
import { motion } from "motion/react";
import { revealVariants } from "@/compnents/animation/variants";

interface TypeProps {
  name: string;
}
const ValueProposition = (props: TypeProps) => {
    const {
      name
    } = props;

    
    return (
      <section className="relative w-full pt-22 lg:pt-36 pb-48 px-4">
        <div className="w-full max-w-7xl mx-auto">
          
          <ScrollReveal variant="fadeUp">
            <div className="w-full max-w-3xl mx-auto mb-24">
              <h1 className="font-semibold text-2xl lg:text-3xl text-red-600 text-center mb-4">
                SATU PLATFORM, SELURUH PROSES
              </h1>
              <h2 className="text-gray-800 text-xl text-center mb-1">
                Kelola Pemilihan dari Awal hingga Akhir
              </h2>
              <p className="text-gray-500 text-center">
                {name} membantu mengelola seluruh proses pemilihan dalam satu platform — mulai dari persiapan data, pemungutan suara, pemantauan hasil, hingga laporan akhir.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="container">
            <div className="w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listConstant.map((list, i) => (
                  <motion.div key={list.id} variants={revealVariants.item}>
                    <div className="shadow-2xl/40 shadow-red-500 rounded-xl transition duration-250 hover:-translate-y-2 hover:shadow-2xl/80">
                      <Card className="p-2">
                        <CardBody className="flex-row gap-4">
                          <p className="font-bold text-2xl text-gray-700">
                            {i + 1}.
                          </p>
                          <div className="flex flex-col gap-4">
                            <div className="w-14 h-14 text-white p-2 bg-inti rounded-xl">
                              {list.icon}
                            </div>
                            <h1 className="text-xl font-semibold text-red-800">
                              {list.title}
                            </h1>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
}

export default ValueProposition;