import AuthService from "@/services/auth.service";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from "next-auth";
import axios from "axios";

interface UserExtended extends User {
    role?: string;
    accessToken?: string;
}

interface JwtExtended extends JWT {
    user?: UserExtended
}

interface SessionExtended extends Session {
    accessToken?: string;
}

export const authOptions : NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24
    },
    secret: process.env.NEXTAUTH_SECRET, 
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                identifier: {
                    label: "identifier",
                    type: "text"
                },
                password: {
                    label: "password",
                    type: "password"
                }
            },
            async authorize(credentials: Record<"identifier" | "password", string> | undefined) : Promise<UserExtended | null> {
                try {
                    const {identifier, password} = credentials as {identifier: string; password: string};
    
                    const result = await AuthService.login({identifier, password});
                    
                    const accessToken = result.data.data;
    
                    const me = await AuthService.me(accessToken);
    
                    const user = me.data.data;
                    
                    if(result.status === 200 && accessToken && me.status === 200 && user.id) {
                        user.accessToken = accessToken;
                        return user;
                    } else {
                        return null
                    }

                } catch(error: unknown) {
                    let message = ""
                    if(axios.isAxiosError(error)) {
                        message = error?.response?.data?.message;
                    } else {
                        message = "Email Username atau Password tidak sesuai"
                    }
                    throw new Error(message);
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}: {token: JwtExtended; user: UserExtended}) {
            if(user) {
                token.user = user
            }

            return token
        },
        async session({session, token}: {session: SessionExtended, token: JwtExtended}) {
            session.user = token.user;
            session.accessToken = token.user?.accessToken;
            return session;
        }
    }
}

export default NextAuth(authOptions)

export type {UserExtended, JwtExtended, SessionExtended}