import { createContext, useState } from "react";


interface ITasterContect {
    toaster: {
        type: string;
        message: string;
    },
    setToaster: (toaster: {type: string; message: string}) => void
}
const toasterContext = createContext<ITasterContect>({
    toaster: {
        type: "",
        message: ""
    },
    setToaster: () => {}
});


interface TypeProps {
    children: React.ReactNode
}

const ToasterProvider = (props: TypeProps) => {
    const {
        children
    } = props;


    const [toaster, setToaster] = useState({
        type: "",
        message: ""
    })

    return (
        <toasterContext.Provider value={{toaster, setToaster}}>
            {children}
        </toasterContext.Provider>
    )
}


export {ToasterProvider}
export default toasterContext;