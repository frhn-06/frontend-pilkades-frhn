import { Button, PressEvent } from "@heroui/react"
import Link from "next/link";
import React from "react"

interface TypeProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onPress?: (e: PressEvent) => void;
  type?: "submit" | "button";
  className?: string;
  isLink?: boolean;
  href?: string;
}
const ButtonFlat = (props: TypeProps) => {
    const {
      isLink,
      href,
      children,
      isDisabled,
      onPress,
      type,
      className
    } = props;


    return (
        <Button 
          as={isLink ? Link : "button"}
          href={isLink ? href : ""}
          onPress={onPress} 
          type={type} 
          className={`bg-red-100 border-2 border-red-500 text-red-500 ${className}`}
          isDisabled={isDisabled}
        >
          {children}
        </Button>
    )
}

export default ButtonFlat