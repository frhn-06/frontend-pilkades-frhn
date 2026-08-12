import { motion } from "motion/react";
import { revealVariants } from "./variants";

interface TypeProps {
    children: React.ReactNode;
    variant?: keyof typeof revealVariants;
    className?: string;
}
const ScrollReveal = (props: TypeProps) => {
    const {
        children,
        variant = "fadeUp",
        className
    } = props;


    return (
      <motion.div
        className={className}
        variants={revealVariants[variant]}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.7,
          ease: "easeOut"
        }}
        viewport={{
          once: true,
          amount: 0.2
        }}
      >
        {children}
      </motion.div>
    )
}

export default ScrollReveal;