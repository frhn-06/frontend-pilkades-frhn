import cn from "@/utils/cn";
import { Button, PressEvent } from "@heroui/react"
import React from "react"

interface TypeProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onPress?: (e: PressEvent) => void;
  type?: "submit" | "button";
  fullWidth?: boolean;
  className?: string; 
}
const ButtonSolid = (props: TypeProps) => {
    const {
      children,
      isDisabled,
      onPress,
      type,
      fullWidth,
      className
    } = props;


    return (
        <Button 
          type={type} 
          onPress={onPress} 
          className={`bg-red-600 text-white ${className}`} 
          isDisabled={isDisabled} 
          fullWidth={fullWidth}
        >
          {children}
        </Button>
    )
}

export default ButtonSolid