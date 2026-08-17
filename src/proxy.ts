import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { JwtExtended } from "./pages/api/auth/[...nextauth]";



export async function proxy(req: NextRequest) {

    const token : JwtExtended | null = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
    })


    const accessToken = token?.user?.accessToken;
    const role = token?.user?.role;
    const pathName = req.nextUrl.pathname;



    if(pathName.startsWith("/admin") || pathName.startsWith("/petugas")) {
        if(!accessToken) {
            const url = new URL("/auth/login", req.url);
            return NextResponse.redirect(url);
        }
    }

    if(pathName.startsWith("/admin")) {
        if(accessToken) {
            if(role === "PETUGAS") {
                const url = new URL("/petugas/dashboard", req.url);
                return NextResponse.redirect(url);   
            }
        }
    }

    if(pathName.startsWith("/petugas")) {
        if(accessToken) {
            if(role === "SUPER_ADMIN") {
                const url = new URL("/admin/dashboard", req.url);
                return NextResponse.redirect(url);   
            }
        }
    }



    if(pathName === "/auth/login" || pathName === "/auth/register" || pathName === "/auth/activation") {
        if(accessToken) {
            if(role && role === "SUPER_ADMIN") {
                const url = new URL("/admin/dashboard", req.url);
                return NextResponse.redirect(url);
            } else if(role && role === "PETUGAS") {
                const url = new URL("/petugas/dashboard", req.url);
                return NextResponse.redirect(url);
            }
        }
    }
    



    if(pathName === "/login") {
        const url = new URL("/auth/login", req.url);
        return NextResponse.redirect(url);
    }

    if(pathName === "/register") {
        const url = new URL("/auth/register", req.url);
        return NextResponse.redirect(url);
    }

    if(pathName === "/dashboard") {
        if(accessToken) {
            if(role === "SUPER_ADMIN") {
                const url = new URL("/admin/dashboard", req.url);
                return NextResponse.redirect(url);
            } else if(role === "PETUGAS") {
                const url = new URL("/petugas/dashboard", req.url);
                return NextResponse.redirect(url);   
            }
        }
    }


    if(pathName === "/") {
        if(accessToken) {
            const url = new URL("/dashboard", req.url);
            return NextResponse.redirect(url);
        }
    }

    
    return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/register", "/auth/activation", "/admin/:path", "/petugas/:path", "/login", "/register", "/dashboard", "/admin", "/petugas", "/"],
};