import { Button, PressEvent } from "@heroui/react"
import Link from "next/link";
import React from "react"

interface TypeProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onPress?: (e: PressEvent) => void;
  type?: "submit" | "button";
  fullWidth?: boolean;
  minWidth?: boolean;
  className?: string;
  isLink?: boolean;
  href?: string;
}
const ButtonSolid = (props: TypeProps) => {
    const {
      isLink,
      href,
      children,
      isDisabled,
      onPress,
      type,
      fullWidth,
      minWidth,
      className
    } = props;


    return (
        <Button 
          type={type} 
          onPress={onPress} 
          as={isLink ? Link : "button"}
          href={isLink ? href : ""}
          className={`bg-inti text-white ${className} ${minWidth && "w-fit"}`} 
          isDisabled={isDisabled} 
          fullWidth={fullWidth}
        >
          {children}
        </Button>
    )
}

export default ButtonSolid