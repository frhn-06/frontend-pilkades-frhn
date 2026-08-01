import { signOut } from "next-auth/react";

const responseHandler =  {
    jwtExpired: (error: Error) => {
        if(error.message === "jwt expired") {
            signOut();
        }
    }
} 

export default responseHandler;