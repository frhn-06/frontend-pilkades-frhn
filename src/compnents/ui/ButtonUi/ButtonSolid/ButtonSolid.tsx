import { Button, PressEvent } from "@heroui/react"
import React from "react"

interface TypeProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onPress?: (e: PressEvent) => void;
  type?: "submit" | "button";
  fullWidth?: boolean;
  minWidth?: boolean;
  className?: string; 
}
const ButtonSolid = (props: TypeProps) => {
    const {
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
          className={`bg-inti text-white ${className} ${minWidth && "w-fit"}`} 
          isDisabled={isDisabled} 
          fullWidth={fullWidth}
        >
          {children}
        </Button>
    )
}

export default ButtonSolid