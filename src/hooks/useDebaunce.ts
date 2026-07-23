import { useRef } from "react"

const useDebaunce = () => {
    
    const timeRef = useRef<ReturnType<typeof setTimeout>>(null);

    const debaunce = (func: () => void, delay:number) => {
        if(timeRef.current) clearTimeout(timeRef.current);

        timeRef.current = setTimeout(() => {
            func();
        }, delay); 
    }

    return {
        debaunce
    }
}

export default useDebaunce;