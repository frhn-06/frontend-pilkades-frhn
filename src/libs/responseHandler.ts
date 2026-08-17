import { signOut } from "next-auth/react";

const responseHandler =  {
    jwtExpired: (error: Error) => {
        console.log(error)
        console.log("mesage ", error.message)
        console.log("name ", error.name)
        if(error.message === "jwt expired" || error.message === "Unauthorized") {
            signOut();
        }
    }
} 

export default responseHandler;