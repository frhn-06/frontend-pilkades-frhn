import { Button, PressEvent } from "@heroui/react"
import Link from "next/link";
import React from "react"

interface TypeProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onPress?: (e: PressEvent) => void;
  type?: "submit" | "button";
  className?: string;
  minWidth?: boolean;
  fullWidth?: boolean;
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
      minWidth,
      fullWidth,
      type,
      className
    } = props;


    return (
        <Button 
          as={isLink ? Link : "button"}
          href={isLink ? href : ""}
          onPress={onPress} 
          type={type} 
          fullWidth={fullWidth}
          className={`bg-red-100 border-2 border-red-500 text-red-500 ${className} ${minWidth && "w-fit"}`}
          isDisabled={isDisabled}
        >
          {children}
        </Button>
    )
}

export default ButtonFlat